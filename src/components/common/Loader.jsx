import { motion } from 'framer-motion';

const Loader = () => (
  <motion.div
    key="loader"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
    className="fixed inset-0 z-50 flex flex-col items-center justify-center"
    style={{ background: '#050510' }}
  >
    <div className="absolute inset-0 overflow-hidden">
      <div className="orb orb-purple w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>

    <div className="relative z-10 flex flex-col items-center gap-8">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
        className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-white"
        style={{ background: 'linear-gradient(135deg,#a855f7,#3b82f6,#06b6d4)', boxShadow: '0 0 40px rgba(168,85,247,0.5)' }}
      >
        P
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-center">
        <h1 className="text-2xl font-bold gradient-text mb-1">Prince Nigam</h1>
        <p className="text-white/40 text-sm font-mono">Loading Portfolio...</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div initial={{ width: '0%' }} animate={{ width: '100%' }}
          transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.6 }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg,#a855f7,#3b82f6,#06b6d4)' }} />
      </motion.div>

      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div key={i} animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
            className="w-2 h-2 rounded-full bg-purple-500" />
        ))}
      </div>
    </div>
  </motion.div>
);

export default Loader;
