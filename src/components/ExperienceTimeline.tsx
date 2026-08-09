import React from 'react';
import { growveExperience, additionalExperiences } from '../data/portfolioData';
import { FaBriefcase, FaCalendarAlt, FaFileAlt, FaCheck, FaTrophy } from 'react-icons/fa';

export const ExperienceTimeline: React.FC = () => {
  const commercialExps = [growveExperience, ...additionalExperiences.filter(e => e.type === 'internship')];
  const hackathons = additionalExperiences.filter(e => e.type === 'hackathon');

  return (
    <section id="experience" className="py-24 relative bg-slate-900 border-b border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
            <span>Commercial Experience</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience & Track Record
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Software development contributions at Growve, commercial internships, and technical hackathons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Experience Column */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="font-sans text-xl font-bold text-white flex items-center gap-2.5">
              <FaBriefcase className="text-blue-400" />
              <span>Professional Software Roles</span>
            </h3>

            <div className="space-y-6">
              {commercialExps.map((exp) => (
                <div
                  key={exp.id}
                  className="surface-card p-6 sm:p-8 space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-sans text-xl font-bold text-white">
                        {exp.role}
                      </h4>
                      <div className="text-sm font-semibold text-blue-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
                      <FaCalendarAlt className="text-blue-400 text-xs" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="space-y-2">
                    {exp.highlights.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <FaCheck className="text-blue-400 text-xs mt-1 flex-shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-700/60">
                    {exp.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 text-xs font-mono border border-slate-700"
                      >
                        {tech}
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
                        <span>View Document</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons Column */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-sans text-xl font-bold text-white flex items-center gap-2.5">
              <FaTrophy className="text-blue-400" />
              <span>Hackathons</span>
            </h3>

            <div className="space-y-6">
              {hackathons.map((h) => (
                <div
                  key={h.id}
                  className="surface-card p-6 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-mono font-bold uppercase">
                      Hackathon
                    </span>
                    <span className="text-xs font-mono text-slate-400">{h.period}</span>
                  </div>

                  <div>
                    <h4 className="font-sans text-lg font-bold text-white">{h.role}</h4>
                    <p className="text-xs text-blue-400 mt-0.5">{h.company}</p>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {h.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {h.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  {h.certificate && (
                    <a
                      href={h.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors pt-2 block"
                    >
                      <FaFileAlt />
                      <span>View Achievement Certificate</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
