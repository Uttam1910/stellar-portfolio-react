import React from 'react';
import { FaGithub as FaGithubIcon } from 'react-icons/fa';

// ✅ TypeScript-safe casting for react-icons
const FaGithub = FaGithubIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  description: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, thumbnail, githubLink, description }) => {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg overflow-hidden hover:border-teal-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20">
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/avtar.png';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="mr-2" />
            View Code
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors duration-300"
        >
          View Project <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
