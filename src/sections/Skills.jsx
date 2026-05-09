import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Mobile Development',
    skills: ['Flutter', 'Dart'],
  },
  {
    title: 'Backend Development & APIs',
    skills: ['Node.js', 'REST APIs', 'MongoDB Atlas', 'Firebase Firestore', 'JWT', 'Firebase Auth'],
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'Flutter Web'],
  },
  {
    title: 'UI/UX Design',
    skills: ['Figma', 'Canva', 'Responsive Design'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Firebase', 'MongoDB Atlas', 'Vercel'],
  },
  {
    title: 'Project & Collaboration',
    skills: ['Agile (Scrum)', 'Jira'],
  },
  {
    title: 'Testing & Version Control',
    skills: ['Postman', 'Git', 'GitHub', 'Bitbucket'],
  },
];

function Skills() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 p-6 shadow-sm transition-transform"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="h-px bg-gray-200 dark:bg-gray-700 my-16" />
    </div>
  );
}

export default Skills;
