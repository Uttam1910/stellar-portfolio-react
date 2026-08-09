import React, { useState, useMemo } from 'react';
import { flagshipCaseStudies, ProjectCaseStudy } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { FaExternalLinkAlt, FaGithub, FaMicrochip, FaSearch } from 'react-icons/fa';

export const CaseStudiesSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'fullstack' | 'ai' | 'frontend'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return flagshipCaseStudies.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesQuery =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="case-studies" className="py-24 relative bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>&lt;featured_case_studies /&gt;</span>
          </div>
          <h2 className="font-space text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Engineering <span className="cyan-gradient-text">Case Studies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Curated production-ready web platforms, AI integrations, and full-stack software applications built with modern architectural principles.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 bg-dark-800 p-1.5 rounded-xl border border-slate-800 w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-cyan-400 text-dark-900 shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({flagshipCaseStudies.length})
            </button>
            <button
              onClick={() => setActiveCategory('fullstack')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'fullstack'
                  ? 'bg-cyan-400 text-dark-900 shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full-Stack
            </button>
            <button
              onClick={() => setActiveCategory('ai')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'ai'
                  ? 'bg-cyan-400 text-dark-900 shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI / ML
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs" />
            <input
              type="text"
              placeholder="Search stack or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-dark-800 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
            >
              {/* Thumbnail Container */}
              <div>
                <div className="relative h-48 overflow-hidden bg-dark-800">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/avtar.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-dark-900/90 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-space text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400/80 mt-1">{project.oneLiner}</p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-dark-800 border border-slate-700/80 text-slate-300 text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-dark-800 text-slate-400 text-[10px] font-mono">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <FaMicrochip className="text-xs" />
                  <span>View Technical Case Study →</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                      title="Live Site"
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

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
