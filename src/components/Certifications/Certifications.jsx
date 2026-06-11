import { motion } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';
import { certifications } from '../../data/data';

const colorMap = {
  purple: { bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.2)', text: '#a855f7', glow: 'rgba(168,85,247,0.12)' },
  blue:   { bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.2)',  text: '#3b82f6', glow: 'rgba(59,130,246,0.12)' },
  cyan:   { bg: 'rgba(6,182,212,0.1)',   border: 'rgba(6,182,212,0.2)',   text: '#06b6d4', glow: 'rgba(6,182,212,0.12)' },
  violet: { bg: 'rgba(139,92,246,0.1)',  border: 'rgba(139,92,246,0.2)',  text: '#8b5cf6', glow: 'rgba(139,92,246,0.12)' },
};

const CertCard = ({ cert, index, darkMode }) => {
  const c = colorMap[cert.color] || colorMap.purple;
  const t = darkMode ? 'text-white' : 'text-slate-800';
  const m = darkMode ? 'text-white/40' : 'text-slate-500';
  const border = darkMode ? 'border-white/[0.06]' : 'border-slate-200';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(0,0,0,0.15), 0 0 20px ${c.glow}` }}
      className="glass rounded-2xl p-6 relative overflow-hidden group cursor-default"
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2 group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${c.text} 0%, transparent 70%)` }} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: c.bg, border: `1px solid ${c.border}` }}>
            {cert.icon}
          </div>
          <span className="px-3 py-1 rounded-lg text-xs font-bold tracking-wider"
            style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}>
            {cert.badge}
          </span>
        </div>

        <h3 className={`text-base font-bold mb-1 ${t}`}>{cert.title}</h3>
        <p className="font-medium text-sm mb-2" style={{ color: c.text }}>{cert.issuer}</p>
        <p className={`text-xs mb-4 leading-relaxed ${m}`}>{cert.description}</p>

        <div className={`flex items-center justify-between pt-4 border-t ${border}`}>
          <div className="flex items-center gap-2">
            <FiAward size={13} className={m} />
            <span className={`text-xs font-mono ${m}`}>{cert.date}</span>
          </div>
          <a href={cert.link} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium opacity-60 hover:opacity-100 transition-opacity"
            style={{ color: c.text }}>
            Verify <FiExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = ({ darkMode }) => (
  <SectionWrapper id="certifications">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: '#06b6d4' }}>
          Certifications
        </span>
        <h2 className="section-title">My <span className="gradient-text">Credentials</span></h2>
        <p className="section-subtitle">Professional certifications validating my expertise across technologies.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map((cert, i) => <CertCard key={cert.id} cert={cert} index={i} darkMode={darkMode} />)}
      </div>
    </div>
  </SectionWrapper>
);

export default Certifications;
