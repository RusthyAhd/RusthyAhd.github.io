import { motion } from 'framer-motion';
import projects from '../constants/projects';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <h2 className="text-3xl font-bold mb-3">Projects</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        A selection of production work, case-study builds, and client-focused apps.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.div
  key={project.title}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
  whileHover={{ y: -6 }}
  data-cursor="project" 
  className="shadow-lg hover:shadow-xl dark:shadow-gray-800 rounded-lg transition-all duration-300"
>
  <ProjectCard project={project} />
</motion.div>

        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
