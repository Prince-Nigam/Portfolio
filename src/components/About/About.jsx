import { motion } from 'framer-motion';
import { FiTarget, FiCode, FiBook } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';
import { personalInfo } from '../../data/data';

const traits = [
  { icon: FiCode, title: 'Software Development', desc: 'Building scalable, efficient applications with modern frameworks and best practices.' },
  { icon: FiBook, title: 'AI / ML Research', desc: 'Exploring data science, machine learning, and deep learning to build intelligent systems.' },
  { icon: FiTarget, title: 'Problem Solving', desc: 'Tackling complex algorithmic challenges and competitive programming competitions.' },
  { icon: '☁️', title: 'Cloud & Salesforce', desc: 'Leveraging cloud platforms and Salesforce CRM to build enterprise solutions.' },
];

const About = ({ darkMode }) => {
  const t = darkMode ? 'text-white' : 'text-slate-800';
  const m = darkMode ? 'text-white/50' : 'text-slate-500';
  const sm = darkMode ? 'text-white/40' : 'text-slate-400';
  const border = darkMode ? 'border-white/[0.06]' : 'border-slate-200';
  const quoteStyle = darkMode
    ? { background: 'linear-gradient(135deg,rgba(168,85,247,0.08),rgba(59,130,246,0.08))', border: '1px solid rgba(168,85,247,0.15)' }
    : { background: 'linear-gradient(135deg,rgba(168,85,247,0.04),rgba(59,130,246,0.04))', border: '1px solid rgba(168,85,247,0.15)' };

  return (
    <SectionWrapper id="about">
      <div className="section-container">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', color: '#a855f7' }}>
            About Me
          </span>
          <h2 className={`section-title gradient-text`}>Who Am I?</h2>
          <p className="section-subtitle">A passionate developer turning ideas into reality through code and data.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="glass p-8 rounded-2xl space-y-4">
              <h3 className={`text-2xl font-bold ${t}`}>Hello! I'm <span className="gradient-text">Prince Nigam</span></h3>
              <p className={`leading-relaxed ${m}`}>{personalInfo.bio}</p>
              <p className={`leading-relaxed ${m}`}>
                I'm currently pursuing B.Tech in Computer Science Engineering with specialization in{' '}
                <span className="text-purple-500 font-medium">Data Science & Machine Learning</span> at
                Gautam Buddha University.
              </p>
              <p className={`leading-relaxed ${m}`}>
                When I'm not coding, you'll find me exploring new AI/ML papers, solving problems on LeetCode,
                or learning Salesforce on Trailhead.
              </p>
            </div>

            {/* Career Objective */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <FiTarget className="text-purple-500" size={20} />
                <h4 className={`font-semibold ${t}`}>Career Objective</h4>
              </div>
              <p className={`text-sm leading-relaxed ${m}`}>{personalInfo.careerObjective}</p>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🎓', label: 'University', value: 'Gautam Buddha University' },
                { icon: '📚', label: 'Degree', value: 'B.Tech CSE (DS/ML)' },
                { icon: '📍', label: 'Location', value: 'Greater Noida, UP' },
                { icon: '📧', label: 'Email', value: personalInfo.email },
              ].map((item) => (
                <motion.div key={item.label} whileHover={{ scale: 1.02 }} className="glass p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{item.icon}</span>
                    <span className={`text-xs font-medium ${sm}`}>{item.label}</span>
                  </div>
                  <p className={`text-sm font-medium truncate ${t}`}>{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-4">
            <h3 className={`text-xl font-bold mb-6 ${t}`}>What I'm Passionate About</h3>
            {traits.map((trait, i) => (
              <motion.div key={trait.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ x: 6 }} className="glass p-5 rounded-xl flex gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl group-hover:scale-110 transition-transform"
                  style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}>
                  {typeof trait.icon === 'string' ? trait.icon : <trait.icon size={20} className="text-purple-500" />}
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${t}`}>{trait.title}</h4>
                  <p className={`text-sm leading-relaxed ${m}`}>{trait.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="p-6 rounded-2xl mt-4" style={quoteStyle}>
              <blockquote className={`italic text-sm leading-relaxed ${m}`}>
                "The best way to predict the future is to invent it."
              </blockquote>
              <p className={`text-xs mt-2 ${sm}`}>— Alan Kay</p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
