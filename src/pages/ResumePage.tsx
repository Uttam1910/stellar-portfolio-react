import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { personalInfo } from '../data/portfolioData';
import { FaFileDownload, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { SEOHead } from '../components/SEOHead';

export const ResumePage: React.FC = () => {
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
        "name": "Resume",
        "item": "https://www.uttamthapa.com/resume"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <SEOHead
        title="Uttam Thapa — Software Engineer Resume & Credentials"
        description="Download and view Uttam Thapa's software engineering resume, highlighting commercial developer experience at Growve, full-stack tech stack, and flagship projects."
        canonicalUrl="https://www.uttamthapa.com/resume"
        jsonLd={breadcrumbJsonLd}
      />
      <Header />

      <main className="flex-1 pt-8 sm:pt-10 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Back Navigation */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              <FaArrowLeft />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-700/80">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                Curriculum Vitae
              </div>
              <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Software Engineering Resume
              </h1>
              <p className="text-slate-400 text-sm sm:text-base">
                Uttam Thapa — Software Developer at Growve, B.Tech CS (AI/ML) 9.56 CGPA.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm transition-all transform hover:scale-[1.02]"
              >
                <FaFileDownload className="text-xs" />
                <span>Download Resume PDF</span>
              </a>
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <span>Open PDF in New Tab</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>

          {/* Embedded PDF Container */}
          <div className="surface-card p-4 sm:p-6 overflow-hidden shadow-2xl">
            <iframe
              src={`${personalInfo.resumePdf}#toolbar=0&navpanes=0`}
              title="Uttam Thapa Resume PDF"
              className="w-full h-[750px] rounded border border-slate-700"
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
