import { motion } from 'framer-motion';

const education = [
  {
    title: 'NDT in Information Technology',
    institution: 'Institute of Technology, University of Moratuwa',
    duration: '2022 - Present',
  },
  {
    title: 'G.C.E. Advanced Level - Physical Science Stream',
    institution: 'Kattankudy Central College',
    duration: '2020',
  },
];

function Education() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 p-6 transition-transform"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.institution}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.duration}</p>
          </motion.div>
        ))}
      </div>
      <div className="h-px bg-gray-200 dark:bg-gray-700 my-16" />
    </div>
  );
}

export default Education;
