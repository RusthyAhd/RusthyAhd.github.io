import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-2xl mx-auto prose prose-lg dark:prose-invert"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">
        About Me
      </motion.h2>

      <motion.p variants={itemVariants}>
        I’m an IT graduate who ships production-ready apps for mobile and web. My core stack includes Flutter, Firebase, Node.js, and MongoDB, and I enjoy delivering experiences that are fast, secure, and easy to use.
      </motion.p>
      <motion.p variants={itemVariants}>
        From API integration to UI/UX details, I work across the full cycle to bring ideas to life. I care about clean architecture, performance, and measurable results.
      </motion.p>
      <motion.div variants={itemVariants} className="h-px bg-gray-300 dark:bg-gray-700 my-16" />

    </motion.div>
    
  );
}

export default About;
