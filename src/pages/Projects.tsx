import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      thumbnail: "/images/avtar.png",
      githubLink: 'https://github.com/yourusername/project1',
      description: 'This is a brief description of Project 1, here i had done testing.'
    },
    {
      title: 'Project 2',
      thumbnail: '/path/to/thumbnail2.jpg',
      githubLink: 'https://github.com/yourusername/project2',
      description: 'This is a brief description of Project 2.'
    },
    {
      title: 'Project 3',
      thumbnail: '/path/to/thumbnail3.jpg',
      githubLink: 'https://github.com/yourusername/project3',
      description: 'This is a brief description of Project 3.'
    },
    {
      title: 'Project 4',
      thumbnail: '/path/to/thumbnail4.jpg',
      githubLink: 'https://github.com/yourusername/project4',
      description: 'This is a brief description of Project 4.'
    },
    {
      title: 'Project 5',
      thumbnail: '/path/to/thumbnail5.jpg',
      githubLink: 'https://github.com/yourusername/project5',
      description: 'This is a brief description of Project 5.'
    },
    {
      title: 'Project 6',
      thumbnail: '/path/to/thumbnail6.jpg',
      githubLink: 'https://github.com/yourusername/project6',
      description: 'This is a brief description of Project 6.'
    }
  ];

  return (
    <main className="flex flex-col p-10 bg-gray-100 min-h-screen">
      <section id="projects" className="bg-white shadow-md rounded-lg p-6 ml-64">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              thumbnail={project.thumbnail}
              githubLink={project.githubLink}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
