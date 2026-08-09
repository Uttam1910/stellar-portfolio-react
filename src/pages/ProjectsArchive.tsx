import React, { useState, useMemo, useEffect } from 'react';
import { archiveProjects, flagshipCaseStudies } from '../data/portfolioData';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaSearch, FaArrowRight, FaStar } from 'react-icons/fa';

import { SEOHead } from '../components/SEOHead';

export const ProjectsArchivePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'featured' | 'fullstack' | 'saas' | 'ai' | 'backend' | 'ml'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.uttamthapa.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://www.uttamthapa.com/projects"
      }
    ]
  };

  const filteredProjects = useMemo(() => {
    return archiveProjects.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' ||
        (activeCategory === 'featured' && project.featured) ||
        (activeCategory === 'fullstack' && project.category.toLowerCase().includes('full-stack')) ||
        (activeCategory === 'saas' && (project.category.toLowerCase().includes('saas') || project.category.toLowerCase().includes('product'))) ||
        (activeCategory === 'ai' && project.category.toLowerCase().includes('ai')) ||
        (activeCategory === 'backend' && project.category.toLowerCase().includes('backend')) ||
        (activeCategory === 'ml' && (project.category.toLowerCase().includes('machine learning') || project.category.toLowerCase().includes('computer vision')));

      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.oneLiner.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const leadProject = flagshipCaseStudies[0]; // SellerZonee
  const secondaryFeatured = flagshipCaseStudies.slice(1); // Velvet Loop, LifeOS, AI Travel Planner, Golden Leaf Knots, EduMaster LMS
  const additionalProjects = archiveProjects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <SEOHead
        title="Software Engineering Projects | Uttam Thapa"
        description="Curated showcase of engineering projects by Uttam Thapa, including multi-tenant SaaS platforms (SellerZonee), e-commerce engines (Velvet Loop), AI productivity tools (LifeOS), and backend microservices."
        canonicalUrl="https://www.uttamthapa.com/projects"
        jsonLd={breadcrumbJsonLd}
      />
      <Header />

      <main className="flex-1 pt-8 sm:pt-10 pb-16 sm:pb-24">
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
              Curated multi-tenant SaaS platforms, full-stack web products, intelligent AI applications, and backend systems built with production architecture, type safety, and clean engineering practices.
            </p>
          </div>

          {/* CATEGORY FILTER & SEARCH BAR */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-4 border-b border-slate-700/60">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-800 p-1.5 rounded-lg border border-slate-700">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                  activeCategory === 'all' ? 'bg-blue-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                All ({archiveProjects.length})
              </button>
              <button
                onClick={() => setActiveCategory('featured')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                  activeCategory === 'featured' ? 'bg-blue-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Featured ({flagshipCaseStudies.length})
              </button>
              <button
                onClick={() => setActiveCategory('fullstack')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                  activeCategory === 'fullstack' ? 'bg-blue-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Full-Stack
              </button>
              <button
                onClick={() => setActiveCategory('saas')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                  activeCategory === 'saas' ? 'bg-blue-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                SaaS & Products
              </button>
              <button
                onClick={() => setActiveCategory('ai')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                  activeCategory === 'ai' ? 'bg-blue-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                AI Systems
              </button>
              <button
                onClick={() => setActiveCategory('backend')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                  activeCategory === 'backend' ? 'bg-blue-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Backend & Systems
              </button>
              <button
                onClick={() => setActiveCategory('ml')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                  activeCategory === 'ml' ? 'bg-blue-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                ML & Computer Vision
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs" />
              <input
                type="text"
                placeholder="Search technology or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* VIEW MODE 1: DEFAULT EDITORIAL SHOWCASE (When Category is 'all' and no search term) */}
          {activeCategory === 'all' && !searchTerm && (
            <div className="space-y-16">
              
              {/* FEATURED SPOTLIGHT HEADER */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
                  <FaStar className="text-xs" />
                  <span>Flagship Case Studies</span>
                </div>

                {/* LEAD FEATURED PROJECT CARD (#1 SellerZonee) */}
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
                          Lead SaaS Commerce Platform
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
                          {leadProject.tech.slice(0, 6).map((t, idx) => (
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
                          {leadProject.github && (
                            <a href={leadProject.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-base" title="Source Code">
                              <FaGithub />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SECONDARY FEATURED GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
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
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-xs" title="Live Demo">
                              <FaExternalLinkAlt />
                            </a>
                          )}
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm" title="Source Code">
                              <FaGithub />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ADDITIONAL SYSTEMS & PROTOTYPES */}
              <div className="space-y-8 pt-8 border-t border-slate-700/60">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                      SYSTEM APPLICATIONS & PROTOTYPES
                    </div>
                    <h2 className="font-sans text-2xl font-bold text-white tracking-tight">
                      Supporting Software Projects
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {additionalProjects.length} Systems
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {additionalProjects.map((project) => (
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
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-xs" title="Live Demo">
                              <FaExternalLinkAlt />
                            </a>
                          )}
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm" title="Source Code">
                              <FaGithub />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* VIEW MODE 2: FILTERED RESULTS GRID (When Category is selected or searching) */}
          {(activeCategory !== 'all' || searchTerm) && (
            <div className="space-y-6">
              <div className="text-xs font-mono text-slate-400 uppercase">
                Showing {filteredProjects.length} matching project{filteredProjects.length === 1 ? '' : 's'}
              </div>

              {filteredProjects.length === 0 ? (
                <div className="surface-card p-12 text-center space-y-3">
                  <p className="text-slate-300 text-sm">No projects found matching your search criteria.</p>
                  <button
                    onClick={() => { setActiveCategory('all'); setSearchTerm(''); }}
                    className="text-xs font-mono text-blue-400 hover:underline"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-xs" title="Live Demo">
                              <FaExternalLinkAlt />
                            </a>
                          )}
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm" title="Source Code">
                              <FaGithub />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
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
