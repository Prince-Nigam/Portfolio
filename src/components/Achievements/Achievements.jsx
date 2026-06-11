import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import { achievements } from '../../data/data';

const colorMap = {
  purple: { bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.2)', text: '#a855f7', dot: '#a855f7' },
  blue:   { bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.2)',  text: '#3b82f6', dot: '#3b82f6' },
  cyan:   { bg: 'rgba(6,182,212,0.1)',   border: 'rgba(6,182,212,0.2)',   text: '#06b6d4', dot: '#06b6d4' },
  violet: { bg: 'rgba(139,92,246,0.1)',  border: 'rgba(139,92,246,0.2)',  text: '#8b5cf6', dot: '#8b5cf6' },
};

const AchievementCategory = ({ group, index, darkMode }) => {
  const c = colorMap[group.color] || colorMap.purple;
  const t = darkMode ? 'text-white' : 'text-slate-800';
  const m = darkMode ? 'text-white/45' : 'text-slate-500';
  const sm = darkMode ? 'text-white/30' : 'text-slate-400';
  const divider = darkMode ? 'border-white/[0.06]' : 'border-slate-200';

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }} className="glass rounded-2xl p-6 group">
      <div className={`flex items-center gap-3 mb-6 pb-4 border-b ${divider}`}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: c.bg, border: `1px solid ${c.border}` }}>
          {group.icon}
        </div>
        <div>
          <h3 className={`font-bold ${t}`}>{group.category}</h3>
          <p className={`text-xs ${sm}`}>{group.items.length} achievements</p>
        </div>
      </div>

      <div className="space-y-4">
        {group.items.map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: index * 0.1 + i * 0.1 }} className="flex gap-3">
            <div className="flex flex-col items-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 rounded-full mt-1.5" style={{ background: c.dot, boxShadow: `0 0 8px ${c.dot}` }} />
              {i < group.items.length - 1 && (
                <div className="w-0.5 flex-1 mt-1 min-h-[20px]" style={{ background: `linear-gradient(180deg,${c.dot}40,transparent)` }} />
              )}
            </div>
            <div className="pb-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className={`font-semibold text-sm ${t}`}>{item.title}</h4>
                <span className="px-2 py-0.5 rounded-md text-xs font-mono" style={{ background: c.bg, color: c.text }}>{item.year}</span>
              </div>
              <p className={`text-xs mt-0.5 leading-relaxed ${m}`}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Achievements = ({ darkMode }) => {
  const total = achievements.reduce((a, g) => a + g.items.length, 0);
  const statGlass = darkMode
    ? { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }
    : { background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' };
  const t = darkMode ? 'text-white' : 'text-slate-800';
  const sm = darkMode ? 'text-white/40' : 'text-slate-400';

  return (
    <SectionWrapper id="achievements">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', color: '#a855f7' }}>
            Achievements
          </span>
          <h2 className="section-title">My <span className="gradient-text">Milestones</span></h2>
          <p className="section-subtitle">Recognition from academic, technical, and competitive endeavors.</p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { value: `${total}+`, label: 'Achievements', icon: '🏆' },
              { value: '3★', label: 'CodeChef', icon: '⭐' },
              { value: '200+', label: 'LeetCode', icon: '💡' },
              { value: '50+', label: 'Trailhead Badges', icon: '☁️' },
            ].map(({ value, label, icon }) => (
              <div key={label} className="px-5 py-3 rounded-xl text-center" style={statGlass}>
                <div className="text-2xl mb-1">{icon}</div>
                <div className="text-xl font-black gradient-text">{value}</div>
                <div className={`text-xs ${sm}`}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((group, i) => <AchievementCategory key={group.id} group={group} index={i} darkMode={darkMode} />)}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
