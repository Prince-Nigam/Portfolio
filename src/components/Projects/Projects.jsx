import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';
import { projects, personalInfo } from '../../data/data';

const filters = ['All', 'Full Stack', 'Frontend'];

/* ── SecureVault 3D Illustration ── */
const SecureVaultIllustration = () => (
  <div className="w-full h-full flex items-center justify-center relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #1a0533 0%, #0d0d2b 50%, #001428 100%)' }}>

    {/* Glow orbs */}
    <div className="absolute top-4 left-8 w-24 h-24 rounded-full opacity-30"
      style={{ background: 'radial-gradient(circle, #a855f7, transparent)', filter: 'blur(20px)' }} />
    <div className="absolute bottom-4 right-8 w-20 h-20 rounded-full opacity-20"
      style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', filter: 'blur(16px)' }} />

    {/* 3D floating vault box */}
    <div className="relative" style={{ perspective: '600px' }}>
      <motion.div
        animate={{ rotateY: [0, 15, 0, -15, 0], rotateX: [0, -8, 0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-28 h-28"
      >
        {/* Front face */}
        <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(168,85,247,0.4), rgba(59,130,246,0.3))',
            border: '1.5px solid rgba(168,85,247,0.6)',
            boxShadow: '0 0 30px rgba(168,85,247,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            transform: 'translateZ(14px)',
          }}>
          {/* Lock icon */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-1.5 border-2 border-white/60 rounded-full border-b-0 rounded-b-none" style={{ borderRadius: '8px 8px 0 0' }} />
            <div className="w-10 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.4)' }}>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-purple-400" />
            </div>
          </div>
          <span className="text-white/70 font-mono text-[9px] mt-1 tracking-widest">VAULT</span>
        </div>

        {/* Right face (3D side) */}
        <div className="absolute inset-y-0 right-0 w-3.5 rounded-r-xl"
          style={{
            background: 'linear-gradient(180deg, rgba(59,130,246,0.3), rgba(30,64,120,0.5))',
            border: '1px solid rgba(59,130,246,0.3)',
            transform: 'rotateY(90deg) translateZ(7px) translateX(7px)',
            transformOrigin: 'right center',
          }} />

        {/* Bottom face (3D base) */}
        <div className="absolute inset-x-0 bottom-0 h-3.5 rounded-b-xl"
          style={{
            background: 'linear-gradient(90deg, rgba(100,50,180,0.4), rgba(30,80,160,0.3))',
            border: '1px solid rgba(168,85,247,0.2)',
            transform: 'rotateX(-90deg) translateZ(7px) translateY(7px)',
            transformOrigin: 'bottom center',
          }} />
      </motion.div>
    </div>

    {/* Floating particles */}
    {[
      { top: '18%', left: '15%', delay: 0 },
      { top: '65%', left: '12%', delay: 0.5 },
      { top: '25%', right: '14%', delay: 1 },
      { top: '70%', right: '16%', delay: 1.5 },
    ].map((pos, i) => (
      <motion.div key={i}
        animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: pos.delay }}
        className="absolute w-1.5 h-1.5 rounded-full bg-purple-400"
        style={{ top: pos.top, left: pos.left, right: pos.right }} />
    ))}

    {/* SHA-256 floating text */}
    <motion.div animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -3, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-purple-400/70 tracking-widest whitespace-nowrap">
      SHA-256 · ENCRYPTED
    </motion.div>

    {/* Hex grid overlay */}
    <div className="absolute inset-0 opacity-5"
      style={{ backgroundImage: 'linear-gradient(rgba(168,85,247,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,0.8) 1px,transparent 1px)', backgroundSize: '20px 20px' }} />
  </div>
);

