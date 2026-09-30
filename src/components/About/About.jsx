import { motion } from 'framer-motion';
import { FiTarget, FiCode, FiLayers, FiMail } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';
import { personalInfo } from '../../data/data';

const whatIDo = [
  'Build scalable, secure full-stack web applications with the MERN stack, Next.js, and TypeScript',
  'Design and integrate REST APIs with authentication, authorization, and database integration using MySQL and MongoDB',
  'Develop on Salesforce using Apex, Lightning Web Components (LWC), SOQL/SOSL, Apex Triggers, and record-triggered Flows',
  'Use AI-assisted development (Claude Code, prompt engineering) to accelerate software delivery',
];

const techStack = [
  { label: 'Languages',     value: 'Python, Java, JavaScript, TypeScript, SQL, PHP, C++' },
  { label: 'Frontend',      value: 'HTML, CSS, React.js, Next.js, Tailwind CSS, Bootstrap' },
  { label: 'Backend',       value: 'Node.js, Express.js, REST APIs, Apex' },
  { label: 'Databases',     value: 'MySQL, MongoDB, PostgreSQL, Oracle Database' },
  { label: 'Cloud & Tools', value: 'GCP, AWS, Git, GitHub, VS Code' },
];

const About = ({ darkMode }) => {
  const t  = darkMode ? 'text-white'      : 'text-slate-800';
  const m  = darkMode ? 'text-white/50'   : 'text-slate-500';
  const sm = darkMode ? 'text-white/40'   : 'text-slate-400';
  const divider = darkMode ? 'border-white/[0.06]' : 'border-slate-200';

  const sectionHeadStyle = {
    background: 'rgba(168,85,247,0.08)',
    border: '1px solid rgba(168,85,247,0.18)',
  };

  return (
    <SectionWrapper id="about">
      <div className="section-container">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', color: '#a855f7' }}>
            About Me
          </span>
          <h2 className="section-title gradient-text">Who Am I?</h2>
          <p className="section-subtitle">A passionate developer turning ideas into reality through code and data.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── LEFT COLUMN ── */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">

            {/* Intro card */}
            <div className="glass p-8 rounded-2xl space-y-3">
              <h3 className={`text-2xl font-bold ${t}`}>
                Hello! I&apos;m <span className="gradient-text">Prince Nigam</span>
              </h3>
              <p className={`leading-relaxed ${m}`}>
                Full Stack Developer and B.Tech CSE (Data Science) undergraduate at{' '}
                <span className="text-purple-400 font-medium">Gautam Buddha University</span>{' '}
                (Class of 2027), actively seeking{' '}
                <span className="text-blue-400 font-medium">SDE-1 / Software Engineer</span> opportunities.
              </p>
            </div>

            {/* What I Do */}
            <div className="glass p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={sectionHeadStyle}>
                  <FiCode size={15} className="text-purple-400" />
                </div>
                <h4 className={`font-bold ${t}`}>What I Do</h4>
              </div>
              <ul className="space-y-2.5">
                {whatIDo.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className={`flex gap-2.5 text-sm leading-relaxed ${m}`}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🎓', label: 'University', value: 'Gautam Buddha University' },
                { icon: '📚', label: 'Degree',     value: 'B.Tech CSE (Data Science)' },
                { icon: '📍', label: 'Location',   value: 'Greater Noida, UP' },
                { icon: '📧', label: 'Email',      value: personalInfo.email },
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

          {/* ── RIGHT COLUMN ── */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-6">

            {/* Experience */}
            <div className="glass p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={sectionHeadStyle}>
                  <FiTarget size={15} className="text-purple-400" />
                </div>
                <h4 className={`font-bold ${t}`}>Experience</h4>
              </div>
              <div className={`border-l-2 border-purple-500/40 pl-4 space-y-1`}>
                <p className={`text-sm font-semibold ${t}`}>Salesforce Development Intern</p>
                <p className="text-xs font-medium text-purple-400">Astrea IT Services · Jun–Jul 2026</p>
                <p className={`text-sm leading-relaxed ${m}`}>
                  Built a Placement Management System on Salesforce with LWC, Apex, and custom objects —
                  automating student registration, company management, application tracking, and placement workflows.
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="glass p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={sectionHeadStyle}>
                  <FiLayers size={15} className="text-purple-400" />
                </div>
                <h4 className={`font-bold ${t}`}>Projects</h4>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Secure Vault', desc: 'Secure file storage app with SHA-256 password hashing and the Web Crypto API.' },
                  { name: 'Fresh Grocery Mart', desc: 'Full-stack MERN e-commerce platform with authentication, product catalog, shopping cart, and order management.' },
                ].map((proj) => (
                  <div key={proj.name} className={`flex gap-2.5 text-sm ${m}`}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span><span className={`font-semibold ${t}`}>{proj.name}</span> — {proj.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="glass p-6 rounded-2xl space-y-3">
              <h4 className={`font-bold mb-3 ${t}`}>Tech I Work With</h4>
              {techStack.map((row, i) => (
                <div key={i} className={`flex gap-2 text-sm border-b last:border-0 pb-2.5 last:pb-0 ${divider}`}>
                  <span className={`font-semibold flex-shrink-0 w-28 ${sm}`}>{row.label}</span>
                  <span className={m}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.div whileHover={{ scale: 1.01 }} className="glass p-5 rounded-2xl flex items-center gap-4"
              style={{ background: 'linear-gradient(135deg,rgba(168,85,247,0.08),rgba(59,130,246,0.08))', border: '1px solid rgba(168,85,247,0.2)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.25)' }}>
                <FiMail size={18} className="text-purple-400" />
              </div>
              <div>
                <p className={`text-sm font-semibold ${t}`}>Open to Opportunities</p>
                <p className={`text-xs ${m}`}>
                  SDE-1, Full Stack Developer, Salesforce Developer —{' '}
                  <a href={`mailto:${personalInfo.email}`} className="text-purple-400 hover:text-purple-300 transition-colors">
                    {personalInfo.email}
                  </a>
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
