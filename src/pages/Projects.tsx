import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Learning Management System',
      thumbnail: "/images/LMS.png",
      githubLink: 'https://github.com/Uttam1910/EduMaster',
      description: 'A comprehensive Learning Management System built with MERN stack, providing features like course creation, user enrollment, and lecture management. The system also includes user authentication and authorization with role-based access control for administrators and students.'
    },
    {
      title: 'Portfolio Website',
      thumbnail: '/images/avtar.png',
      githubLink: 'https://github.com/Uttam1910/stellar-portfolio-react',
      description: 'A personal portfolio website built with React and TypeScript, showcasing my projects, skills, and experience. The website features a responsive design, smooth navigation, and integrates with EmailJS for the contact form.'
    },
    {
      title: 'Pokedex App',
      thumbnail: '/images/pokedex.jpg',
      githubLink: 'https://github.com/Uttam1910/Pokedex-App',
      description: 'A Pokedex application that allows users to search for Pokémon and view detailed information about each one. The app is built with React and integrates with the PokéAPI to fetch data dynamically.'
    },
    {
      title: 'eCommerce Website',
      thumbnail: '/images/eCommerce.png',
      githubLink: 'https://github.com/Uttam1910/eCommerceWebsite',
      description: 'An eCommerce website built with HTML, CSS, and JavaScript. It includes product listings, a shopping cart, and a checkout process, providing a seamless shopping experience.'
    },
    {
      title: 'Tic-Tac-Toe Game',
      thumbnail: '/images/tic-tac-toe.png',
      githubLink: 'https://github.com/Uttam1910/react-tic-tac-toe',
      description: 'A classic Tic-Tac-Toe game implemented with React. The game includes features like score tracking and the ability to reset the game, providing an engaging user experience.'
    },
    {
      title: 'Connect Four Game',
      thumbnail: '/images/connect.png',
      githubLink: 'https://github.com/Uttam1910/connect-four-game',
      description: 'An interactive Connect Four game developed with JavaScript, HTML, and CSS. The game features a user-friendly interface and allows two players to compete against each other.'
    },
    {
      title: 'Counter App',
      thumbnail: '/images/counter.jpg',
      githubLink: 'https://github.com/Uttam1910/counter-app',
      description: 'A simple counter application developed using HTML, CSS, and JavaScript with DOM manipulation. It demonstrates basic state management and user interaction, with a minimalistic design.'
    },
    {
      title: 'To-Do List App with Task History',
      thumbnail: '/images/todolist.png',
      githubLink: 'https://github.com/Uttam1910/To-Do-List-App-with-Task-History',
      description: 'A To-Do List application that allows users to add, delete, and mark tasks as completed. The app also maintains a history of completed tasks, providing a comprehensive task management solution.'
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
