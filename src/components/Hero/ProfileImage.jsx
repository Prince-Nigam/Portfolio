import { motion } from 'framer-motion';
import { personalInfo } from '../../data/data';

const ProfileImage = () => {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
      {/* Spinning ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #a855f7, #3b82f6, #06b6d4, transparent, transparent, #a855f7)',
          padding: '2px',
        }}
      >
        <div className="w-full h-full rounded-full bg-[#050510]" />
      </motion.div>

      {/* Slower spinning ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-12px] rounded-full"
        style={{
          background: 'conic-gradient(from 180deg, transparent, transparent, rgba(168,85,247,0.3), transparent)',
          padding: '1px',
        }}
      >
        <div className="w-full h-full rounded-full bg-transparent" />
      </motion.div>

      {/* Glow effect */}
      <div
        className="absolute inset-4 rounded-full"
        style={{
          boxShadow: '0 0 60px rgba(168,85,247,0.3), 0 0 100px rgba(59,130,246,0.15)',
        }}
      />

      {/* Profile image or avatar */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-[3px] rounded-full overflow-hidden"
        style={{ border: '2px solid rgba(168,85,247,0.3)' }}
      >
        {personalInfo.profileImage ? (
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        ) : (
          /* Placeholder avatar */
          <div
            className="w-full h-full flex flex-col items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(59,130,246,0.15) 50%, rgba(6,182,212,0.1) 100%)',
            }}
          >
            {/* Silhouette SVG */}
            <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 opacity-60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="avatarGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              {/* Head */}
              <circle cx="100" cy="70" r="38" fill="url(#avatarGrad)" opacity="0.8" />
              {/* Body */}
              <path d="M30 190 Q30 130 100 130 Q170 130 170 190" fill="url(#avatarGrad)" opacity="0.6" />
            </svg>
            <span className="text-white/60 text-sm font-medium mt-2">Add Your Photo</span>
          </div>
        )}
      </motion.div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl text-xs font-semibold"
        style={{ border: '1px solid rgba(168,85,247,0.3)', color: 'rgba(196,148,255,0.9)' }}
      >
        🤖 AI/ML
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl text-xs font-semibold"
        style={{ border: '1px solid rgba(59,130,246,0.3)', color: 'rgba(147,197,253,0.9)' }}
      >
        ☁️ Google Cloud
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-8 -right-8 glass px-3 py-2 rounded-xl text-xs font-semibold"
        style={{ border: '1px solid rgba(6,182,212,0.3)', color: 'rgba(103,232,249,0.9)' }}
      >
        ⚡ React
      </motion.div>
    </div>
  );
};

export default ProfileImage;
