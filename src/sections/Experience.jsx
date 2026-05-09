import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Intern Software Engineer',
    company: 'Orbit (Pvt) Ltd',
    duration: '2025',
    details: [
      'Collaborated with the development team to design and build web and mobile applications.',
      'Contributed to front-end and back-end features using Flutter, Dart, and Firebase.',
      'Assisted with API integration and performance optimization.',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'MongoDB'],
  },
 
];

const Experience = () => {
  return (
    <div className="max-w-2xl mx-auto prose prose-lg dark:prose-invert">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map(({ role, company, duration, details, technologies }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="border-l-4 border-blue-500 pl-6 transition-transform"
          >
            <h3 className="text-xl font-semibold">{role}</h3>
            <p className="italic text-sm text-gray-600 dark:text-gray-400">{company} | {duration}</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Technologies badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
  key={i}
  className="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-blue-300 dark:hover:bg-blue-700"
>
  {tech}
</span>

              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="h-px bg-gray-300 dark:bg-gray-700 my-16" />

    </div>
    
  );
};

export default Experience;
