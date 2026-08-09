import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { academicEducation, verifiedCertifications } from '../data/portfolioData';
import { FaGraduationCap, FaAward, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

export const EducationPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 pt-8 sm:pt-10 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Page Header */}
          <div className="space-y-3 max-w-3xl">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              Education & Verified Qualifications
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Academic Credentials & Certifications
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Formal Computer Science & Engineering degree with artificial intelligence specialization alongside verified technical certifications.
            </p>
          </div>

          {/* Academic Degree Spotlight Card */}
          <div className="surface-card p-6 sm:p-10 border-l-4 border-l-blue-500 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 text-blue-400 font-mono text-xs font-semibold">
                  <FaGraduationCap />
                  <span>Bachelor of Technology Degree</span>
                </div>
                
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {academicEducation.degree}
                </h2>
                
                <div className="text-base font-semibold text-blue-400">
                  {academicEducation.institution}
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {academicEducation.details}
                </p>
                
                <div className="text-xs font-mono text-slate-400">
                  {academicEducation.period}
                </div>
              </div>

              {/* CGPA Score Box */}
              <div className="p-6 rounded-lg bg-slate-900 border border-slate-700 text-center min-w-[220px] flex-shrink-0">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Academic CGPA</div>
                <div className="font-sans text-4xl font-bold text-white blue-gradient-text mt-1">9.56</div>
                <div className="text-xs text-slate-300 font-medium mt-1">First Class with Distinction</div>
              </div>
            </div>
          </div>

          {/* Verified Certificates Section */}
          <div className="space-y-6 pt-6 border-t border-slate-700/60">
            <h2 className="font-sans text-2xl font-bold text-white flex items-center gap-2">
              <FaAward className="text-blue-400" />
              <span>Verified Certifications & Recommendation Letters</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {verifiedCertifications.map((cert, idx) => (
                <div key={idx} className="surface-card p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="px-2.5 py-0.5 rounded bg-slate-900 text-blue-400 font-mono text-[10px] uppercase font-semibold">
                      {cert.category}
                    </span>

                    <h3 className="font-sans text-sm font-bold text-white leading-snug">{cert.title}</h3>
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
      </main>

      <Footer />
    </div>
  );
};
