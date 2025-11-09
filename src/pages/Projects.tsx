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
    {
      title: 'QuiztieProject',
      thumbnail: '/images/quiz.jpg',
      githubLink: 'https://github.com/Uttam1910/QuiztieProject',
      description: 'A Quiz App built with an intuitive and user-friendly interface, allowing users to take quizzes on various topics. Features include timed quizzes, multiple question types (MCQs, true/false), real-time scoring, and result tracking. It is designed with responsive layouts for seamless access across devices, and includes an admin panel for managing quiz content.'
    },
  ];

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-delayed"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Main content - centered */}
      <section className="relative z-10 flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="w-full max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <p className="text-teal-400 font-mono text-sm sm:text-base opacity-70">
              <span className="text-gray-500">&lt;</span>projects
              <span className="text-gray-500">/&gt;</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              My <span className="text-teal-400">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of projects showcasing my skills and experience in web development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard
                  title={project.title}
                  thumbnail={project.thumbnail}
                  githubLink={project.githubLink}
                  description={project.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
