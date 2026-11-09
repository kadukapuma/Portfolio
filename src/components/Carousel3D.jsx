import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Horizontal scroll carousel with a 3D "coverflow" effect.
 * Cards rotate / recede based on their distance from the centre of the track.
 * Supports native scroll (touch, trackpad, shift+wheel), mouse drag, arrows, dots and keyboard.
 */
const Carousel3D = ({ items, renderItem, getKey, itemClassName = 'w-[84vw] max-w-[420px] sm:w-[480px] sm:max-w-none lg:w-[580px]' }) => {
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const frame = useRef(0);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = track.clientWidth < 640;

    // Pad the track so the first and last cards can sit in the centre, whatever the card width
    const first = itemRefs.current[0];
    if (first) {
      const pad = Math.max(0, (track.clientWidth - first.offsetWidth) / 2) + 'px';
      if (track.style.paddingLeft !== pad) {
        track.style.paddingLeft = pad;
        track.style.paddingRight = pad;
      }
    }

    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const width = el.offsetWidth || 1;
      const d = (el.offsetLeft + width / 2 - center) / width; // distance in card widths
      const c = Math.max(-2.5, Math.min(2.5, d));
      const abs = Math.abs(c);
      // Gentler 3D on phones so the centre card stays readable and neighbours just peek in
      const rotate = reduce ? 0 : -c * (mobile ? 14 : 28);
      const depth = reduce ? 0 : -abs * (mobile ? 60 : 140);
      const scale = 1 - Math.min(abs, 2) * (mobile ? 0.1 : 0.08);
      el.style.transform = `translateZ(${depth}px) rotateY(${rotate}deg) scale(${scale})`;
      el.style.opacity = String(1 - Math.min(abs, 2.5) * (mobile ? 0.35 : 0.25));
      el.style.zIndex = String(100 - Math.round(abs * 10));
      if (Math.abs(d) < closestDist) {
        closestDist = Math.abs(d);
        closest = i;
      }
    });

    setActive((prev) => (prev === closest ? prev : closest));
  }, []);

  const onScroll = () => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
      cancelAnimationFrame(frame.current);
    };
  }, [update, items.length]);

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    const el = itemRefs.current[i];
    if (!track || !el) return;
    const target = el.offsetLeft + el.offsetWidth / 2 - track.clientWidth / 2;
    track.scrollTo({ left: target, behavior: 'smooth' });
  };

  const go = (dir) => scrollToIndex(Math.max(0, Math.min(items.length - 1, active + dir)));

  // Keep the latest active index available to the native wheel listener
  const activeRef = useRef(0);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Mouse wheel over the carousel rotates it one card per notch.
  // At the first/last card the wheel scrolls the page as normal, so visitors never get stuck.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let acc = 0;
    let lockedUntil = 0;
    let target = null;

    const onWheel = (e) => {
      if (e.ctrlKey) return; // pinch-zoom
      // Horizontal trackpad swipes already scroll the track natively
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const now = performance.now();
      const from = now < lockedUntil + 250 && target !== null ? target : activeRef.current;
      const dir = Math.sign(e.deltaY);
      const next = from + dir;
      if (dir === 0 || next < 0 || next > items.length - 1) {
        acc = 0;
        return; // at an edge: let the page scroll
      }

      e.preventDefault();
      if (now < lockedUntil) return;
      acc += e.deltaY;
      if (Math.abs(acc) < 30) return; // ignore tiny trackpad jitter

      acc = 0;
      target = next;
      lockedUntil = now + 420;
      const el = itemRefs.current[next];
      if (el) {
        track.scrollTo({ left: el.offsetLeft + el.offsetWidth / 2 - track.clientWidth / 2, behavior: 'smooth' });
      }
    };

    track.addEventListener('wheel', onWheel, { passive: false });
    return () => track.removeEventListener('wheel', onWheel);
  }, [items.length]);

  // Mouse drag-to-scroll (touch uses native scrolling)
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    drag.current = { active: true, startX: e.clientX, startScroll: trackRef.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e) => {
    const s = drag.current;
    if (!s.active) return;
    const dx = e.clientX - s.startX;
    if (!s.moved && Math.abs(dx) > 5) {
      s.moved = true;
      setIsDragging(true);
    }
    if (s.moved) trackRef.current.scrollLeft = s.startScroll - dx;
  };
  const endDrag = () => {
    const s = drag.current;
    if (!s.active) return;
    s.active = false;
    if (s.moved) {
      setIsDragging(false);
      scrollToIndex(active);
    }
  };
  // Swallow the click that ends a drag so cards don't open
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.stopPropagation();
      e.preventDefault();
      drag.current.moved = false;
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    }
  };

  const arrowClass =
    'grid h-10 w-10 shrink-0 place-items-center sm:h-11 sm:w-11 rounded-full border border-white/15 bg-white/5 text-lg text-neutral-200 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/10 disabled:pointer-events-none disabled:opacity-30';

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Projects"
        tabIndex={0}
        onScroll={onScroll}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className={`no-scrollbar -mx-5 flex items-stretch gap-3 overflow-x-auto py-6 outline-none sm:mx-0 sm:gap-6 sm:py-10 [perspective:1400px] [transform-style:preserve-3d] ${
          isDragging ? 'cursor-grabbing select-none' : 'snap-x snap-mandatory md:cursor-grab'
        }`}
      >
        {items.map((item, i) => (
          <div
            key={getKey(item)}
            ref={(el) => (itemRefs.current[i] = el)}
            className={`shrink-0 snap-center snap-always will-change-transform ${itemClassName}`}
          >
            {renderItem(item, i, i === active)}
          </div>
        ))}
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 -left-5 w-6 sm:left-0 sm:w-10 md:w-24 bg-gradient-to-r from-primary to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 -right-5 w-6 sm:right-0 sm:w-10 md:w-24 bg-gradient-to-l from-primary to-transparent" />

      <div className="mt-2 flex items-center justify-center gap-3 sm:gap-5">
        <button type="button" aria-label="Previous project" className={arrowClass} onClick={() => go(-1)} disabled={active === 0}>
          &larr;
        </button>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={getKey(item)}
              type="button"
              aria-label={`Go to project ${i + 1}`}
              aria-current={i === active}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all ${i === active ? 'w-7 bg-aqua' : 'w-2 bg-white/25 hover:bg-white/50'}`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next project"
          className={arrowClass}
          onClick={() => go(1)}
          disabled={active === items.length - 1}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Carousel3D;
