import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import { education } from '../../data/data';

const colorMap = {
  purple: { dot: '#a855f7', border: 'rgba(168,85,247,0.3)', glow: 'rgba(168,85,247,0.08)', text: '#a855f7', badge: 'rgba(168,85,247,0.1)' },
  blue:   { dot: '#3b82f6', border: 'rgba(59,130,246,0.3)',  glow: 'rgba(59,130,246,0.08)',  text: '#3b82f6', badge: 'rgba(59,130,246,0.1)' },
  cyan:   { dot: '#06b6d4', border: 'rgba(6,182,212,0.3)',   glow: 'rgba(6,182,212,0.08)',   text: '#06b6d4', badge: 'rgba(6,182,212,0.1)' },
};

const EducationCard = ({ item, index, isLast, darkMode }) => {
  const c = colorMap[item.color] || colorMap.purple;
  const t = darkMode ? 'text-white' : 'text-slate-800';
  const m = darkMode ? 'text-white/50' : 'text-slate-500';
  const sm = darkMode ? 'text-white/30' : 'text-slate-400';

  return (
    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }} className="relative pl-16">
      {!isLast && (
        <div className="absolute left-[23px] top-12 bottom-0 w-0.5"
          style={{ background: 'linear-gradient(180deg,rgba(168,85,247,0.4),rgba(59,130,246,0.05))' }} />
      )}
      <div className="absolute left-3 top-5 w-8 h-8 rounded-full flex items-center justify-center text-base z-10 border-2"
        style={{ background: `radial-gradient(circle,${c.glow} 0%,transparent 70%)`, borderColor: c.dot, boxShadow: `0 0 15px ${c.glow}` }}>
        {item.icon}
      </div>

      <motion.div whileHover={{ x: 6 }} className="glass p-6 rounded-2xl mb-8 relative overflow-hidden group"
        style={{ border: `1px solid ${item.current ? c.border : 'rgba(168,85,247,0.06)'}` }}>
        {item.current && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Current
          </div>
        )}
        <span className="inline-block px-3 py-1 rounded-lg text-xs font-mono font-semibold mb-3"
          style={{ background: c.badge, border: `1px solid ${c.border}`, color: c.text }}>
          {item.year}
        </span>
        <h3 className={`text-lg font-bold mb-1 ${t}`}>{item.degree}</h3>
        <p className="font-semibold mb-1" style={{ color: c.text }}>{item.specialization}</p>
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-sm ${m}`}>{item.institution}</span>
          <span className={sm}>·</span>
          <span className={`text-sm ${sm}`}>{item.location}</span>
        </div>
        {item.grade && item.grade !== 'In Progress' && (
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs ${sm}`}>Grade:</span>
            <span className={`text-sm font-semibold ${m}`}>{item.grade}</span>
          </div>
        )}
        <p className={`text-sm leading-relaxed ${m}`}>{item.description}</p>
      </motion.div>
    </motion.div>
  );
};

const Education = ({ darkMode }) => (
  <SectionWrapper id="education">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', color: '#a855f7' }}>
          Education
        </span>
        <h2 className="section-title">Academic <span className="gradient-text">Journey</span></h2>
        <p className="section-subtitle">My educational background that shaped my technical thinking.</p>
      </motion.div>
      <div className="max-w-3xl mx-auto">
        {education.map((item, i) => (
          <EducationCard key={item.id} item={item} index={i} isLast={i === education.length - 1} darkMode={darkMode} />
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Education;
