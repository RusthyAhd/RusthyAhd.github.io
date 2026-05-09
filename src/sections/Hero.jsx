import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col justify-center items-start max-w-2xl mx-auto"
    >
      <motion.span
        variants={itemVariants}
        className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold"
      >
        Software Engineer
      </motion.span>
      <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-6">
        Hi, I’m Rusthy Ahamed. I build fast, reliable apps for real users.
      </motion.h1>
      <motion.p variants={itemVariants} className="text-lg text-gray-700 dark:text-gray-300">
        Flutter + Firebase specialist with hands-on experience across mobile, web, and backend integration.
      </motion.p>
      <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="px-5 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          data-cursor="link"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-5 py-3 rounded-full border border-blue-600 text-blue-700 dark:text-blue-300 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
          data-cursor="link"
        >
          Let’s Talk
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
