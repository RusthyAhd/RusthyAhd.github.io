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
        <a href="mailto:rusthyahamed2001@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
          rusthyahamed2001@gmail.com
        </a>
        .
      </p>
    </motion.div>
  );
}

export default Contact;
