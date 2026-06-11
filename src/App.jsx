import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loader from './components/common/Loader';
import ScrollToTop from './components/common/ScrollToTop';
import BackgroundEffects from './components/common/BackgroundEffects';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Apply dark/light class to <html> tag
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [darkMode]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <div
          key="app"
          className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
            darkMode
              ? 'bg-[#050510] text-white'
              : 'bg-gray-50 text-gray-900'
          }`}
        >
          <BackgroundEffects darkMode={darkMode} />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="relative z-10">
            <Hero darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Education darkMode={darkMode} />
            <Certifications darkMode={darkMode} />
            <Achievements darkMode={darkMode} />
            <Contact darkMode={darkMode} />
          </main>
          <Footer darkMode={darkMode} />
          <ScrollToTop />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
