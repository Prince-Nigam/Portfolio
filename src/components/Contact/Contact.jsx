import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiTwitter } from 'react-icons/fi';
import SectionWrapper from '../common/SectionWrapper';
import { personalInfo } from '../../data/data';

const colorMap = {
  purple: { bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.2)', text: '#a855f7' },
  blue:   { bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.2)',  text: '#3b82f6' },
  cyan:   { bg: 'rgba(6,182,212,0.1)',   border: 'rgba(6,182,212,0.2)',   text: '#06b6d4' },
};

const Contact = ({ darkMode }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const t  = darkMode ? 'text-white'     : 'text-slate-800';
  const m  = darkMode ? 'text-white/50'  : 'text-slate-500';
  const sm = darkMode ? 'text-white/30'  : 'text-slate-400';
  const labelColor = darkMode ? 'text-white/50' : 'text-slate-500';

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setErrors((p) => ({ ...p, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const contactItems = [
    { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'purple' },
    { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'blue' },
    { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: '#', color: 'cyan' },
  ];

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', href: personalInfo.social.github },
    { icon: FiLinkedin, label: 'LinkedIn', href: personalInfo.social.linkedin },
    { icon: FiTwitter, label: 'Twitter', href: personalInfo.social.twitter },
    { icon: FiMail, label: 'Email', href: `mailto:${personalInfo.email}` },
  ];

  const socialStyle = darkMode
    ? { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }
    : { background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.08)' };

  const availStyle = darkMode
    ? { background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }
    : { background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' };

  return (
    <SectionWrapper id="contact">
      <div className="section-container">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', color: '#a855f7' }}>
            Get In Touch
          </span>
          <h2 className="section-title">Let&apos;s <span className="gradient-text">Connect</span></h2>
          <p className="section-subtitle">Open to internships, collaborations, and exciting new opportunities.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-5">
            <div className="glass p-6 rounded-2xl">
              <h3 className={`text-lg font-bold mb-2 ${t}`}>Let&apos;s talk</h3>
              <p className={`text-sm leading-relaxed mb-6 ${m}`}>
                Whether you have a project idea, job opportunity, or just want to say hi — my inbox is always open.
              </p>
              <div className="space-y-4">
                {contactItems.map(({ icon: Icon, label, value, href, color }) => {
                  const c = colorMap[color];
                  return (
                    <a key={label} href={href} className="flex items-center gap-4 group">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                        <Icon size={16} style={{ color: c.text }} />
                      </div>
                      <div>
                        <p className={`text-xs ${sm}`}>{label}</p>
                        <p className={`text-sm group-hover:text-purple-500 transition-colors ${m}`}>{value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h4 className={`font-semibold text-sm mb-4 ${m}`}>Find me on</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2.5 p-3 rounded-xl text-sm font-medium transition-all hover:text-purple-500 ${m}`}
                    style={socialStyle}>
                    <Icon size={16} /> {label}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl" style={availStyle}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-500 font-semibold text-sm">Available for work</span>
              </div>
              <p className={`text-xs leading-relaxed ${m}`}>
                Looking for internships and opportunities in Software Development, AI/ML, and Cloud Computing.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-3">
            <div className="glass p-8 rounded-2xl">
              <h3 className={`text-lg font-bold mb-6 ${t}`}>Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${labelColor}`}>Your Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Prince Nigam"
                      className={`form-input ${errors.name ? 'border-red-400' : ''}`} autoComplete="name" />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${labelColor}`}>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com"
                      className={`form-input ${errors.email ? 'border-red-400' : ''}`} autoComplete="email" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${labelColor}`}>Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" className="form-input" />
                </div>

                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${labelColor}`}>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                    placeholder="Your message here..." className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`} />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <motion.button type="submit" disabled={status === 'sending' || status === 'sent'}
                  whileHover={status === 'idle' ? { scale: 1.02 } : {}} whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-white transition-all duration-300"
                  style={status === 'sent'
                    ? { background: 'linear-gradient(135deg,#059669,#10b981)', boxShadow: '0 4px 15px rgba(16,185,129,0.3)' }
                    : { background: 'linear-gradient(135deg,#a855f7,#3b82f6)', boxShadow: '0 4px 15px rgba(168,85,247,0.3)' }}>
                  {status === 'sending' && <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />}
                  {status === 'sent' && <FiCheck size={18} />}
                  {status === 'idle' && <FiSend size={18} />}
                  {status === 'idle' ? 'Send Message' : status === 'sending' ? 'Sending...' : 'Message Sent!'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
