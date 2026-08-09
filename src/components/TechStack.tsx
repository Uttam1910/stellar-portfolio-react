import React from 'react';
import { categorizedTechStack } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 sm:py-28 bg-slate-900 border-b border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">
            Technical Stack
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Languages, Frameworks & Systems Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Supported technologies and tools utilized across commercial software development at Growve, full-stack web systems, and project deployments.
          </p>
        </div>

        {/* 6 Category Grid */}
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
    </section>
  );
};
