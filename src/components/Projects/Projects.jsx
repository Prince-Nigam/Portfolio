import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';
import { projects, personalInfo } from '../../data/data';

const filters = ['All', 'Full Stack', 'AI/ML'];

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
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-80 flex items-center justify-center`}>
            <div className="text-center">
              <FiCode size={48} className="text-white/30 mx-auto mb-3" />
              <p className="text-white/50 text-sm font-medium">{project.title}</p>
            </div>
          </div>
        )}
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
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}`}>
            {project.status}
          </span>
        </div>
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
