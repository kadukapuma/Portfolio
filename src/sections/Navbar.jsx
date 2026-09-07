import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Work', href: '#work', id: 'work' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isManualScroll, setIsManualScroll] = useState(false);

  // Smooth scroll handler with offset for fixed navbar
  const handleScrollTo = (e, item) => {
    if (e) e.preventDefault();

    setActiveSection(item.id);
    setIsManualScroll(true);
    setTimeout(() => setIsManualScroll(false), 900);

    const target = document.getElementById(item.id);
    if (target) {
      const navbarOffset = 80;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - navbarOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      window.history.pushState(null, '', item.href);
    }
  };

  // Scroll spy to highlight current section
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) return;

      const scrollPosition = window.scrollY;
      const navbarOffset = 120;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const top = section.offsetTop - navbarOffset;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isManualScroll]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-xl bg-primary/70 border-b border-white/10 transition-all duration-300">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-3.5">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleScrollTo(e, { id: 'home', href: '#home' })}
            className="text-xl font-bold tracking-wider text-white hover:text-aqua transition-colors flex items-center gap-2 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="h-2 w-2 rounded-full bg-mint group-hover:scale-125 transition-transform"></span>
            <span>Randika</span>
          </motion.a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden p-1.5 rounded-lg border border-white/10 bg-white/5 transition-colors"
            aria-label="Toggle Menu"
          >
            <img
              src={
                isOpen
                  ? `${import.meta.env.BASE_URL}assets/close.svg`
                  : `${import.meta.env.BASE_URL}assets/menu.svg`
              }
              className="w-5 h-5"
              alt="toggle menu"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center">
            <ul className="flex items-center gap-1.5 md:gap-2 p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className="relative">
                    <motion.a
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item)}
                      className={`relative z-10 block px-3.5 py-1.5 text-xs md:text-sm font-medium transition-colors rounded-full cursor-pointer ${
                        isActive
                          ? 'text-white font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.94 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navTabIndicator"
                          className="absolute inset-0 rounded-full bg-white/15 border border-white/20 shadow-[0_0_15px_rgba(122,87,219,0.35)]"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden sm:hidden border-t border-white/10 bg-primary/95 backdrop-blur-2xl px-6 py-4"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                  >
                    <motion.a
                      href={item.href}
                      onClick={(e) => {
                        handleScrollTo(e, item);
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-white/10 text-white border border-white/15 font-semibold'
                          : 'text-neutral-400 hover:text-white hover:bg-white/5'
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-lavender shadow-[0_0_8px_#7a57db]"></span>
                      )}
                    </motion.a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
