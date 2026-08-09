import React from 'react';
import { flagshipCaseStudies } from '../data/portfolioData';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-slate-900 border-b border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">
              Featured Work
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Curated full-stack platforms, AI applications, and software systems built with clean architecture and modern web frameworks.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View Full Project Archive</span>
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>

        {/* 4 Flagship Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {flagshipCaseStudies.map((project) => (
            <div
              key={project.slug}
              className="surface-card overflow-hidden flex flex-col justify-between group"
            >
              {/* Top Thumbnail */}
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-800 border-b border-slate-700/60">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/avtar.png';
                    }}
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700 text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                    {project.category}
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-mint-500" />
                    <span>{project.liveUrl ? 'LIVE DEMO' : 'SOURCE CODE'}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <h3 className="font-sans text-xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-400/90 mt-1">
                      {project.oneLiner}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips (Max 5) */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.slice(0, 5).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-8 pt-0 border-t border-slate-700/40 mt-4 flex items-center justify-between">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View Technical Case Study</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors text-base"
                    title="Source Code"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
