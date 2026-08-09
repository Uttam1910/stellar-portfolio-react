import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { growveExperience, additionalExperiences } from '../data/portfolioData';
import { FaBuilding, FaCalendarAlt, FaFileAlt, FaCheck, FaBriefcase, FaTrophy } from 'react-icons/fa';

import { SEOHead } from '../components/SEOHead';

export const ExperiencePage: React.FC = () => {
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
        "name": "Experience",
        "item": "https://www.uttamthapa.com/experience"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <SEOHead
        title="Uttam Thapa — Software Engineering Experience & Track Record"
        description="Commercial software engineering track record of Uttam Thapa at Growve, working with Next.js, Fastify, Node.js, PostgreSQL multi-tenant architecture, BullMQ, Redis, webhooks, and Azure."
        canonicalUrl="https://www.uttamthapa.com/experience"
        jsonLd={breadcrumbJsonLd}
      />
      <Header />

      <main className="flex-1 pt-8 sm:pt-10 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Page Header */}
          <div className="space-y-3 max-w-3xl">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              Commercial Experience & Systems Track Record
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Work Experience & Software Delivery
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Detailed technical account of commercial software development roles at Growve, software engineering internships, and competitive hackathons.
            </p>
          </div>

          {/* Primary Focus: Growve Commercial Work */}
          <div className="surface-card p-6 sm:p-10 border-l-4 border-l-blue-500 space-y-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 text-blue-400 font-mono text-xs font-semibold mb-2">
                  <FaBuilding className="text-xs" />
                  <span>Commercial Role — {growveExperience.domain}</span>
                </div>
                <h2 className="font-sans text-3xl font-bold text-white tracking-tight">
                  {growveExperience.role}
                </h2>
                <div className="text-base font-semibold text-blue-400 mt-1">
                  {growveExperience.company}
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
                <FaCalendarAlt className="text-blue-400 text-xs" />
                <span>{growveExperience.period}</span>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              {growveExperience.summary}
            </p>

            {/* Technical Highlights */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Engineering Deliverables & System Work
              </div>
              <div className="space-y-3">
                {growveExperience.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <FaCheck className="text-blue-400 text-xs mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="pt-6 border-t border-slate-700/60">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Supported Technologies & Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {growveExperience.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded bg-slate-900 border border-slate-700 text-slate-200 font-mono text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Internships & Hackathons Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
            
            {/* Internships */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-sans text-2xl font-bold text-white flex items-center gap-2.5">
                <FaBriefcase className="text-blue-400" />
                <span>Software Internships</span>
              </h3>

              <div className="space-y-6">
                {additionalExperiences.filter(e => e.type === 'internship').map((exp) => (
                  <div key={exp.id} className="surface-card p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded bg-slate-900 text-blue-400 font-mono text-xs uppercase font-semibold">
                        Internship
                      </span>
                      <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                    </div>

                    <div>
                      <h4 className="font-sans text-lg font-bold text-white">{exp.role}</h4>
                      <div className="text-xs font-semibold text-blue-400 mt-0.5">{exp.company}</div>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{exp.summary}</p>

                    <div className="space-y-2">
                      {exp.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <FaCheck className="text-blue-400 text-xs mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700/60">
                      {exp.tech.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-mono text-[10px]">
                          {t}
                        </span>
                      ))}
                    </div>

                    {exp.certificate && (
                      <div className="pt-2 flex items-center justify-end">
                        <a
                          href={exp.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <FaFileAlt />
                          <span>View Verified Letter / Document</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Hackathons */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-sans text-2xl font-bold text-white flex items-center gap-2.5">
                <FaTrophy className="text-blue-400" />
                <span>Hackathons & Build Events</span>
              </h3>

              <div className="space-y-6">
                {additionalExperiences.filter(e => e.type === 'hackathon').map((h) => (
                  <div key={h.id} className="surface-card p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded bg-slate-900 text-blue-400 font-mono text-xs uppercase font-semibold">
                        24-Hour Hackathon
                      </span>
                      <span className="text-xs font-mono text-slate-400">{h.period}</span>
                    </div>

                    <div>
                      <h4 className="font-sans text-base font-bold text-white">{h.role}</h4>
                      <div className="text-xs font-semibold text-blue-400 mt-0.5">{h.company}</div>
                    </div>

                    <p className="text-slate-300 text-xs leading-relaxed">{h.summary}</p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {h.tech.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-mono text-[10px]">
                          {t}
                        </span>
                      ))}
                    </div>

                    {h.certificate && (
                      <a
                        href={h.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors pt-2"
                      >
                        <FaFileAlt />
                        <span>View Certificate</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
