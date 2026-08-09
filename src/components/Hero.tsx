import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { JsonProfilePanel } from './JsonProfilePanel';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaFileDownload, FaGithub, FaBuilding, FaGraduationCap } from 'react-icons/fa';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-slate-900 border-b border-slate-700/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-mint-500" />
              <span>Available for Full-Stack & AI Engineering roles</span>
            </div>

            {/* Headline */}
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              {personalInfo.heroHeadline}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              {personalInfo.heroCopy}
            </p>

            {/* Credibility Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300">
                <FaBuilding className="text-blue-400" />
                <span>Software Developer @ Growve</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300">
                <FaGraduationCap className="text-mint-500" />
                <span>B.Tech CS (AI/ML) — 9.56 CGPA</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm transition-all transform hover:scale-[1.02]"
              >
                <span>Explore Work</span>
                <FaArrowRight className="text-xs" />
              </Link>
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <FaFileDownload className="text-xs text-blue-400" />
                <span>Download Resume</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-3.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                <FaGithub className="text-sm" />
                <span className="font-mono text-xs">/Uttam1910</span>
              </a>
            </div>

          </div>

          {/* Right Column: JSON Engineering Profile Panel */}
          <div className="lg:col-span-5">
            <JsonProfilePanel />
          </div>

        </div>
      </div>
    </section>
  );
};
