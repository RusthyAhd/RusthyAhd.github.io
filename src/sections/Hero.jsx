import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-start max-w-2xl mx-auto"
    >
      <h1 className="text-5xl font-bold mb-6">Hi, I’m Rusthy.</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        I’m a software developer who loves building beautiful and performant web apps.
      </p>
    </motion.div>
  );
}

export default Hero;
