import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo, navLinks } from '../../data/data';

const Footer = ({ darkMode }) => {
  const year = new Date().getFullYear();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const border = darkMode ? 'border-white/[0.06]' : 'border-slate-200';
  const t  = darkMode ? 'text-white'    : 'text-slate-800';
  const m  = darkMode ? 'text-white/40' : 'text-slate-400';
  const sm = darkMode ? 'text-white/25' : 'text-slate-300';

  return (
    <footer className={`relative z-10 border-t ${border} transition-colors duration-500`}>
      <div
        className="h-0.5 w-full"
        style={{ background: 'linear-gradient(90deg,transparent,#a855f7,#3b82f6,#06b6d4,transparent)' }}
      />

      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black text-white"
                style={{ background: 'linear-gradient(135deg,#a855f7,#3b82f6)' }}>P</div>
              <span className={`font-bold text-lg ${t}`}>Prince Nigam</span>
            </div>
            <p className={`text-sm leading-relaxed max-w-xs ${m}`}>
              B.Tech CSE (Data Science & ML) student building the future with code, data, and intelligence.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
                { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                { icon: FiTwitter, href: personalInfo.social.twitter, label: 'Twitter' },
                { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }}
                  className={`w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-purple-500 transition-colors ${m}`}>
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className={`font-semibold text-xs tracking-widest uppercase mb-4 ${m}`}>Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => scrollTo(link.href)}
                  className={`text-left text-sm py-1 hover:text-purple-500 transition-colors ${m}`}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-semibold text-xs tracking-widest uppercase mb-4 ${m}`}>Contact</h4>
            <div className="space-y-3">
              <a href={`mailto:${personalInfo.email}`} className={`block text-sm hover:text-purple-500 transition-colors ${m}`}>{personalInfo.email}</a>
              <a href={`tel:${personalInfo.phone}`} className={`block text-sm hover:text-purple-500 transition-colors ${m}`}>{personalInfo.phone}</a>
              <p className={`text-sm ${m}`}>{personalInfo.location}</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-500 text-xs">Available for opportunities</span>
            </div>
          </div>
        </div>

        <div className={`pt-6 border-t ${border} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <p className={`text-xs ${sm}`}>© {year} Prince Nigam. All rights reserved.</p>
          <p className={`text-xs flex items-center gap-1.5 ${sm}`}>
            Crafted with <FiHeart size={11} className="text-red-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
