import React, { useState, useMemo, useEffect } from 'react';
import { archiveProjects, flagshipCaseStudies } from '../data/portfolioData';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaSearch, FaArrowRight, FaStar } from 'react-icons/fa';

export const ProjectsArchivePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'featured' | 'fullstack' | 'ai'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = useMemo(() => {
    return archiveProjects.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' ||
        (activeCategory === 'featured' && project.featured) ||
        (activeCategory === 'fullstack' && project.category.toLowerCase().includes('full-stack')) ||
        (activeCategory === 'ai' && project.category.toLowerCase().includes('ai'));

      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.oneLiner.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const leadProject = flagshipCaseStudies[0]; // Velvet Loop
  const secondaryFeatured = flagshipCaseStudies.slice(1); // AI Travel Planner, Golden Leaf Knots, EduMaster LMS
  const additionalProjects = archiveProjects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* HERO SECTION */}
          <div className="space-y-4 max-w-3xl">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              SELECTED ENGINEERING WORK
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Projects built to solve real problems.
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Curated full-stack web platforms, intelligent AI applications, and software systems built with production architecture, type safety, and clean engineering practices.
            </p>
          </div>

          {/* CATEGORY FILTER & SEARCH BAR */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-700/60">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 bg-slate-800 p-1.5 rounded-lg border border-slate-700 w-full sm:w-auto">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded text-xs font-semibold transition-colors ${
                  activeCategory === 'all' ? 'bg-blue-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Work ({archiveProjects.length})
              </button>
              <button
                onClick={() => setActiveCategory('featured')}
                className={`px-4 py-2 rounded text-xs font-semibold transition-colors ${
                  activeCategory === 'featured' ? 'bg-blue-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Featured ({flagshipCaseStudies.length})
              </button>
              <button
                onClick={() => setActiveCategory('fullstack')}
                className={`px-4 py-2 rounded text-xs font-semibold transition-colors ${
                  activeCategory === 'fullstack' ? 'bg-blue-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Full-Stack
              </button>
              <button
                onClick={() => setActiveCategory('ai')}
                className={`px-4 py-2 rounded text-xs font-semibold transition-colors ${
                  activeCategory === 'ai' ? 'bg-blue-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                AI Systems
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs" />
              <input
                type="text"
                placeholder="Filter by technology or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* VIEW MODE 1: DEFAULT EDITORIAL SHOWCASE (When Category is 'all' or 'featured' and no search term) */}
          {activeCategory === 'all' && !searchTerm && (
            <div className="space-y-16">
              
              {/* FEATURED SPOTLIGHT HEADER */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
                  <FaStar className="text-xs" />
                  <span>Flagship Case Studies</span>
                </div>

                {/* LEAD FEATURED PROJECT CARD (#1 Velvet Loop) */}
                {leadProject && (
                  <div className="surface-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group">
                    {/* Image */}
                    <div className="lg:col-span-7 relative h-72 sm:h-96 overflow-hidden bg-slate-800 border-b lg:border-b-0 lg:border-r border-slate-700/60">
                      <img
                        src={leadProject.thumbnail}
                        alt={leadProject.title}
                        className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/avtar.png';
                        }}
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded bg-slate-900/90 border border-slate-700 text-xs font-mono text-blue-400 uppercase font-semibold">
                        {leadProject.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                          Flagship E-Commerce Platform
                        </div>
                        <h2 className="font-sans text-3xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                          {leadProject.title}
                        </h2>
                        <p className="text-xs font-mono text-blue-400">
                          {leadProject.oneLiner}
                        </p>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {leadProject.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {leadProject.tech.slice(0, 5).map((t, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-700/60 flex items-center justify-between">
                        <Link
                          to={`/projects/${leadProject.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 px-5 py-2.5 rounded-lg shadow-sm transition-all"
                        >
                          <span>View Case Study</span>
                          <FaArrowRight className="text-[10px]" />
                        </Link>
                        <div className="flex items-center gap-3">
                          {leadProject.liveUrl && (
                            <a href={leadProject.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm" title="Live Demo">
                              <FaExternalLinkAlt />
                            </a>
                          )}
                          <a href={leadProject.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-base" title="Source Code">
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SECONDARY FEATURED GRID (AI Travel Planner, EduMaster LMS, Golden Leaf Knots) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                  {secondaryFeatured.map((project) => (
                    <div key={project.slug} className="surface-card overflow-hidden flex flex-col justify-between group">
                      <div>
                        <div className="relative h-56 overflow-hidden bg-slate-800 border-b border-slate-700/60">
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                            onError={(e) => { (e.target as HTMLImageElement).src = '/images/avtar.png'; }}
                          />
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700 text-[11px] font-mono text-blue-400 uppercase font-semibold">
                            {project.category}
                          </div>
                        </div>

                        <div className="p-6 space-y-3">
                          <h3 className="font-sans text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-xs font-mono text-blue-400">{project.oneLiner}</p>
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.tech.slice(0, 4).map((t, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono text-[10px]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-6 pt-0 border-t border-slate-700/40 mt-4 flex items-center justify-between">
                        <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                          <span>View Case Study</span>
                          <FaArrowRight className="text-[10px]" />
                        </Link>
                        <div className="flex items-center gap-3">
                          {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-xs">
                              <FaExternalLinkAlt />
                            </a>
                          )}
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm">
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ADDITIONAL SYSTEMS & PROTOTYPES SECTION */}
              <div className="space-y-8 pt-8 border-t border-slate-700/60">
                <div>
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">
                    System Applications & Prototypes
                  </div>
                  <h2 className="font-sans text-2xl font-bold text-white tracking-tight">
                    Additional Software Projects & Tools
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {additionalProjects.map((project) => (
                    <div key={project.slug} className="surface-card overflow-hidden flex flex-col justify-between group">
                      <div>
                        <div className="relative h-48 overflow-hidden bg-slate-800 border-b border-slate-700/60">
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                            onError={(e) => { (e.target as HTMLImageElement).src = '/images/avtar.png'; }}
                          />
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-blue-400 uppercase font-semibold">
                            {project.category}
                          </div>
                        </div>

                        <div className="p-6 space-y-3">
                          <h3 className="font-sans text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-xs font-mono text-blue-400">{project.oneLiner}</p>
                          <p className="text-slate-300 text-xs leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.tech.slice(0, 4).map((t, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono text-[10px]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-6 pt-0 border-t border-slate-700/40 mt-4 flex items-center justify-between">
                        <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                          <span>View Case Study</span>
                          <FaArrowRight className="text-[10px]" />
                        </Link>
                        <div className="flex items-center gap-3">
                          {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-xs">
                              <FaExternalLinkAlt />
                            </a>
                          )}
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm">
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* VIEW MODE 2: FILTERED OR SEARCH RESULTS GRID */}
          {(activeCategory !== 'all' || searchTerm) && (
            <div className="space-y-8">
              <div className="text-xs font-mono text-slate-400">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div key={project.slug} className="surface-card overflow-hidden flex flex-col justify-between group">
                    <div>
                      <div className="relative h-52 overflow-hidden bg-slate-800 border-b border-slate-700/60">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                          onError={(e) => { (e.target as HTMLImageElement).src = '/images/avtar.png'; }}
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700 text-[11px] font-mono text-blue-400 uppercase font-semibold">
                          {project.category}
                        </div>
                      </div>

                      <div className="p-6 space-y-3">
                        <h3 className="font-sans text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-blue-400">{project.oneLiner}</p>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tech.map((t, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono text-[10px]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-slate-700/40 mt-4 flex items-center justify-between">
                      <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                        <span>View Case Study</span>
                        <FaArrowRight className="text-[10px]" />
                      </Link>
                      <div className="flex items-center gap-3">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-xs">
                            <FaExternalLinkAlt />
                          </a>
                        )}
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm">
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="surface-card p-12 text-center text-slate-400 text-sm">
                  No projects matched your selected filter or search keywords.
                </div>
              )}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};
