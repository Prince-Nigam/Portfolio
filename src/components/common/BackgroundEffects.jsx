import { motion } from 'framer-motion';

/* ── Floating Code Line ── */
const CodeLine = ({ code, top, left, right, delay, duration, color, opacity = 0.18 }) => (
  <motion.div
    className="absolute pointer-events-none font-mono text-xs whitespace-nowrap select-none"
    style={{ top, left, right, color, textShadow: `0 0 10px ${color}60`, opacity: 0 }}
    animate={{ opacity: [0, opacity, opacity * 0.6, opacity, 0], y: [10, 0, -5, 0, 10] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    {code}
  </motion.div>
);

/* ── Terminal Window ── */
const TerminalWindow = ({ top, left, delay, commands }) => (
  <motion.div
    className="absolute pointer-events-none select-none"
    style={{ top, left, width: '200px', opacity: 0 }}
    animate={{ opacity: [0, 0.15, 0.15, 0] }}
    transition={{ duration: 10, repeat: Infinity, delay, ease: 'easeInOut' }}
  >
    {/* Terminal header */}
    <div className="rounded-t-lg px-3 py-1.5 flex items-center gap-1.5"
      style={{ background: 'rgba(30,30,40,0.8)', border: '1px solid rgba(168,85,247,0.3)' }}>
      <div className="w-2 h-2 rounded-full bg-red-500/70" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
      <div className="w-2 h-2 rounded-full bg-green-500/70" />
      <span className="text-[9px] text-white/40 ml-1 font-mono">terminal</span>
    </div>
    {/* Terminal body */}
    <div className="rounded-b-lg p-2 space-y-1"
      style={{ background: 'rgba(10,10,20,0.7)', border: '1px solid rgba(168,85,247,0.2)', borderTop: 'none' }}>
      {commands.map((cmd, i) => (
        <motion.div key={i}
          className="font-mono text-[9px] leading-4"
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8, delay: delay + i * 1.2, repeat: Infinity, repeatDelay: 2 }}
        >
          {cmd.type === 'input' && <><span style={{ color: '#a855f7' }}>$ </span><span style={{ color: '#e2e8f0' }}>{cmd.text}</span></>}
          {cmd.type === 'output' && <span style={{ color: '#06b6d4' }}>{cmd.text}</span>}
          {cmd.type === 'success' && <span style={{ color: '#10b981' }}>✓ {cmd.text}</span>}
          {cmd.type === 'error' && <span style={{ color: '#f87171' }}>✗ {cmd.text}</span>}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

/* ── Floating File Badge ── */
const FileBadge = ({ name, icon, top, left, right, delay, color }) => (
  <motion.div
    className="absolute pointer-events-none select-none flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-mono text-[10px]"
    style={{ top, left, right, color, background: `${color}10`, border: `1px solid ${color}30`, opacity: 0, backdropFilter: 'blur(4px)' }}
    animate={{ opacity: [0, 0.7, 0.5, 0.7, 0], y: [0, -8, 0, -4, 0] }}
    transition={{ duration: 7, repeat: Infinity, delay, ease: 'easeInOut' }}
  >
    <span>{icon}</span><span>{name}</span>
  </motion.div>
);

/* ── Matrix Column ── */
const MatrixColumn = ({ left, delay, duration, chars }) => (
  <motion.div
    className="absolute top-0 pointer-events-none font-mono text-[10px] leading-4 select-none flex flex-col"
    style={{ left, color: '#10b981', opacity: 0, textShadow: '0 0 8px #10b98160' }}
    animate={{ opacity: [0, 0.12, 0.08, 0.12, 0], y: ['-10%', '110%'] }}
    transition={{ duration, repeat: Infinity, delay, ease: 'linear' }}
  >
    {chars.map((c, i) => (
      <motion.span key={i}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}>
        {c}
      </motion.span>
    ))}
  </motion.div>
);

/* ── Progress Bar ── */
const ProgressBar = ({ top, left, label, color, delay }) => (
  <motion.div className="absolute pointer-events-none select-none" style={{ top, left, width: '140px', opacity: 0 }}
    animate={{ opacity: [0, 0.18, 0.18, 0] }}
    transition={{ duration: 8, repeat: Infinity, delay }}>
    <div className="font-mono text-[9px] mb-1" style={{ color }}>{label}</div>
    <div className="h-1 rounded-full w-full" style={{ background: `${color}20` }}>
      <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
        animate={{ width: ['0%', '100%', '60%', '85%'] }}
        transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }} />
    </div>
  </motion.div>
);

/* ── Particle ── */
const Particle = ({ top, left, delay, size, color }) => (
  <motion.div className="absolute rounded-full pointer-events-none"
    style={{ top, left, width: size, height: size, background: color, boxShadow: `0 0 6px ${color}` }}
    animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay }} />
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

