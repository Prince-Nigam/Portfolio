import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const SectionWrapper = ({ children, id, className = '' }) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={fadeInUp}
    className={`py-20 md:py-28 relative z-10 ${className}`}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;
