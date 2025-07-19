import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto prose prose-lg dark:prose-invert"
    >
       <h2 className="text-3xl font-bold mb-8">About Me</h2>

      <p>
       I am a results-driven IT graduate with solid expertise in Flutter, Node.js, and MongoDB, complemented by a strong foundation in both web and mobile development. My technical skill set extends to modern technologies such as JavaScript, Python, Angular, and Power BI, enabling me to build versatile and scalable applications.

Throughout my academic and project experience, I have developed a keen ability to solve complex problems efficiently and manage projects from conception through to successful delivery. I am known for my customer-focused approach, ensuring that solutions not only meet technical requirements but also align with user needs and business goals.

As an aspiring software engineer, I am passionate about creating innovative and impactful software solutions that make a difference. I continuously seek opportunities to learn, grow, and contribute to forward-thinking teams and projects that challenge the status quo.
      </p>
      <p>
        Currently, I focus on building full-stack web applications with React, Node.js, and more.
      </p>
      <div className="h-px bg-gray-300 dark:bg-gray-700 my-16" />

    </motion.div>
    
  );
}

export default About;
