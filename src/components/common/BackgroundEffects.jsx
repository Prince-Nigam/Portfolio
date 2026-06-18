import { motion } from 'framer-motion';

/* ── Floating Code/Tech Symbol ── */
const TechSymbol = ({ symbol, top, left, right, bottom, delay, duration, color, size }) => (
  <motion.div
    className="absolute pointer-events-none font-mono font-bold select-none"
    style={{ top, left, right, bottom, color, fontSize: size, textShadow: `0 0 12px ${color}80`, opacity: 0 }}
    animate={{ opacity: [0, 0.6, 0.3, 0.7, 0], y: [0, -15, -5, -20, 0], rotateZ: [-5, 5, -3, 7, -5] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    {symbol}
  </motion.div>
);

/* ── Floating Particle dot ── */
const Particle = ({ top, left, delay, size, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ top, left, width: size, height: size, background: color, boxShadow: `0 0 8px ${color}` }}
    animate={{ y: [0, -25, 0], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
    transition={{ duration: 3.5, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

/* ── Circuit Node ── */
const CircuitNode = ({ top, left, color, delay }) => (
  <motion.div className="absolute pointer-events-none" style={{ top, left }}
    animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.3, 1] }}
    transition={{ duration: 2.5, repeat: Infinity, delay }}>
    <div className="relative">
      <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: color, boxShadow: `0 0 10px ${color}` }} />
      <div className="absolute top-1/2 left-full w-8 h-px -translate-y-1/2" style={{ background: `linear-gradient(90deg, ${color}80, transparent)` }} />
      <div className="absolute top-full left-1/2 h-8 w-px -translate-x-1/2" style={{ background: `linear-gradient(180deg, ${color}80, transparent)` }} />
    </div>
  </motion.div>
);

/* ── 3D Rotating Cube ── */
const Cube3D = ({ top, left, right, size, color, delay, duration }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ top, left, right, width: size, height: size, perspective: '200px' }}
    animate={{ y: [0, -12, 0, 8, 0] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    <motion.div
      style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
      animate={{ rotateY: [0, 360], rotateX: [0, 180, 360] }}
      transition={{ duration: duration * 2, repeat: Infinity, ease: 'linear', delay }}
    >
      {/* Front */}
      <div className="absolute inset-0 rounded-lg"
        style={{ background: `linear-gradient(135deg, ${color}30, ${color}10)`, border: `1px solid ${color}50`, transform: `translateZ(${parseInt(size)/2}px)` }} />
      {/* Back */}
      <div className="absolute inset-0 rounded-lg"
        style={{ background: `linear-gradient(135deg, ${color}20, ${color}08)`, border: `1px solid ${color}30`, transform: `translateZ(-${parseInt(size)/2}px) rotateY(180deg)` }} />
      {/* Right */}
      <div className="absolute inset-0 rounded-lg"
        style={{ background: `linear-gradient(135deg, ${color}25, ${color}08)`, border: `1px solid ${color}40`, transform: `rotateY(90deg) translateZ(${parseInt(size)/2}px)` }} />
      {/* Left */}
      <div className="absolute inset-0 rounded-lg"
        style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)`, border: `1px solid ${color}30`, transform: `rotateY(-90deg) translateZ(${parseInt(size)/2}px)` }} />
      {/* Top */}
      <div className="absolute inset-0 rounded-lg"
        style={{ background: `linear-gradient(135deg, ${color}35, ${color}10)`, border: `1px solid ${color}50`, transform: `rotateX(90deg) translateZ(${parseInt(size)/2}px)` }} />
      {/* Bottom */}
      <div className="absolute inset-0 rounded-lg"
        style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)`, border: `1px solid ${color}20`, transform: `rotateX(-90deg) translateZ(${parseInt(size)/2}px)` }} />
    </motion.div>
  </motion.div>
);

