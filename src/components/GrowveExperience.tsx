import React from 'react';
import { growveExperience, additionalExperiences } from '../data/portfolioData';
import { FaBuilding, FaCalendarAlt, FaFileAlt, FaCheck } from 'react-icons/fa';

export const GrowveExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-900 border-b border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">
            Commercial Experience
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience & Systems Track Record
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Real commercial engineering contributions at Growve, internship projects, and competitive hackathons.
          </p>
        </div>

        {/* Highlighted Commercial Role: Growve */}
        <div className="surface-card p-6 sm:p-10 mb-12 border-l-4 border-l-blue-500">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 text-blue-400 font-mono text-xs font-semibold mb-2">
                <FaBuilding className="text-xs" />
                <span>Commercial Work — {growveExperience.domain}</span>
              </div>
              <h3 className="font-sans text-2xl font-bold text-white tracking-tight">
                {growveExperience.role}
              </h3>
              <div className="text-base font-semibold text-blue-400 mt-1">
                {growveExperience.company}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
              <FaCalendarAlt className="text-blue-400 text-xs" />
              <span>{growveExperience.period}</span>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {growveExperience.summary}
          </p>

          {/* Key Deliverables */}
          <div className="space-y-3 mb-8">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Key Technical Deliverables & System Areas
            </div>
            {growveExperience.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <FaCheck className="text-blue-400 text-xs mt-1 flex-shrink-0" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="pt-6 border-t border-slate-700/60">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Technologies & Infrastructure
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

        {/* Additional Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalExperiences.map((exp) => (
            <div key={exp.id} className="surface-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-slate-900 text-blue-400 font-mono text-[11px] uppercase tracking-wider font-semibold">
                    {exp.type}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{exp.period}</span>
                </div>

                <h4 className="font-sans text-base font-bold text-white tracking-tight">{exp.role}</h4>
                <p className="text-xs font-semibold text-blue-400 mt-0.5 mb-3">{exp.company}</p>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{exp.summary}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700/60 mb-3">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-mono text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>

                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    <FaFileAlt className="text-xs" />
                    <span>View Verified Document</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
