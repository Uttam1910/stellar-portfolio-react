import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { flagshipCaseStudies, archiveProjects } from '../data/portfolioData';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCheck, FaServer, FaDatabase, FaLaptopCode, FaCogs, FaShieldAlt, FaRocket } from 'react-icons/fa';

import { SEOHead } from '../components/SEOHead';

export const ProjectCaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const allProjects = [...flagshipCaseStudies, ...archiveProjects];
  const project = allProjects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
        <SEOHead
          title="Case Study Not Found | Uttam Thapa"
          description="The requested engineering case study route does not exist."
          canonicalUrl="https://www.uttamthapa.com/projects"
        />
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-32 text-center space-y-6">
          <h1 className="text-3xl font-bold">Case Study Not Found</h1>
          <p className="text-slate-400 text-sm">The requested engineering case study route does not exist.</p>
          <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold text-xs">
            <FaArrowLeft />
            <span>Return to Project Archive</span>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const getSeoTitle = (slug: string, title: string) => {
    switch (slug) {
      case 'sellerzonee': return "SellerZonee — Multi-Tenant Commerce SaaS | Uttam Thapa";
      case 'velvet-loop': return "Velvet Loop — Full-Stack E-Commerce Platform | Uttam Thapa";
      case 'lifeos': return "LifeOS — AI Productivity & Semantic Search Workspace | Uttam Thapa";
      case 'ai-travel-planner': return "AI Travel Planner — AI Itinerary Generation Application | Uttam Thapa";
      case 'golden-leaf-knots': return "Golden Leaf Knots — Artisanal Product Showcase Platform | Uttam Thapa";
      case 'edumaster-lms': return "EduMaster LMS — Learning Management System MERN Architecture | Uttam Thapa";
      case 'realtime-chat-platform': return "Real-Time Chat Platform — WebSocket Messaging System | Uttam Thapa";
      case 'employee-management': return "Employee Management System — Internal HR Dashboard | Uttam Thapa";
      case 'backend-services': return "Backend Services — Node.js REST API Architecture | Uttam Thapa";
      case 'image-py': return "ImagePy — Python Computer Vision Toolkit | Uttam Thapa";
      case 'airline-demand-prediction': return "Airline Demand Prediction — Machine Learning Forecasting | Uttam Thapa";
      default: return `${title} — Engineering Case Study | Uttam Thapa`;
    }
  };

  const seoTitle = getSeoTitle(project.slug, project.title);
  const canonicalUrl = `https://www.uttamthapa.com/projects/${project.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${canonicalUrl}#article`,
    "url": canonicalUrl,
    "headline": seoTitle,
    "description": project.description,
    "image": project.thumbnail.startsWith('http') ? project.thumbnail : `https://www.uttamthapa.com${project.thumbnail}`,
    "author": {
      "@id": "https://www.uttamthapa.com/#person"
    },
    "publisher": {
      "@id": "https://www.uttamthapa.com/#website"
    },
    "mainEntityOfPage": canonicalUrl
  };

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": canonicalUrl
      }
    ]
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'client': return <FaLaptopCode className="text-blue-400 text-lg" />;
      case 'api': return <FaServer className="text-blue-400 text-lg" />;
      case 'logic': return <FaCogs className="text-mint-500 text-lg" />;
      case 'database': return <FaDatabase className="text-blue-400 text-lg" />;
      case 'external': return <FaRocket className="text-mint-500 text-lg" />;
      default: return <FaServer className="text-blue-400 text-lg" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <SEOHead
        title={seoTitle}
        description={project.description}
        canonicalUrl={canonicalUrl}
        ogImage={project.thumbnail}
        ogType="article"
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />
      <Header />

      <main className="flex-1 pt-8 sm:pt-10 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Back Button */}
          <div>
            <Link
              to="/#case-studies"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              <FaArrowLeft />
              <span>Back to Engineering Portfolio</span>
            </Link>
          </div>

          {/* 01 — Overview Header */}
          <div className="space-y-6 border-b border-slate-700/80 pb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider">
              {project.category}
            </div>
            
            <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-tight">
              {project.title}
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              {project.oneLiner}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm transition-all"
                >
                  <span>Launch Live Demo</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  <FaGithub className="text-sm" />
                  <span>Inspect Source Code</span>
                </a>
              )}
            </div>
          </div>

          {/* Banner / Image */}
          <div className="surface-card overflow-hidden p-2">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-72 sm:h-96 object-cover rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/avtar.png';
              }}
            />
          </div>

          {/* 02 — Problem */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">02 — Problem Statement</div>
            <h2 className="font-sans text-2xl font-bold text-white">The Engineering Challenge</h2>
            <div className="surface-card p-6 text-slate-300 text-sm leading-relaxed">
              {project.problem}
            </div>
          </div>

          {/* 03 — Solution */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">03 — Implemented Solution</div>
            <h2 className="font-sans text-2xl font-bold text-white">The Software Solution</h2>
            <div className="surface-card p-6 text-slate-300 text-sm leading-relaxed">
              {project.solution}
            </div>
          </div>

          {/* 04 — Key Features */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">04 — Core Deliverables</div>
            <h2 className="font-sans text-2xl font-bold text-white">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="surface-card p-4 flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <FaCheck className="text-blue-400 text-xs mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 05 — Visual Architecture Diagram */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">05 — System Architecture</div>
            <h2 className="font-sans text-2xl font-bold text-white">Visual System Pipeline</h2>
            <div className="surface-card p-6 sm:p-8 space-y-6">
              <p className="text-slate-400 text-xs font-mono">Component Flow & Pipeline Hierarchy:</p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center">
                {project.architectureNodes.map((node, nIdx) => (
                  <React.Fragment key={nIdx}>
                    <div className="p-4 rounded-lg bg-slate-900 border border-slate-700 flex flex-col items-center space-y-2">
                      {getNodeIcon(node.type)}
                      <span className="font-mono text-xs text-white font-medium">{node.name}</span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">{node.type}</span>
                    </div>
                    {nIdx < project.architectureNodes.length - 1 && (
                      <div className="hidden md:block text-slate-500 font-mono text-sm">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* 06 — Technical Decisions */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">06 — Technical Trade-offs</div>
            <h2 className="font-sans text-2xl font-bold text-white">Technology Decisions</h2>
            <div className="space-y-4">
              {project.technicalDecisions.map((dec, dIdx) => (
                <div key={dIdx} className="surface-card p-6 space-y-2">
                  <h3 className="font-sans text-base font-bold text-blue-400">{dec.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{dec.reasoning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 07 & 08 — Security & Integrations */}
          {(project.security || project.integrations) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.security && (
                <div className="surface-card p-6 space-y-3">
                  <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase font-bold">
                    <FaShieldAlt />
                    <span>07 — Security Implementation</span>
                  </div>
                  <div className="space-y-2">
                    {project.security.map((sec, sIdx) => (
                      <div key={sIdx} className="text-slate-300 text-xs flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{sec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.integrations && (
                <div className="surface-card p-6 space-y-3">
                  <div className="flex items-center gap-2 text-mint-500 font-mono text-xs uppercase font-bold">
                    <FaRocket />
                    <span>08 — Third-Party Integrations</span>
                  </div>
                  <div className="space-y-2">
                    {project.integrations.map((integ, iIdx) => (
                      <div key={iIdx} className="text-slate-300 text-xs flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-mint-500" />
                        <span>{integ}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 09 — Deployment & 10 — Current State */}
          <div className="surface-card p-6 sm:p-8 space-y-4 border-l-4 border-l-blue-500">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">09 & 10 — Deployment & Current Status</div>
            <h3 className="font-sans text-xl font-bold text-white">Infrastructure & Production State</h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              <strong className="text-white font-mono">Deployment Setup:</strong> {project.deployment}
            </p>
            <p className="text-slate-300 text-xs sm:text-sm">
              <strong className="text-white font-mono">Current Status:</strong> {project.currentState}
            </p>
          </div>

          {/* 11 — External Links */}
          <div className="pt-8 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm transition-all"
                >
                  <span>Launch Live Site</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <FaGithub className="text-sm" />
                <span>View GitHub Repository</span>
              </a>
            </div>

            <Link
              to="/projects"
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Browse Full Project Archive →
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