/* ── 3D Cube ── */
const Cube3D = ({ top, left, right, size, color, delay, duration }) => (
  <motion.div className="absolute pointer-events-none"
    style={{ top, left, right, width: size, height: size, perspective: '300px' }}
    animate={{ y: [0, -10, 0, 6, 0] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}>
    <motion.div style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
      animate={{ rotateY: 360, rotateX: 360 }}
      transition={{ duration: duration * 2.5, repeat: Infinity, ease: 'linear' }}>
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

/* ── Ring ── */
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

  const floatingCode = [
    { code: 'def train_model(X, y):',  top: '5%',  left: '2%',   color: '#a855f7', delay: 0,   duration: 10 },
    { code: 'import pandas as pd',     top: '12%', left: '85%',  color: '#3b82f6', delay: 1,   duration: 9  },
    { code: 'git commit -m "fix"',     top: '22%', left: '1%',   color: '#06b6d4', delay: 2,   duration: 11 },
    { code: 'npm run build ✓',         top: '38%', left: '88%',  color: '#10b981', delay: 0.5, duration: 8  },
    { code: 'SELECT * FROM users',     top: '55%', left: '2%',   color: '#a855f7', delay: 3,   duration: 9  },
    { code: 'const api = axios()',     top: '68%', left: '86%',  color: '#3b82f6', delay: 1.5, duration: 10 },
    { code: 'python train.py',         top: '80%', left: '5%',   color: '#06b6d4', delay: 4,   duration: 12 },
    { code: 'docker build -t app',     top: '90%', left: '72%',  color: '#8b5cf6', delay: 2.5, duration: 9  },
    { code: 'loss.backward()',         top: '45%', left: '92%',  color: '#a855f7', delay: 1.8, duration: 8  },
    { code: 'df.groupby("class")',     top: '8%',  left: '52%',  color: '#3b82f6', delay: 0.8, duration: 11 },
    { code: 'model.fit(X_train)',      top: '62%', left: '46%',  color: '#06b6d4', delay: 3.5, duration: 10 },
    { code: 'return jsonify(data)',    top: '30%', left: '76%',  color: '#8b5cf6', delay: 2.2, duration: 9  },
    { code: '// Loading model...',     top: '74%', left: '30%',  color: '#fbbf24', delay: 0.3, duration: 13 },
    { code: 'while epoch < 100:',      top: '18%', left: '32%',  color: '#3b82f6', delay: 4.5, duration: 10 },
    { code: 'accuracy = 98.5%',        top: '95%', left: '45%',  color: '#10b981', delay: 1.3, duration: 8  },
    { code: 'push origin main ✓',      top: '42%', left: '18%',  color: '#06b6d4', delay: 2.8, duration: 9  },
    { code: 'new Promise((res)=>{})',  top: '3%',  left: '70%',  color: '#a855f7', delay: 5,   duration: 11 },
    { code: 'GCP deploy success ✓',    top: '58%', left: '65%',  color: '#10b981', delay: 0.6, duration: 10 },
    { code: '<Router><App/></Router>', top: '85%', left: '50%',  color: '#3b82f6', delay: 3.2, duration: 9  },
    { code: 'encrypt(data, key)',      top: '25%', left: '55%',  color: '#f87171', delay: 1.6, duration: 8  },
  ];

  const matrixCols = [
    { left: '1%',   delay: 0,   duration: 8,  chars: ['1','0','1','λ','∇','0','1','π','0','1','Σ','0'] },
    { left: '97%',  delay: 2,   duration: 10, chars: ['0','1','0','1','√','1','0','∞','1','0','1','0'] },
    { left: '50%',  delay: 5,   duration: 12, chars: ['λ','1','0','1','0','Σ','1','0','π','1','0','1'] },
    { left: '25%',  delay: 8,   duration: 9,  chars: ['0','∇','1','0','1','0','√','1','0','1','∞','0'] },
    { left: '75%',  delay: 11,  duration: 11, chars: ['1','0','π','1','0','1','0','λ','1','0','1','Σ'] },
  ];

  const terminals = [
    {
      top: '8%', left: '60%', delay: 3,
      commands: [
        { type: 'input',   text: 'python app.py' },
        { type: 'output',  text: 'Loading model...' },
        { type: 'success', text: 'Server running :5000' },
      ]
    },
    {
      top: '55%', left: '3%', delay: 9,
      commands: [
        { type: 'input',   text: 'git push origin main' },
        { type: 'success', text: 'Branch up to date' },
        { type: 'input',   text: 'npm run build' },
        { type: 'success', text: 'Built in 2.1s' },
      ]
    },
    {
      top: '70%', left: '68%', delay: 15,
      commands: [
        { type: 'input',  text: 'SELECT * FROM db' },
        { type: 'output', text: '142 rows returned' },
        { type: 'input',  text: 'df.describe()' },
        { type: 'output', text: 'mean: 87.4 std: 12.1' },
      ]
    },
  ];

  const fileBadges = [
    { name: 'app.py',        icon: '🐍', top: '16%', left: '20%',  color: '#a855f7', delay: 0   },
    { name: 'index.jsx',     icon: '⚛️',  top: '32%', right: '8%',  color: '#3b82f6', delay: 2   },
    { name: 'model.pkl',     icon: '🤖', top: '60%', left: '22%',  color: '#06b6d4', delay: 4   },
    { name: 'data.csv',      icon: '📊', top: '78%', left: '55%',  color: '#8b5cf6', delay: 1   },
    { name: 'styles.css',    icon: '🎨', top: '48%', left: '78%',  color: '#a855f7', delay: 3   },
    { name: 'README.md',     icon: '📝', top: '88%', left: '18%',  color: '#3b82f6', delay: 6   },
    { name: 'package.json',  icon: '📦', top: '4%',  left: '38%',  color: '#10b981', delay: 5   },
    { name: 'schema.sql',    icon: '🗄️',  top: '93%', right: '20%', color: '#06b6d4', delay: 7   },
  ];

  const progressBars = [
    { top: '20%', left: '76%', label: 'Training: epoch 87/100', color: '#a855f7', delay: 2  },
    { top: '50%', left: '40%', label: 'Building: 94% done...',  color: '#3b82f6', delay: 8  },
    { top: '80%', left: '8%',  label: 'Uploading to GCP: 67%', color: '#06b6d4', delay: 14 },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* Background */}
      <div className="absolute inset-0 transition-all duration-500"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at 15% 15%, #0d0025 0%, #050510 45%, #000d1a 100%)'
            : 'radial-gradient(ellipse at 15% 15%, #f5f0ff 0%, #f1f5f9 45%, #eff6ff 100%)',
        }} />

      {/* Grid */}
      <motion.div className="absolute inset-0"
        animate={{ opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          backgroundImage: darkMode
            ? `linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`
            : `linear-gradient(rgba(168,85,247,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)`,
          backgroundSize: '65px 65px',
        }} />

      {/* Glow orbs */}
      <GlowOrb darkMode={darkMode} top="-8%"   left="-5%"  color="#a855f7" size="650px" delay={0}  />
      <GlowOrb darkMode={darkMode} top="22%"   right="-8%" color="#3b82f6" size="550px" delay={7}  />
      <GlowOrb darkMode={darkMode} bottom="0%" left="18%"  color="#06b6d4" size="480px" delay={14} />
      <GlowOrb darkMode={darkMode} top="52%"   right="22%" color="#8b5cf6" size="380px" delay={4}  />

      {/* Rings */}
      <Ring size="320px" top="3%"  left="55%"  color="#a855f7" duration={28} delay={0} />
      <Ring size="240px" top="48%" left="1%"   color="#3b82f6" duration={22} delay={3} />
      <Ring size="160px" top="68%" left="70%"  color="#06b6d4" duration={17} delay={7} />
      <Ring size="420px" top="28%" left="28%"  color="#8b5cf6" duration={38} delay={1} />

      {/* 3D Cubes */}
      <Cube3D top="5%"  left="1%"   size="36px" color="#a855f7" delay={0}   duration={8}  />
      <Cube3D top="18%" right="2%"  size="28px" color="#3b82f6" delay={1.5} duration={10} />
      <Cube3D top="74%" left="3%"   size="32px" color="#06b6d4" delay={3}   duration={9}  />
      <Cube3D top="78%" right="4%"  size="26px" color="#8b5cf6" delay={2}   duration={11} />
      <Cube3D top="42%" right="1%"  size="30px" color="#a855f7" delay={4}   duration={7}  />

      {/* Circuit nodes */}
      <CircuitNode top="28%" left="8%"   color="#a855f7" delay={0}   />
      <CircuitNode top="52%" left="84%"  color="#3b82f6" delay={1}   />
      <CircuitNode top="14%" left="62%"  color="#06b6d4" delay={2}   />
      <CircuitNode top="78%" left="42%"  color="#8b5cf6" delay={1.5} />

      {/* Matrix rain */}
      {matrixCols.map((m, i) => <MatrixColumn key={i} {...m} />)}

      {/* Floating code */}
      {floatingCode.map((s, i) => <CodeLine key={i} {...s} />)}

      {/* Terminal windows */}
      {terminals.map((t, i) => <TerminalWindow key={i} {...t} />)}

      {/* File badges */}
      {fileBadges.map((f, i) => <FileBadge key={i} {...f} />)}

      {/* Progress bars */}
      {progressBars.map((p, i) => <ProgressBar key={i} {...p} />)}

      {/* Particles */}
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

      {/* Vignette */}
      <div className="absolute inset-0 transition-all duration-500"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at center, transparent 20%, rgba(5,5,16,0.7) 100%)'
            : 'radial-gradient(ellipse at center, transparent 20%, rgba(241,245,249,0.5) 100%)',
        }} />
    </div>
  );
};

export default BackgroundEffects;
