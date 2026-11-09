import { useState } from 'react';
import { motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa';
import { githubProjects } from '../constants/githubProjects';

const base = githubProjects.find((p) => p.id === 'kreethya-website');

const kreethyaProject = {
  ...base,
  category: 'Commercial Production Website',
  subtitle: 'Official Company Website for Kreethya — Software Development Studio',
  status: 'Live in Production • kreethya.com',
  liveCta: 'Visit Live Website',
  ecosystem: [
    'Animated Logo Intro & Interactive Mascot Assistant',
    'Services, Work Showcase (incl. DriveCare) & Delivery Process',
    'Project Enquiry / Contact Flow',
  ],
  summaryBlurb:
    'Kreethya.com is the public face of Kreethya, a software development company. Built with React and Vite with the React Compiler enabled, the site walks visitors through the company\'s services — web, mobile, custom software, UI/UX, cloud and support — showcases delivered products such as DriveCare, explains how projects are delivered and turns visitors into enquiries. An animated logo intro and a friendly mascot assistant give it personality, while optimised WebP imagery and responsive layouts keep it fast on every device.',
  challenge:
    'A company website has to do two jobs at once: make a strong first impression for a young software studio, and quickly prove credibility by showing real, delivered work. Kreethya.com needed rich motion and personality (an animated intro and a mascot assistant) without sacrificing load speed or mobile usability, plus a clear path from "what we do" to "start a project with us".',
  techStack: {
    frontend: 'React, Vite, React Compiler',
    styling: 'CSS, responsive layouts tuned for mobile',
    media: 'Optimised WebP project imagery',
    hosting: 'Live at kreethya.com',
  },
  highlights: [
    {
      title: '1. Brand Experience & Motion',
      points: [
        'Animated logo intro that introduces the Kreethya brand on first load.',
        'Interactive mascot assistant that guides visitors around the site.',
      ],
    },
    {
      title: '2. Services & Delivered Work Showcase',
      points: [
        'Service sections covering web, mobile, custom software, UI/UX, cloud and support.',
        'Portfolio of delivered products, including DriveCare — the real-time vehicle service booking & garage management ecosystem.',
        'Step-by-step delivery process section explaining how projects run from idea to launch.',
      ],
    },
    {
      title: '3. Lead Generation',
      points: ['Contact and project enquiry flow that turns visitors into potential clients.'],
    },
    {
      title: '4. Performance & Responsiveness',
      points: [
        'React Compiler enabled for automatic memoisation and smooth rendering.',
        'Optimised WebP images and responsive layouts tuned for mobile devices.',
      ],
    },
  ],
  cardHighlights: [
    { icon: '✨', title: 'Animated Brand Intro', text: 'Logo intro animation and an interactive mascot assistant.' },
    { icon: '🧩', title: 'Services & Process', text: 'Web, mobile, custom software, UI/UX, cloud & support, plus delivery process.' },
    { icon: '🚗', title: 'Work Showcase', text: 'Presents delivered products such as the DriveCare ecosystem.' },
    { icon: '⚡', title: 'Fast & Responsive', text: 'React Compiler, WebP imagery and mobile-first responsive layouts.' },
  ],
};

const KreethyaShowcase = ({ onSelect, onOpenImage }) => {
  const p = kreethyaProject;
  const [active, setActive] = useState(0);
  const current = p.gallery[active] ?? p.gallery[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative mt-10 overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 md:p-10 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-aqua/30 hover:bg-white/[0.07]"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-aqua/10 blur-3xl"></div>

      <div className="relative flex flex-col lg:flex-row-reverse gap-8 items-start">
        {/* Image & Components */}
        <div className="w-full lg:w-5/12 flex flex-col gap-4">
          <div
            className="relative overflow-hidden rounded-2xl border border-white/10 group cursor-pointer bg-neutral-950"
            onClick={() => onOpenImage(current)}
            title="Click to view full screen"
          >
            <img
              src={current.src}
              alt={current.title}
              className="w-full h-64 md:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between gap-2 p-5">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full border border-mint/40 bg-mint/10 text-mint backdrop-blur-md">
                {p.status}
              </span>
              <span className="text-[10px] font-medium text-aqua bg-black/75 px-2.5 py-1 rounded-full border border-white/15 backdrop-blur-md">
                {current.title}
              </span>
            </div>
          </div>

          {p.gallery.length > 1 && (
            <div className="grid grid-cols-2 gap-1.5">
              {p.gallery.map((shot, idx) => (
                <button
                  key={shot.title}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`relative h-16 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                    idx === active ? 'border-aqua ring-1 ring-aqua/50' : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={shot.src} alt={shot.title} className="w-full h-full object-cover object-top" />
                  <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[9px] font-bold text-center py-0.5 text-neutral-300 truncate px-1">
                    {shot.title}
                  </span>
                </button>
              ))}
            </div>
          )}

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <p className="text-xs uppercase font-bold tracking-wider text-neutral-400">Website Experience</p>
            {p.ecosystem.map((comp) => (
              <div key={comp} className="flex items-center gap-2 text-xs text-neutral-200">
                <span className="text-mint">✓</span>
                <span>{comp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="w-full lg:w-7/12 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest text-aqua font-semibold">{p.category}</span>
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-aqua hover:underline"
              >
                <span>Visit {p.liveLabel}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">{p.title}</h3>
            <p className="text-sm font-medium text-neutral-300 mt-1">{p.subtitle}</p>

            <p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed">{p.summaryBlurb}</p>

            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Website Highlights</h4>
              <div className="grid gap-2.5 sm:grid-cols-2 text-xs text-neutral-200">
                {p.cardHighlights.map((h) => (
                  <div key={h.title} className="p-3 rounded-2xl bg-white/5 border border-white/5">
                    <strong className="text-white block mb-1">
                      {h.icon} {h.title}
                    </strong>
                    {h.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {p.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onSelect(p)}
              className="rounded-full bg-gradient-to-r from-royal to-lavender px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-royal/30 hover:scale-105 hover:shadow-royal/50 transition-all cursor-pointer"
            >
              Explore Full Case Study
            </button>
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-mint/30 bg-mint/10 px-6 py-3 text-sm font-semibold text-mint hover:bg-mint/20 hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>Visit Live Website ({p.liveLabel})</span>
              <span className="text-xs">↗</span>
            </a>
            <a
              href={p.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-neutral-200 hover:bg-white/10 hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <FaGithub size={16} />
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default KreethyaShowcase;
