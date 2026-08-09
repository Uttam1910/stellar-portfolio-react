import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { flagshipCaseStudies, capabilityProofAreas, growveExperience, academicEducation, categorizedTechStack } from '../data/portfolioData';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBuilding, FaGraduationCap, FaExternalLinkAlt, FaGithub, FaCheck } from 'react-icons/fa';

import { SEOHead } from '../components/SEOHead';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      <SEOHead
        title="Uttam Thapa — Full-Stack Software Engineer & AI Developer"
        description="Uttam Thapa — Full-Stack Software Engineer at Growve specializing in Next.js, React, Node.js, Fastify, TypeScript, PostgreSQL, multi-tenant SaaS, and AI applications."
        canonicalUrl="https://www.uttamthapa.com/"
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* 1. Engineering Snapshot */}
        <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-700/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">
                  Engineering Capabilities
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Core Engineering Capabilities
                </h2>
              </div>
              <Link to="/skills" className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300">
                <span>View Complete Skills Matrix</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilityProofAreas.map((area) => (
                <div key={area.code} className="surface-card p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-blue-400 font-bold mb-3">{area.code}</div>
                    <h3 className="font-sans text-base font-bold text-white mb-2">{area.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">{area.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700/60">
                    {area.stack.map((item, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono text-[11px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Featured Projects Snapshot */}
        <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-700/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">
                  Featured Work
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Flagship Software Projects
                </h2>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300">
                <span>View All Projects</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {flagshipCaseStudies.slice(0, 4).map((project) => (
                <div key={project.slug} className="surface-card overflow-hidden flex flex-col justify-between group">
                  <div>
                    <div className="relative h-48 overflow-hidden bg-slate-800 border-b border-slate-700/60">
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
                      <h3 className="font-sans text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      <p className="text-xs font-mono text-blue-400">{project.oneLiner}</p>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 border-t border-slate-700/40 mt-4 flex items-center justify-between">
                    <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300">
                      <span>View Technical Case Study</span>
                      <FaArrowRight className="text-[10px]" />
                    </Link>
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-xs">
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
        </section>

        {/* 3. Experience Snapshot */}
        <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-700/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">
                  Commercial Experience
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Commercial Work at Growve
                </h2>
              </div>
              <Link to="/experience" className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300">
                <span>View Detailed Work Record</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>

            <div className="surface-card p-6 sm:p-8 border-l-4 border-l-blue-500">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 text-blue-400 font-mono text-xs font-semibold mb-2">
                    <FaBuilding />
                    <span>Commercial Work — {growveExperience.domain}</span>
                  </div>
                  <h3 className="font-sans text-xl font-bold text-white">{growveExperience.role}</h3>
                  <div className="text-sm font-semibold text-blue-400 mt-0.5">{growveExperience.company}</div>
                </div>
                <span className="px-3 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
                  {growveExperience.period}
                </span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">{growveExperience.summary}</p>
              <div className="space-y-2 mb-6">
                {growveExperience.highlights.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <FaCheck className="text-blue-400 text-xs mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/experience" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300">
                <span>Read Full Growve Case & Technical Breakdown →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Technical Stack Snapshot */}
        <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-700/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">
                  Technical Stack
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Technologies & Frameworks
                </h2>
              </div>
              <Link to="/skills" className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300">
                <span>View Full Skill Breakdown</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categorizedTechStack.map((cat, idx) => (
                <div key={idx} className="surface-card p-4 space-y-3">
                  <div className="text-[11px] font-mono text-blue-400 font-bold uppercase pb-1 border-b border-slate-700/60">
                    {cat.domain}
                  </div>
                  <div className="space-y-1">
                    {cat.skills.slice(0, 3).map((skill, sIdx) => (
                      <div key={sIdx} className="text-slate-300 text-xs font-mono">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Education Snapshot */}
        <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-700/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">
                  Academic Background
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Degree & Verified Certifications
                </h2>
              </div>
              <Link to="/education" className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300">
                <span>View Verified Certificates</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>

            <div className="surface-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-l-4 border-l-blue-500">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs">
                  <FaGraduationCap />
                  <span>B.Tech in Computer Science & Engineering (AI/ML)</span>
                </div>
                <h3 className="font-sans text-lg font-bold text-white">{academicEducation.institution}</h3>
                <p className="text-slate-300 text-xs">{academicEducation.details}</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-700 text-center min-w-[180px]">
                <div className="text-[10px] font-mono text-slate-400 uppercase">CGPA Score</div>
                <div className="font-sans text-3xl font-bold text-white blue-gradient-text">9.56</div>
                <div className="text-[11px] text-slate-300 font-medium">First Class Distinction</div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Final Call to Action */}
        <section className="py-16 sm:py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white">
              Interested in collaborating or discussing engineering roles?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              I am open for Full-Stack Engineering, Backend, and AI software roles. Let's start a direct technical discussion.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm transition-all transform hover:scale-[1.02]"
              >
                <span>Initiate Recruiter Outreach</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
