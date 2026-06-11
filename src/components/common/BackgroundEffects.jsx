import { motion } from 'framer-motion';

const BackgroundEffects = ({ darkMode }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-all duration-500">

      {/* Gradient orbs — subtle in light mode */}
      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full"
        style={{
          background: darkMode
            ? 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <motion.div
        animate={{ x: [0, -60, 30, 0], y: [0, 50, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: darkMode
            ? 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <motion.div
        animate={{ x: [0, 40, -50, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
        className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full"
        style={{
          background: darkMode
            ? 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: darkMode ? 0.015 : 0.04,
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,16,0.7) 100%)'
            : 'radial-gradient(ellipse at center, transparent 40%, rgba(241,245,249,0.5) 100%)',
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
