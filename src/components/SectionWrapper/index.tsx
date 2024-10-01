import { motion } from 'framer-motion';

const transitionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const SectionWrapper = ({ children }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={transitionVariants}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default SectionWrapper;
