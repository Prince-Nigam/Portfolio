import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../../data/data';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href);
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navBg = scrolled
    ? darkMode
      ? 'bg-[#050510]/85 backdrop-blur-xl border-b border-white/[0.06]'
      : 'bg-white/85 backdrop-blur-xl border-b border-black/[0.08] shadow-sm'
    : 'bg-transparent';

  const textColor = darkMode ? 'text-white' : 'text-slate-800';
  const mutedText = darkMode ? 'text-white/50' : 'text-slate-400';
  const hoverText = darkMode ? 'hover:text-white/90' : 'hover:text-slate-900';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      } ${navBg}`}
    >
      <div className="section-container flex items-center justify-between">

        {/* Logo */}
        <motion.button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-black text-white"
            style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6)' }}
          >
            P
          </div>
          <span className={`font-bold text-lg hidden sm:block ${textColor}`}>
            Prince<span className="gradient-text"> Nigam</span>
          </span>
        </motion.button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeSection === link.href
                  ? textColor
                  : `${mutedText} ${hoverText}`
              }`}
            >
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'rgba(168,85,247,0.12)',
                    border: '1px solid rgba(168,85,247,0.25)',
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-9 h-9 rounded-xl flex items-center justify-center glass transition-all duration-200 ${mutedText} hover:${textColor}`}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiSun size={16} className="text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMoon size={16} className="text-purple-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex btn-primary text-sm px-4 py-2"
          >
            Resume
          </motion.a>

          {/* Mobile Menu */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden w-9 h-9 rounded-xl flex items-center justify-center glass ${mutedText}`}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden overflow-hidden border-t ${
              darkMode
                ? 'border-white/[0.06] bg-[#050510]/95 backdrop-blur-xl'
                : 'border-black/[0.06] bg-white/95 backdrop-blur-xl'
            }`}
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.href
                      ? darkMode
                        ? 'text-white bg-purple-500/10 border border-purple-500/20'
                        : 'text-purple-700 bg-purple-50 border border-purple-200'
                      : darkMode
                        ? 'text-white/50 hover:text-white hover:bg-white/5'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="btn-primary text-sm mt-2 justify-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
