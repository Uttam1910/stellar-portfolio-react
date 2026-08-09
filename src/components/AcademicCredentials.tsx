import React from 'react';
import { academicEducation, verifiedCertifications } from '../data/portfolioData';
import { FaGraduationCap, FaAward, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

export const AcademicCredentials: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 bg-slate-900 border-b border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">
            Education & Verified Qualifications
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic Background & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Formal Computer Science degree with AI/ML emphasis alongside verified technical certifications.
          </p>
        </div>

        {/* Academic Degree Highlight Card */}
        <div className="surface-card p-6 sm:p-10 mb-12 border-l-4 border-l-blue-500">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 text-blue-400 font-mono text-xs font-semibold">
                <FaGraduationCap />
                <span>Academic Degree</span>
              </div>
              
              <h3 className="font-sans text-2xl font-bold text-white tracking-tight">
                {academicEducation.degree}
              </h3>
              
              <p className="text-base font-semibold text-blue-400">
                {academicEducation.institution}
              </p>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {academicEducation.details}
              </p>
              
              <div className="text-xs font-mono text-slate-400">
                {academicEducation.period}
              </div>
            </div>

            {/* CGPA Box */}
            <div className="p-6 rounded-lg bg-slate-900 border border-slate-700 text-center min-w-[200px] flex-shrink-0">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Academic CGPA</div>
              <div className="font-sans text-4xl font-bold text-white blue-gradient-text mt-1">{academicEducation.achievement.split(' ')[1]}</div>
              <div className="text-xs text-slate-300 font-medium mt-1">First Class with Distinction</div>
            </div>
          </div>
        </div>

        {/* Verified Technical Certifications Grid */}
        <div className="space-y-6">
          <h3 className="font-sans text-xl font-bold text-white flex items-center gap-2">
            <FaAward className="text-blue-400" />
            <span>Verified Certifications & Recommendation Letters</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verifiedCertifications.map((cert, idx) => (
              <div key={idx} className="surface-card p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="px-2.5 py-0.5 rounded bg-slate-900 text-blue-400 font-mono text-[10px] uppercase font-semibold">
                    {cert.category}
                  </span>

                  <h4 className="font-sans text-sm font-bold text-white leading-snug">{cert.title}</h4>
                  <p className="text-xs text-slate-400 font-semibold">{cert.issuer}</p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">{cert.date}</span>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaFilePdf />
                    <span>View PDF</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