/* ── Rotating Ring ── */
const Ring = ({ size, top, left, color, duration, delay }) => (
  <motion.div className="absolute pointer-events-none rounded-full"
    style={{ width: size, height: size, top, left, border: `1px solid ${color}20`, boxShadow: `0 0 20px ${color}08` }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear', delay }} />
);

/* ── Glow Orb ── */
const GlowOrb = ({ darkMode, top, left, right, bottom, color, size, delay }) => (
  <motion.div className="absolute pointer-events-none rounded-full"
    style={{ width: size, height: size, top, left, right, bottom,
      background: darkMode ? `radial-gradient(circle, ${color}18 0%, transparent 70%)` : `radial-gradient(circle, ${color}0a 0%, transparent 70%)`,
      filter: 'blur(70px)' }}
    animate={{ x: [0, 50, -30, 20, 0], y: [0, -40, 25, -15, 0], scale: [1, 1.15, 0.92, 1.08, 1] }}
    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay }} />
);

const BackgroundEffects = ({ darkMode }) => {
  const techSymbols = [
    // Code brackets & operators
    { symbol: '</>',    top: '8%',  left: '5%',   color: '#a855f7', size: '14px', delay: 0,   duration: 8  },
    { symbol: '{ }',    top: '15%', left: '88%',  color: '#3b82f6', size: '13px', delay: 1,   duration: 7  },
    { symbol: '( )',    top: '45%', left: '3%',   color: '#06b6d4', size: '12px', delay: 2,   duration: 9  },
    { symbol: '=>',     top: '72%', left: '90%',  color: '#8b5cf6', size: '13px', delay: 0.5, duration: 7.5},
    { symbol: '[ ]',   top: '85%', left: '8%',   color: '#a855f7', size: '12px', delay: 3,   duration: 8.5},
    { symbol: '::',    top: '30%', left: '95%',  color: '#06b6d4', size: '16px', delay: 1.5, duration: 6  },
    // Python / DS symbols
    { symbol: 'λ',      top: '20%', left: '18%',  color: '#a855f7', size: '20px', delay: 0.8, duration: 10 },
    { symbol: 'Σ',      top: '60%', left: '82%',  color: '#3b82f6', size: '18px', delay: 2.2, duration: 9  },
    { symbol: '∇',      top: '78%', left: '45%',  color: '#06b6d4', size: '18px', delay: 1.2, duration: 8  },
    { symbol: 'π',      top: '35%', left: '75%',  color: '#8b5cf6', size: '16px', delay: 3.5, duration: 11 },
    { symbol: '∞',      top: '92%', left: '70%',  color: '#a855f7', size: '17px', delay: 4,   duration: 7  },
    { symbol: '√',      top: '5%',  left: '55%',  color: '#3b82f6', size: '18px', delay: 0.3, duration: 9.5},
    // Binary
    { symbol: '01',     top: '25%', left: '60%',  color: '#06b6d4', size: '11px', delay: 1.8, duration: 12 },
    { symbol: '10',     top: '50%', left: '40%',  color: '#a855f7', size: '11px', delay: 2.8, duration: 11 },
    { symbol: '1010',   top: '65%', left: '25%',  color: '#3b82f6', size: '10px', delay: 0.6, duration: 13 },
    { symbol: '0101',   top: '12%', left: '42%',  color: '#8b5cf6', size: '10px', delay: 4.5, duration: 10 },
    // ML/AI
    { symbol: 'ML',     top: '40%', left: '92%',  color: '#a855f7', size: '13px', delay: 2,   duration: 8  },
    { symbol: 'AI',     top: '88%', left: '30%',  color: '#06b6d4', size: '13px', delay: 1,   duration: 9  },
    { symbol: 'def',    top: '55%', left: '12%',  color: '#3b82f6', size: '12px', delay: 3.2, duration: 10 },
    { symbol: 'import', top: '18%', left: '72%',  color: '#8b5cf6', size: '11px', delay: 2.5, duration: 11 },
    // Data
    { symbol: 'SQL',    top: '95%', left: '50%',  color: '#a855f7', size: '12px', delay: 1.6, duration: 8  },
    { symbol: 'API',    top: '3%',  left: '78%',  color: '#3b82f6', size: '12px', delay: 3.8, duration: 9  },
    { symbol: 'GCP',    top: '70%', left: '60%',  color: '#06b6d4', size: '11px', delay: 0.9, duration: 10 },
    { symbol: '⚡',      top: '42%', left: '55%',  color: '#fbbf24', size: '16px', delay: 5,   duration: 7  },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* ── Deep background ── */}
      <div className="absolute inset-0 transition-all duration-500"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at 15% 15%, #0d0025 0%, #050510 45%, #000d1a 100%)'
            : 'radial-gradient(ellipse at 15% 15%, #f5f0ff 0%, #f1f5f9 45%, #eff6ff 100%)',
        }}
      />

      {/* ── Animated grid ── */}
      <motion.div className="absolute inset-0"
        animate={{ opacity: [0.025, 0.05, 0.025] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          backgroundImage: darkMode
            ? `linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)`
            : `linear-gradient(rgba(168,85,247,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.2) 1px, transparent 1px)`,
          backgroundSize: '70px 70px',
        }}
      />

      {/* ── Glow orbs ── */}
      <GlowOrb darkMode={darkMode} top="-10%" left="-5%"   color="#a855f7" size="700px" delay={0}  />
      <GlowOrb darkMode={darkMode} top="25%"  right="-8%"  color="#3b82f6" size="600px" delay={6}  />
      <GlowOrb darkMode={darkMode} bottom="0%" left="20%"  color="#06b6d4" size="500px" delay={12} />
      <GlowOrb darkMode={darkMode} top="55%"  right="25%"  color="#8b5cf6" size="400px" delay={4}  />

      {/* ── Rotating rings ── */}
      <Ring size="350px" top="2%"   left="55%"  color="#a855f7" duration={30} delay={0} />
      <Ring size="250px" top="45%"  left="2%"   color="#3b82f6" duration={22} delay={4} />
      <Ring size="180px" top="70%"  left="68%"  color="#06b6d4" duration={18} delay={8} />
      <Ring size="450px" top="25%"  left="25%"  color="#8b5cf6" duration={40} delay={2} />

      {/* ── 3D Rotating Cubes ── */}
      <Cube3D top="6%"  left="2%"   size="40px" color="#a855f7" delay={0}   duration={8}  />
      <Cube3D top="20%" right="3%"  size="30px" color="#3b82f6" delay={1.5} duration={10} />
      <Cube3D top="75%" left="4%"   size="35px" color="#06b6d4" delay={3}   duration={9}  />
      <Cube3D top="80%" right="5%"  size="28px" color="#8b5cf6" delay={2}   duration={11} />
      <Cube3D top="40%" left="94%"  size="32px" color="#a855f7" delay={4}   duration={7}  />

      {/* ── Circuit nodes ── */}
      <CircuitNode top="30%" left="10%"  color="#a855f7" delay={0}   />
      <CircuitNode top="55%" left="85%"  color="#3b82f6" delay={1}   />
      <CircuitNode top="15%" left="65%"  color="#06b6d4" delay={2}   />
      <CircuitNode top="80%" left="40%"  color="#8b5cf6" delay={1.5} />
      <CircuitNode top="65%" left="55%"  color="#a855f7" delay={3}   />

      {/* ── Tech symbols ── */}
      {techSymbols.map((s, i) => <TechSymbol key={i} {...s} />)}

      {/* ── Particles ── */}
      {[
        { top: '22%', left: '32%', delay: 0,   size: '3px', color: '#a855f7' },
        { top: '42%', left: '72%', delay: 1,   size: '4px', color: '#3b82f6' },
        { top: '62%', left: '22%', delay: 2,   size: '3px', color: '#06b6d4' },
        { top: '82%', left: '62%', delay: 0.7, size: '4px', color: '#8b5cf6' },
        { top: '12%', left: '52%', delay: 1.5, size: '3px', color: '#a855f7' },
        { top: '72%', left: '42%', delay: 3,   size: '3px', color: '#3b82f6' },
        { top: '32%', left: '86%', delay: 2.5, size: '4px', color: '#06b6d4' },
        { top: '52%', left: '14%', delay: 0.9, size: '3px', color: '#a855f7' },
        { top: '92%', left: '76%', delay: 4,   size: '4px', color: '#8b5cf6' },
        { top: '7%',  left: '93%', delay: 1.3, size: '3px', color: '#3b82f6' },
      ].map((p, i) => <Particle key={i} {...p} />)}

      {/* ── Vignette ── */}
      <div className="absolute inset-0 transition-all duration-500"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at center, transparent 25%, rgba(5,5,16,0.65) 100%)'
            : 'radial-gradient(ellipse at center, transparent 25%, rgba(241,245,249,0.45) 100%)',
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