/* ── Fresh Mart 3D Illustration ── */
const FreshMartIllustration = () => (
  <div className="w-full h-full flex items-center justify-center relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #052e16 0%, #064e3b 50%, #0c4a6e 100%)' }}>

    {/* Glow orbs */}
    <div className="absolute top-2 right-6 w-28 h-28 rounded-full opacity-25"
      style={{ background: 'radial-gradient(circle, #10b981, transparent)', filter: 'blur(22px)' }} />
    <div className="absolute bottom-2 left-6 w-20 h-20 rounded-full opacity-20"
      style={{ background: 'radial-gradient(circle, #06b6d4, transparent)', filter: 'blur(16px)' }} />

    {/* 3D Store Scene */}
    <div className="relative" style={{ perspective: '800px' }}>
      <motion.div
        animate={{ rotateY: [0, 10, 0, -10, 0], rotateX: [2, -4, 2, 4, 2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-36 h-28"
      >
        {/* Store front face */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(16,185,129,0.25) 0%, rgba(6,182,212,0.15) 100%)',
            border: '1.5px solid rgba(16,185,129,0.5)',
            boxShadow: '0 0 30px rgba(16,185,129,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
            transform: 'translateZ(16px)',
          }}>

          {/* Store sign */}
          <div className="mx-2 mt-2 py-1 rounded-lg text-center"
            style={{ background: 'linear-gradient(90deg, rgba(16,185,129,0.6), rgba(6,182,212,0.5))', border: '1px solid rgba(16,185,129,0.4)' }}>
            <span className="text-white font-black text-[8px] tracking-widest">🛒 FRESH MART</span>
          </div>

          {/* Shelves */}
          <div className="mx-2 mt-1.5 space-y-1">
            {/* Shelf 1 */}
            <div className="relative">
              <div className="h-px w-full mb-0.5" style={{ background: 'rgba(255,255,255,0.2)' }} />
              <div className="flex gap-1 justify-center">
                {['🍎','🍊','🍋','🍇'].map((e,i) => (
                  <motion.span key={i} animate={{ y: [0,-2,0] }}
                    transition={{ duration:1.5, repeat:Infinity, delay: i*0.2 }}
                    className="text-[10px]">{e}</motion.span>
                ))}
              </div>
            </div>
            {/* Shelf 2 */}
            <div className="relative">
              <div className="h-px w-full mb-0.5" style={{ background: 'rgba(255,255,255,0.2)' }} />
              <div className="flex gap-1 justify-center">
                {['🥦','🥕','🥑','🌽'].map((e,i) => (
                  <motion.span key={i} animate={{ y: [0,-2,0] }}
                    transition={{ duration:1.5, repeat:Infinity, delay: i*0.3 }}
                    className="text-[10px]">{e}</motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Cart at bottom */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
            <motion.div animate={{ x: [-4, 4, -4] }} transition={{ duration: 2, repeat: Infinity }}>
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                <path d="M2 2h4l4 12h12l3-8H8" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="11" cy="17" r="2" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2"/>
                <circle cx="19" cy="17" r="2" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2"/>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Right side 3D */}
        <div className="absolute inset-y-0 right-0 w-4 rounded-r-2xl"
          style={{
            background: 'linear-gradient(180deg, rgba(5,100,60,0.6), rgba(4,70,80,0.7))',
            border: '1px solid rgba(16,185,129,0.3)',
            transform: 'rotateY(90deg) translateZ(8px) translateX(8px)',
            transformOrigin: 'right center',
          }} />

        {/* Bottom 3D */}
        <div className="absolute inset-x-0 bottom-0 h-4 rounded-b-2xl"
          style={{
            background: 'linear-gradient(90deg, rgba(5,80,50,0.5), rgba(4,60,70,0.5))',
            border: '1px solid rgba(16,185,129,0.2)',
            transform: 'rotateX(-90deg) translateZ(8px) translateY(8px)',
            transformOrigin: 'bottom center',
          }} />
      </motion.div>
    </div>

    {/* Floating sparkles */}
    {[
      { top: '12%', left: '8%', delay: 0 },
      { top: '60%', left: '6%', delay: 0.7 },
      { top: '15%', right: '8%', delay: 1.2 },
      { top: '65%', right: '6%', delay: 1.8 },
    ].map((pos, i) => (
      <motion.div key={i}
        animate={{ y: [0, -6, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: pos.delay }}
        className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400"
        style={{ top: pos.top, left: pos.left, right: pos.right }} />
    ))}

    {/* Label */}
    <motion.div animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[10px] text-emerald-400/70 tracking-widest whitespace-nowrap">
      FRESH · ORGANIC · FAST
    </motion.div>

    {/* Dot pattern */}
    <div className="absolute inset-0 opacity-5"
      style={{ backgroundImage: 'radial-gradient(rgba(16,185,129,0.8) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
  </div>
);

/* ── Default fallback ── */
const DefaultIllustration = ({ title, gradient }) => (
  <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
    <span className="text-white/50 text-sm font-medium">{title}</span>
  </div>
);

const ProjectIllustration = ({ title, gradient }) => {
  if (title === 'SecureVault') return <SecureVaultIllustration />;
  if (title === 'Fresh Grocery Mart') return <FreshMartIllustration />;
  return <DefaultIllustration title={title} gradient={gradient} />;
};

const ProjectCard = ({ project, index, darkMode }) => {
  const [hovered, setHovered] = useState(false);
  const t = darkMode ? 'text-white' : 'text-slate-800';
  const m = darkMode ? 'text-white/50' : 'text-slate-500';
  const btnBase = darkMode
    ? { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }
    : { background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.1)' };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass rounded-2xl overflow-hidden group"
      whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.3), 0 0 30px rgba(168,85,247,0.12)' }}
    >
      {/* 3D Illustration */}
      <div className="relative h-52 overflow-hidden">
        <ProjectIllustration title={project.title} gradient={project.gradient} />

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
        >
          {[{ icon: FiGithub, href: project.github }, { icon: FiExternalLink, href: project.live }].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-purple-500/30 transition-all">
                <Icon size={20} />
              </motion.div>
            </a>
          ))}
        </motion.div>

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
            project.status === 'Completed'
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-black/40 backdrop-blur-sm text-white/70 border border-white/10">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors ${t}`}>{project.title}</h3>
        <p className={`text-sm leading-relaxed mb-4 ${m}`}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => <span key={tag} className="tag text-xs">{tag}</span>)}
        </div>
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:text-purple-500 ${m}`}
            style={btnBase}>
            <FiGithub size={15} /> GitHub
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium btn-primary">
            <FiExternalLink size={15} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  const inactiveBtn = darkMode
    ? { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }
    : { background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)' };

  return (
    <SectionWrapper id="projects">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: '#06b6d4' }}>
            Portfolio
          </span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">Real-world projects showcasing my skills in building complete applications.</p>

          <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
            {filters.map((f) => (
              <motion.button key={f} onClick={() => setActiveFilter(f)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${activeFilter === f ? 'text-white' : darkMode ? 'text-white/40 hover:text-white/70' : 'text-slate-500 hover:text-slate-800'}`}
                style={activeFilter === f ? { background: 'linear-gradient(135deg,#a855f7,#3b82f6)', boxShadow: '0 4px 15px rgba(168,85,247,0.3)' } : inactiveBtn}>
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} darkMode={darkMode} />)}
          </AnimatePresence>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href={personalInfo?.social?.github || '#'} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 text-sm">
            <FiGithub size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
