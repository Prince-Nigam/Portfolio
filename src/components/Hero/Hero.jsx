import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../../data/data';
import ProfileImage from './ProfileImage';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = ({ darkMode }) => {
  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const typeSequence = personalInfo.roles.flatMap((r) => [r, 2500]);

  const muted = darkMode ? 'text-white/50' : 'text-slate-500';
  const statBorder = darkMode ? 'border-white/[0.06]' : 'border-slate-200';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BG */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: darkMode
            ? 'linear-gradient(135deg, #0a0014 0%, #050510 50%, #001428 100%)'
            : 'linear-gradient(135deg, #f8f0ff 0%, #f1f5f9 50%, #eff6ff 100%)',
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: darkMode ? 0.04 : 0.06,
          backgroundImage:
            'linear-gradient(rgba(168,85,247,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10 pt-24 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* ── Text ── */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">

            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(168,85,247,0.1)',
                  border: '1px solid rgba(168,85,247,0.25)',
                  color: 'rgba(168,85,247,0.9)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight tracking-tight"
            >
              <span className={darkMode ? 'text-white' : 'text-slate-800'}>Hi, I'm </span>
              <span className="gradient-text">Prince</span>
              <br />
              <span className={darkMode ? 'text-white/90' : 'text-slate-700'}>Nigam</span>
            </motion.h1>

            {/* Typing */}
            <motion.div variants={itemVariants} className="mb-6 h-10 flex items-center justify-center lg:justify-start">
              <span className={`text-xl sm:text-2xl font-semibold mr-2 ${muted}`}>I'm a</span>
              <span className="text-xl sm:text-2xl font-bold gradient-text">
                <TypeAnimation sequence={typeSequence} wrapper="span" cursor repeat={Infinity} />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p variants={itemVariants} className={`text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 ${muted}`}>
              {personalInfo.bio}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <motion.a href={personalInfo.resume.pdf} download className="btn-primary text-base" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <FiDownload size={18} /> Download Resume
              </motion.a>
              <motion.button onClick={() => scrollToSection('contact')} className="btn-secondary text-base" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <FiMail size={18} /> Contact Me
              </motion.button>
              <motion.button onClick={() => scrollToSection('projects')} className="btn-secondary text-base" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View Projects
              </motion.button>
            </motion.div>

            {/* Social */}
            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
                { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }}
                  className={`w-11 h-11 rounded-xl glass flex items-center justify-center transition-all duration-200 ${muted} hover:text-purple-500`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className={`flex gap-8 justify-center lg:justify-start mt-10 pt-8 border-t ${statBorder}`}
            >
              {[
                { value: '1', label: 'Projects' },
                { value: '5+', label: 'Certifications' },
                { value: '200+', label: 'LeetCode' },
               
              ].map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="text-2xl font-black gradient-text">{value}</div>
                  <div className={`text-xs mt-0.5 ${muted}`}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Profile Image ── */}
          <motion.div variants={itemVariants} className="flex-shrink-0 order-1 lg:order-2">
            <ProfileImage />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className={`text-xs font-medium tracking-widest uppercase group-hover:text-purple-400 transition-colors ${muted}`}>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className={`group-hover:text-purple-400 transition-colors ${muted}`}>
            <FiArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
