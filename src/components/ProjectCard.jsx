// src/components/ProjectCard.jsx
import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
         data-cursor="link" 
      >
        View Project →
      </a>
      
    </div>
    
  );
}

export default ProjectCard;
