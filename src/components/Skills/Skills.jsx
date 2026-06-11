import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import { skills } from '../../data/data';

const colorMap = {
  purple: { glow: 'rgba(168,85,247,0.15)', border: 'rgba(168,85,247,0.25)', text: '#c084fc', bar: 'linear-gradient(90deg,#a855f7,#7c3aed)' },
  blue:   { glow: 'rgba(59,130,246,0.15)',  border: 'rgba(59,130,246,0.25)',  text: '#93c5fd', bar: 'linear-gradient(90deg,#3b82f6,#2563eb)' },
  cyan:   { glow: 'rgba(6,182,212,0.15)',   border: 'rgba(6,182,212,0.25)',   text: '#67e8f9', bar: 'linear-gradient(90deg,#06b6d4,#0284c7)' },
  violet: { glow: 'rgba(139,92,246,0.15)',  border: 'rgba(139,92,246,0.25)',  text: '#a78bfa', bar: 'linear-gradient(90deg,#8b5cf6,#6d28d9)' },
  indigo: { glow: 'rgba(99,102,241,0.15)',  border: 'rgba(99,102,241,0.25)',  text: '#a5b4fc', bar: 'linear-gradient(90deg,#6366f1,#4f46e5)' },
};

const SkillCard = ({ category, icon, color, items, index, darkMode }) => {
  const [inView, setInView] = useState(false);
  const c = colorMap[color] || colorMap.purple;
  const nameColor = darkMode ? 'text-white/80' : 'text-slate-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={() => { setInView(true); return { opacity: 1, y: 0 }; }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-hover p-6 rounded-2xl"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
          style={{ background: c.glow, border: `1px solid ${c.border}` }}>
          {icon}
        </div>
        <div>
          <h3 className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-800'}`}>{category}</h3>
          <p className={`text-xs ${darkMode ? 'text-white/30' : 'text-slate-400'}`}>{items.length} skills</p>
        </div>
      </div>

      {/* Skill bars */}
      {items.map((skill) => (
        <div key={skill.name} className="mb-4">
          <div className="flex justify-between items-center mb-1.5">
            <span className={`text-sm font-medium ${nameColor}`}>{skill.name}</span>
            <span className="text-xs font-mono" style={{ color: c.text }}>{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <motion.div
              className="skill-bar-fill"
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.4,0,0.2,1] }}
              style={{ background: c.bar }}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
};

const Skills = ({ darkMode }) => {
  const tagStyle = darkMode
    ? { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }
    : { background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)', color: 'rgba(15,23,42,0.55)' };

  return (
    <SectionWrapper id="skills">
      <div className="section-container">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', color: '#3b82f6' }}>
            Technical Skills
          </span>
          <h2 className="section-title">My <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle">A curated set of technologies I work with daily to build great products.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} {...skill} index={i} darkMode={darkMode} />
          ))}
        </div>

        {/* Tech strip */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-16">
          <p className={`text-center text-xs mb-6 tracking-widest uppercase font-medium ${darkMode ? 'text-white/30' : 'text-slate-400'}`}>
            Technologies I Work With
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['React','Python','JavaScript','Node.js','PHP','MySQL','MongoDB','Java','C++','Git','GitHub','Salesforce','Machine Learning','Data Analysis','HTML5','CSS3','Tailwind'].map((tech) => (
              <motion.span key={tech} whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-xl text-sm font-medium cursor-default transition-all duration-200 hover:text-purple-500"
                style={tagStyle}>
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
