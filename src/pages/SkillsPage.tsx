import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { capabilityProofAreas, categorizedTechStack } from '../data/portfolioData';

export const SkillsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Page Header */}
          <div className="space-y-3 max-w-3xl">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              Technical Stack & Capabilities
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Engineering Matrix & Skills
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Comprehensive breakdown of languages, frameworks, databases, systems architecture, and cloud infrastructure tools supported across commercial development and technical projects.
            </p>
          </div>

          {/* 4 Core Capability Areas */}
          <div className="space-y-6">
            <h2 className="font-sans text-2xl font-bold text-white tracking-tight">
              Core Engineering Capability Areas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilityProofAreas.map((area) => (
                <div key={area.code} className="surface-card p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-blue-400 font-bold mb-3">{area.code}</div>
                    <h3 className="font-sans text-base font-bold text-white mb-2">{area.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6">{area.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-700/60">
                    {area.stack.map((item, idx) => (
                      <span key={idx} className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono text-[11px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Domain Tech Matrix Grid */}
          <div className="space-y-6 pt-6 border-t border-slate-700/60">
            <h2 className="font-sans text-2xl font-bold text-white tracking-tight">
              Domain Tech Matrix
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorizedTechStack.map((cat, idx) => (
                <div key={idx} className="surface-card p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider mb-4 pb-2 border-b border-slate-700/60">
                      {cat.domain}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-slate-200 text-xs font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
