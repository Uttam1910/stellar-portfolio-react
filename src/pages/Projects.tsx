import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import { FaSearch as FaSearchIcon } from 'react-icons/fa';

const FaSearch = FaSearchIcon as React.ComponentType<any>;

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    // Keep the four requested projects at the top (in the requested order)
    {
      title: 'AI Travel Planner',
      thumbnail: '/images/projects/ai-travel-planner.svg',
      githubLink: 'https://github.com/Uttam1910/AI_TRAVEL_PLANNER',
      website: 'https://ai-travel-planner-seven-sand.vercel.app/',
      description: 'An AI-powered travel planning tool that suggests itineraries, optimizes routes, and recommends attractions based on user preferences. Built with modern web technologies and AI-powered recommendation models to personalize travel experiences.',
      category: 'fullstack'
    },
    {
      title: 'AI Product Recommender',
      thumbnail: '/images/projects/ai-product-recommender.svg',
      githubLink: 'https://github.com/Uttam1910/AI-product-recommender-',
      website: 'https://ai-product-recommender-azure.vercel.app/',
      description: 'A product recommendation system leveraging AI to suggest relevant products to users based on behavior and preference. Integrates recommendation algorithms with a clean UI to improve conversion and discovery.',
      category: 'fullstack'
    },
    {
      title: 'Employee Management System',
      thumbnail: '/images/employee-management-system.svg',
      githubLink: 'https://github.com/Uttam1910/employee-management-system',
      website: 'https://employee-management-system-omega-eight.vercel.app/',
      description: 'A full-featured employee management system to manage employee records, attendance, payroll, and roles. Built to simplify HR workflows with role-based access control and a responsive dashboard.',
      category: 'fullstack'
    },
    {
      title: 'Weather Agent Chat',
      thumbnail: '/images/projects/weather-agent-chat.svg',
      githubLink: 'https://github.com/Uttam1910/weather-agent-chat',
      website: 'https://weather-agent-chat-one.vercel.app/',
      description: 'An interactive chat-based weather assistant that provides forecasts, alerts, and travel-ready summaries. Uses conversational UI patterns to let users request weather information naturally and quickly.',
      category: 'frontend'
    },
    // Existing projects (kept after the new ones)
    {
      title: 'Learning Management System',
      thumbnail: "/images/LMS.png",
      githubLink: 'https://github.com/Uttam1910/EduMaster',
      website: '#',
      description: 'A comprehensive Learning Management System built with MERN stack, providing features like course creation, user enrollment, and lecture management. The system also includes user authentication and authorization with role-based access control for administrators and students.',
      category: 'fullstack'
    },
    {
      title: 'Portfolio Website',
      thumbnail: '/images/avtar.png',
      githubLink: 'https://github.com/Uttam1910/stellar-portfolio-react',
      website: '#',
      description: 'A personal portfolio website built with React and TypeScript, showcasing my projects, skills, and experience. The website features a responsive design, smooth navigation, and integrates with EmailJS for the contact form.',
      category: 'frontend'
    },
    {
      title: 'Pokedex App',
      thumbnail: '/images/pokedex.jpg',
      githubLink: 'https://github.com/Uttam1910/Pokedex-App',
      description: 'A Pokedex application that allows users to search for Pokémon and view detailed information about each one. The app is built with React and integrates with the PokéAPI to fetch data dynamically.',
      category: 'frontend'
    },
    {
      title: 'eCommerce Website',
      thumbnail: '/images/eCommerce.png',
      githubLink: 'https://github.com/Uttam1910/eCommerceWebsite',
      website: '#',
      description: 'An eCommerce website built with HTML, CSS, and JavaScript. It includes product listings, a shopping cart, and a checkout process, providing a seamless shopping experience.',
      category: 'frontend'
    },
    {
      title: 'Tic-Tac-Toe Game',
      thumbnail: '/images/tic-tac-toe.png',
      githubLink: 'https://github.com/Uttam1910/react-tic-tac-toe',
      description: 'A classic Tic-Tac-Toe game implemented with React. The game includes features like score tracking and the ability to reset the game, providing an engaging user experience.',
      category: 'game'
    },
    {
      title: 'Connect Four Game',
      thumbnail: '/images/connect.png',
      githubLink: 'https://github.com/Uttam1910/connect-four-game',
      description: 'An interactive Connect Four game developed with JavaScript, HTML, and CSS. The game features a user-friendly interface and allows two players to compete against each other.',
      category: 'game'
    },
    {
      title: 'Counter App',
      thumbnail: '/images/counter.jpg',
      githubLink: 'https://github.com/Uttam1910/counter-app',
      description: 'A simple counter application developed using HTML, CSS, and JavaScript with DOM manipulation. It demonstrates basic state management and user interaction, with a minimalistic design.',
      category: 'frontend'
    },
    {
      title: 'To-Do List App with Task History',
      thumbnail: '/images/todolist.png',
      githubLink: 'https://github.com/Uttam1910/To-Do-List-App-with-Task-History',
      website: '#',
      description: 'A To-Do List application that allows users to add, delete, and mark tasks as completed. The app also maintains a history of completed tasks, providing a comprehensive task management solution.',
      category: 'frontend'
    },
    {
      title: 'QuiztieProject',
      thumbnail: '/images/quiz.jpg',
      githubLink: 'https://github.com/Uttam1910/QuiztieProject',
      website: '#',
      description: 'A Quiz App built with an intuitive and user-friendly interface, allowing users to take quizzes on various topics. Features include timed quizzes, multiple question types (MCQs, true/false), real-time scoring, and result tracking.',
      category: 'fullstack'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'game', label: 'Games' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

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

          {/* Search Bar */}
          <div className="animate-fade-in-delay max-w-2xl mx-auto w-full">
            <div className="relative group">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-400 text-lg pointer-events-none" />
              <input
                type="text"
                placeholder="Search projects by name or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-teal-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 backdrop-blur-sm"
              />
              <div className="absolute inset-0 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-teal-500/0 -z-10"></div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="animate-fade-in-delay-2 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/50'
                    : 'bg-gray-800/50 text-gray-300 border border-teal-500/20 hover:border-teal-500/40 hover:bg-gray-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard
                    title={project.title}
                    thumbnail={project.thumbnail}
                    githubLink={project.githubLink}
                    website={project.website || '#'}
                    description={project.description}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 animate-fade-in">
                <p className="text-gray-400 text-lg mb-4">No projects found matching your search.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Project Count */}
          <div className="text-center animate-fade-in-delay-3">
            <p className="text-gray-400">
              Showing <span className="text-teal-400 font-semibold">{filteredProjects.length}</span> of <span className="text-teal-400 font-semibold">{projects.length}</span> projects
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
