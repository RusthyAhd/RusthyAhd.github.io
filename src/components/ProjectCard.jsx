// src/components/ProjectCard.jsx
import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            {project.techStack && project.techStack.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  data-cursor="link"
                >
                  Live Demo →
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:underline"
                  data-cursor="link"
                >
                  GitHub Repo →
                </a>
              )}

              {!project.demo && !project.github && (
                <span className="text-sm text-gray-500">No link available</span>
              )}
            </div>
      </div>
    </div>
    
  );
}

export default ProjectCard;
