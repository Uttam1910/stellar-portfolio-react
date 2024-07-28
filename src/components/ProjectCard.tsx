import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  githubLink: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, thumbnail, githubLink, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative w-full h-80 perspective-1000" onClick={() => setFlipped(!flipped)}>
      <div className={`relative w-full h-full transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <div
          className={`absolute inset-0 bg-cover bg-center ${flipped ? 'hidden' : 'block'}`}
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 text-3xl hover:text-teal-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white p-4 ${flipped ? 'block' : 'hidden'} rotate-y-180`}
        >
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-center mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
