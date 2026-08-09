import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { academicEducation, allAcademicEducation, verifiedCertifications } from '../data/portfolioData';
import { FaGraduationCap, FaAward, FaFilePdf, FaExternalLinkAlt, FaCheckCircle, FaSchool, FaBook } from 'react-icons/fa';
import { SEOHead } from '../components/SEOHead';

export const EducationPage: React.FC = () => {
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
        "name": "Education",
        "item": "https://www.uttamthapa.com/education"
      }
    ]
  };

  const getEduIcon = (type?: string) => {
    switch (type) {
      case 'degree': return <FaGraduationCap className="text-blue-400" />;
      case 'hsc': return <FaBook className="text-blue-400" />;
      case 'ssc': return <FaSchool className="text-blue-400" />;
      default: return <FaGraduationCap className="text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <SEOHead
        title="Academic Credentials, HSC & SSC History | Uttam Thapa"
        description="Formal B.Tech Computer Science & Engineering degree (CGPA 9.56 Distinction), HSC 12th Science (91%), SSC 10th (87%), and verified technical certifications of Uttam Thapa."
        canonicalUrl="https://www.uttamthapa.com/education"
        jsonLd={breadcrumbJsonLd}
      />
      <Header />

      <main className="flex-1 pt-8 sm:pt-10 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Page Header */}
          <div className="space-y-3 max-w-3xl">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              Education & Verified Qualifications
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Academic Credentials & History
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Complete academic foundation spanning Computer Science & Engineering B.Tech degree, Higher Secondary School (HSC Science), Secondary School (SSC), and verified technical certifications.
            </p>
          </div>

          {/* 1. PRIMARY COLLEGE DEGREE SPOTLIGHT CARD */}
          <div className="surface-card p-6 sm:p-10 border-l-4 border-l-blue-500 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 text-blue-400 font-mono text-xs font-semibold">
                  <FaGraduationCap />
                  <span>{academicEducation.badge || "Bachelor of Technology Degree"}</span>
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

                {academicEducation.highlights && (
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Degree Highlights & Core Specialization
                    </div>
                    <ul className="grid grid-cols-1 gap-2">
                      {academicEducation.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <FaCheckCircle className="text-blue-400 text-xs mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="text-xs font-mono text-slate-400 pt-2">
                  {academicEducation.period}
                </div>
              </div>

              {/* CGPA Score Box */}
              <div className="p-6 rounded-lg bg-slate-900 border border-slate-700 text-center min-w-[240px] flex-shrink-0">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Academic CGPA</div>
                <div className="font-sans text-4xl font-bold text-white blue-gradient-text mt-1">9.56</div>
                <div className="text-xs text-slate-300 font-medium mt-1">First Class with Distinction</div>
                <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  Mumbai University Honors
                </div>
              </div>
            </div>
          </div>

          {/* 2. COMPLETE ACADEMIC JOURNEY (HSC & SSC) */}
          <div className="space-y-6 pt-6 border-t border-slate-700/60">
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">
                ACADEMIC TRAJECTORY
              </div>
              <h2 className="font-sans text-2xl font-bold text-white tracking-tight">
                High School & Secondary Education
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allAcademicEducation.filter(edu => edu.type !== 'degree').map((edu, idx) => (
                <div key={idx} className="surface-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-blue-400 font-mono text-[11px] font-semibold">
                        {getEduIcon(edu.type)}
                        <span>{edu.badge}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                    </div>

                    <div>
                      <h3 className="font-sans text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-blue-400 mt-1">{edu.institution}</p>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{edu.details}</p>

                    {edu.highlights && (
                      <ul className="space-y-1.5 pt-2">
                        {edu.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-blue-400 font-bold">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">{edu.scoreLabel || "Score"}</span>
                    <span className="font-sans text-xl font-bold text-white blue-gradient-text">{edu.score || edu.achievement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. VERIFIED CERTIFICATES SECTION */}
          <div className="space-y-6 pt-6 border-t border-slate-700/60">
            <h2 className="font-sans text-2xl font-bold text-white flex items-center gap-2">
              <FaAward className="text-blue-400" />
              <span>Verified Technical Certifications & Letter of Recommendation</span>
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
