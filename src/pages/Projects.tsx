import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'LMS',
      thumbnail: "/images/LMS.png",
      githubLink: 'https://github.com/Uttam1910/EduMaster',
      description: 'This is a brief description of Project 1, here i had done testing.'
    },
    {
      title: 'Portfolio',
      thumbnail: '/images/avtar.png',
      githubLink: 'https://github.com/Uttam1910/stellar-portfolio-react',
      description: 'This is a brief description of Project 2.'
    },
    {
      title: 'Pokedex',
      thumbnail: '/images/pokedex.jpg',
      githubLink: 'https://github.com/Uttam1910/Pokedex-App',
      description: 'This is a brief description of Project 3.'
    },
    {
      title: 'eCommerceWebsite',
      thumbnail: '/images/eCommerce.png',
      githubLink: 'https://github.com/Uttam1910/eCommerceWebsite',
      description: 'This is a brief description of Project 6.'
    },
    {
      title: 'Tic-Tac-Toe',
      thumbnail: '/images/tic-tac-toe.png',
      githubLink: 'https://github.com/Uttam1910/react-tic-tac-toe',
      description: 'This is a brief description of Project 4.'
    },
    {
      title: 'Connect-four-game',
      thumbnail: '/images/connect.png',
      githubLink: 'https://github.com/Uttam1910/connect-four-game',
      description: 'This is a brief description of Project 5.'
    },
    {
      title: 'counter-app',
      thumbnail: '/images/counter.jpg',
      githubLink: 'https://github.com/Uttam1910/connect-four-game',
      description: 'This is a brief description of Project 5.'
    },
    {
      title: 'To-Do-List-App-with-Task-History',
      thumbnail: '/images/todolist.png',
      githubLink: 'https://github.com/Uttam1910/counter-app',
      description: 'This is a brief description of Project 5.'
    },
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
