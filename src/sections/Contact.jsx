import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto prose prose-lg dark:prose-invert"
      data-cursor="link"  
    >
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <p>
        Feel free to reach out via email at{' '}
        <a href="mailto:rusthyahamedd2001@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
          rusthyahamedd2001@gmail.com
        </a>
        .
      </p>
      <p>
        Or call{' '}
        <a href="tel:+94783825317" className="text-blue-600 dark:text-blue-400 hover:underline">
          +94 78 382 5317
        </a>
        .
      </p>
      <p>
        Connect on{' '}
        <a
          href="https://www.linkedin.com/in/rusthyahd2001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
        {' '}or explore my work on{' '}
        <a
          href="https://github.com/RusthyAhd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          GitHub
        </a>
        .
      </p>
    </motion.div>
  );
}

export default Contact;
