import { motion } from 'framer-motion';

/* ── Floating Code Line ── */
const CodeLine = ({ code, top, left, right, delay, duration, color, opacity = 0.18 }) => (
  <motion.div
    className="absolute pointer-events-none font-mono text-xs whitespace-nowrap select-none"
    style={{ top, left, right, color, textShadow: `0 0 10px ${color}60`, opacity: 0 }}
    animate={{ opacity: [0, opacity, opacity * 0.6, opacity, 0], y: [10, 0, -5, 0, 10], x: [0, 3, -2, 1, 0] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    {code}
  </motion.div>
);

/* ── Typing Code Block ── */
const TypingBlock = ({ lines, top, left, delay, color }) => (
  <motion.div
    className="absolute pointer-events-none font-mono select-none"
    style={{ top, left, opacity: 0 }}
    animate={{ opacity: [0, 0.12, 0.12, 0] }}
    transition={{ duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }}
  >
    {lines.map((line, i) => (
      <motion.div key={i}
        className="text-[10px] leading-5 whitespace-nowrap"
        style={{ color, textShadow: `0 0 8px ${color}40` }}
        initial={{ width: 0, overflow: 'hidden' }}
        animate={{ width: ['0%', '100%'] }}
        transition={{ duration: 1.5, delay: delay + i * 0.4, repeat: Infinity, repeatDelay: 6 }}
      >
        {line}
      </motion.div>
    ))}
  </motion.div>
);

/* ── Particle ── */
const Particle = ({ top, left, delay, size, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ top, left, width: size, height: size, background: color, boxShadow: `0 0 6px ${color}` }}
    animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

/* ── Circuit Node ── */
const CircuitNode = ({ top, left, color, delay }) => (
  <motion.div className="absolute pointer-events-none" style={{ top, left }}
    animate={{ opacity: [0.15, 0.6, 0.15] }}
    transition={{ duration: 2.5, repeat: Infinity, delay }}>
    <div className="relative">
      <div className="w-2.5 h-2.5 rounded-full border-2" style={{ borderColor: color, boxShadow: `0 0 8px ${color}80` }} />
      <div className="absolute top-1/2 left-full w-12 h-px -translate-y-1/2" style={{ background: `linear-gradient(90deg, ${color}60, transparent)` }} />
      <div className="absolute top-full left-1/2 h-10 w-px -translate-x-1/2" style={{ background: `linear-gradient(180deg, ${color}60, transparent)` }} />
    </div>
  </motion.div>
);

/* ── 3D Rotating Cube ── */
const Cube3D = ({ top, left, right, size, color, delay, duration }) => (
  <motion.div className="absolute pointer-events-none"
    style={{ top, left, right, width: size, height: size, perspective: '300px' }}
    animate={{ y: [0, -10, 0, 6, 0] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    <motion.div style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
      animate={{ rotateY: 360, rotateX: 360 }}
      transition={{ duration: duration * 2.5, repeat: Infinity, ease: 'linear' }}
    >
      {[
        { transform: `translateZ(${parseInt(size)/2}px)` },
        { transform: `translateZ(-${parseInt(size)/2}px) rotateY(180deg)` },
        { transform: `rotateY(90deg) translateZ(${parseInt(size)/2}px)` },
        { transform: `rotateY(-90deg) translateZ(${parseInt(size)/2}px)` },
        { transform: `rotateX(90deg) translateZ(${parseInt(size)/2}px)` },
        { transform: `rotateX(-90deg) translateZ(${parseInt(size)/2}px)` },
      ].map((face, i) => (
        <div key={i} className="absolute inset-0 rounded-md"
          style={{ background: `linear-gradient(135deg, ${color}25, ${color}08)`, border: `1px solid ${color}40`, ...face }} />
      ))}
    </motion.div>
  </motion.div>
);

/* ── Rotating Ring ── */
const Ring = ({ size, top, left, color, duration, delay }) => (
  <motion.div className="absolute pointer-events-none rounded-full"
    style={{ width: size, height: size, top, left, border: `1px solid ${color}18` }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear', delay }} />
);

/* ── Glow Orb ── */
const GlowOrb = ({ darkMode, top, left, right, bottom, color, size, delay }) => (
  <motion.div className="absolute pointer-events-none rounded-full"
    style={{ width: size, height: size, top, left, right, bottom,
      background: darkMode ? `radial-gradient(circle, ${color}15 0%, transparent 70%)` : `radial-gradient(circle, ${color}08 0%, transparent 70%)`,
      filter: 'blur(70px)' }}
    animate={{ x: [0, 40, -25, 15, 0], y: [0, -35, 20, -12, 0] }}
    transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay }} />
);

const BackgroundEffects = ({ darkMode }) => {

  // Floating single code symbols/keywords
  const floatingSymbols = [
    { code: '</>',          top: '6%',  left: '4%',   color: '#a855f7', delay: 0,   duration: 9  },
    { code: '{ }',          top: '14%', left: '87%',  color: '#3b82f6', delay: 1,   duration: 8  },
    { code: 'def main():',  top: '22%', left: '2%',   color: '#06b6d4', delay: 2,   duration: 11 },
    { code: 'import numpy', top: '38%', left: '90%',  color: '#8b5cf6', delay: 0.5, duration: 10 },
    { code: '=> {}',        top: '55%', left: '3%',   color: '#a855f7', delay: 3,   duration: 8  },
    { code: 'SELECT *',     top: '70%', left: '88%',  color: '#3b82f6', delay: 1.5, duration: 9  },
    { code: 'git push',     top: '82%', left: '6%',   color: '#06b6d4', delay: 4,   duration: 10 },
    { code: 'npm install',  top: '90%', left: '75%',  color: '#8b5cf6', delay: 2.5, duration: 12 },
    { code: '0x1F4A9',      top: '48%', left: '94%',  color: '#a855f7', delay: 1.8, duration: 7  },
    { code: 'λ x: x**2',   top: '8%',  left: '55%',  color: '#3b82f6', delay: 0.8, duration: 11 },
    { code: 'print("AI")',  top: '62%', left: '48%',  color: '#06b6d4', delay: 3.5, duration: 9  },
    { code: 'Σ(x²)',        top: '30%', left: '78%',  color: '#8b5cf6', delay: 2.2, duration: 8  },
    { code: '// TODO',      top: '75%', left: '32%',  color: '#a855f7', delay: 0.3, duration: 13 },
    { code: 'return data',  top: '18%', left: '35%',  color: '#3b82f6', delay: 4.5, duration: 10 },
    { code: '∇ loss = 0',   top: '95%', left: '48%',  color: '#06b6d4', delay: 1.3, duration: 8  },
    { code: 'while True:',  top: '44%', left: '20%',  color: '#8b5cf6', delay: 2.8, duration: 9  },
    { code: 'try: except:', top: '3%',  left: '72%',  color: '#a855f7', delay: 5,   duration: 11 },
    { code: '[].__init__',  top: '58%', left: '68%',  color: '#3b82f6', delay: 0.6, duration: 10 },
  ];

  // Multi-line code blocks
  const codeBlocks = [
    {
      top: '10%', left: '62%', delay: 2, color: '#a855f7',
      lines: ['def predict(X):', '  model.fit(X)', '  return model']
    },
    {
      top: '50%', left: '5%', delay: 5, color: '#3b82f6',
      lines: ['const fetch = async()', '  await api.get(url)', '  return data']
    },
    {
      top: '72%', left: '70%', delay: 8, color: '#06b6d4',
      lines: ['SELECT name, score', 'FROM students', 'WHERE grade > 90']
    },
    {
      top: '28%', left: '45%', delay: 11, color: '#8b5cf6',
      lines: ['import pandas as pd', 'df = pd.read_csv()', 'df.describe()']
    },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* ── Background gradient ── */}
      <div className="absolute inset-0 transition-all duration-500"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at 15% 15%, #0d0025 0%, #050510 45%, #000d1a 100%)'
            : 'radial-gradient(ellipse at 15% 15%, #f5f0ff 0%, #f1f5f9 45%, #eff6ff 100%)',
        }}
      />

      {/* ── Animated grid ── */}
      <motion.div className="absolute inset-0"
        animate={{ opacity: [0.02, 0.045, 0.02] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          backgroundImage: darkMode
            ? `linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`
            : `linear-gradient(rgba(168,85,247,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)`,
          backgroundSize: '65px 65px',
        }}
      />

      {/* ── Glow orbs ── */}
      <GlowOrb darkMode={darkMode} top="-8%"   left="-5%"  color="#a855f7" size="650px" delay={0}  />
      <GlowOrb darkMode={darkMode} top="22%"   right="-8%" color="#3b82f6" size="550px" delay={7}  />
      <GlowOrb darkMode={darkMode} bottom="0%" left="18%"  color="#06b6d4" size="480px" delay={14} />
      <GlowOrb darkMode={darkMode} top="52%"   right="22%" color="#8b5cf6" size="380px" delay={4}  />

      {/* ── Rotating rings ── */}
      <Ring size="320px" top="3%"  left="55%"  color="#a855f7" duration={28} delay={0} />
      <Ring size="240px" top="48%" left="1%"   color="#3b82f6" duration={22} delay={3} />
      <Ring size="160px" top="68%" left="70%"  color="#06b6d4" duration={17} delay={7} />
      <Ring size="420px" top="28%" left="28%"  color="#8b5cf6" duration={38} delay={1} />

      {/* ── 3D Cubes ── */}
      <Cube3D top="5%"  left="1%"   size="36px" color="#a855f7" delay={0}   duration={8}  />
      <Cube3D top="18%" right="2%"  size="28px" color="#3b82f6" delay={1.5} duration={10} />
      <Cube3D top="74%" left="3%"   size="32px" color="#06b6d4" delay={3}   duration={9}  />
      <Cube3D top="78%" right="4%"  size="26px" color="#8b5cf6" delay={2}   duration={11} />
      <Cube3D top="42%" right="1%"  size="30px" color="#a855f7" delay={4}   duration={7}  />

      {/* ── Circuit nodes ── */}
      <CircuitNode top="28%" left="8%"   color="#a855f7" delay={0}   />
      <CircuitNode top="52%" left="84%"  color="#3b82f6" delay={1}   />
      <CircuitNode top="14%" left="62%"  color="#06b6d4" delay={2}   />
      <CircuitNode top="78%" left="42%"  color="#8b5cf6" delay={1.5} />

      {/* ── Floating code symbols ── */}
      {floatingSymbols.map((s, i) => <CodeLine key={i} {...s} />)}

      {/* ── Typing code blocks ── */}
      {codeBlocks.map((b, i) => <TypingBlock key={i} {...b} />)}

      {/* ── Particles ── */}
      {[
        { top: '20%', left: '30%', delay: 0,   size: '3px', color: '#a855f7' },
        { top: '40%', left: '72%', delay: 1,   size: '4px', color: '#3b82f6' },
        { top: '60%', left: '18%', delay: 2,   size: '3px', color: '#06b6d4' },
        { top: '80%', left: '60%', delay: 0.7, size: '4px', color: '#8b5cf6' },
        { top: '10%', left: '50%', delay: 1.5, size: '3px', color: '#a855f7' },
        { top: '70%', left: '38%', delay: 3,   size: '3px', color: '#3b82f6' },
        { top: '35%', left: '85%', delay: 2.5, size: '4px', color: '#06b6d4' },
        { top: '55%', left: '12%', delay: 0.9, size: '3px', color: '#a855f7' },
      ].map((p, i) => <Particle key={i} {...p} />)}

      {/* ── Vignette ── */}
      <div className="absolute inset-0 transition-all duration-500"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at center, transparent 20%, rgba(5,5,16,0.7) 100%)'
            : 'radial-gradient(ellipse at center, transparent 20%, rgba(241,245,249,0.5) 100%)',
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
