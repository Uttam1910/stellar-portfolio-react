import React from 'react';
import { FaGithub as FaGithubIcon } from 'react-icons/fa';

// ✅ TypeScript-safe casting for react-icons
const FaGithub = FaGithubIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  description: string;
  githubLink: string;
  website?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, thumbnail, githubLink, website = '#', description }) => {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg overflow-hidden hover:border-teal-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 h-full flex flex-col">
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
        
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Top shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 group-hover:animate-shimmer"></div>

        {/* CTA Button */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex gap-3 justify-center">
            <a
              href={website || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white/8 backdrop-blur-sm border border-white/6 text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 font-semibold gap-2 shadow-sm hover:shadow-teal-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              Live Site
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 font-semibold gap-2 shadow-lg hover:shadow-teal-500/50"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="w-4 h-4" />
              View Code
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 flex-1 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-4">
          <a
            href={website || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors duration-300"
          >
            Live Site
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gray-300 hover:text-gray-200 transition-colors duration-300 flex items-center gap-2"
          >
            <FaGithub className="w-4 h-4 inline" />
            View Code
          </a>
        </div>
      </div>

      {/* Border glow effect on hover */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
        background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(20, 184, 166, 0.3) 0%, transparent 80%)',
      }}></div>
    </div>
  );
};

export default ProjectCard;
