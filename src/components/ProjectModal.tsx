import React from 'react';
import { ProjectCaseStudy } from '../data/portfolioData';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaCheckCircle, FaLayerGroup, FaCogs } from 'react-icons/fa';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-900/80 backdrop-blur-xl overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-dark-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/80 bg-dark-900/50">
          <div>
            <div className="inline-block px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
              Engineering Case Study
            </div>
            <h3 className="font-space text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-slate-400">{project.oneLiner}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-dark-700 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close Case Study Modal"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Banner / Image */}
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-700/80 bg-dark-900">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/avtar.png';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
          </div>

          {/* Core Overview & Tech Badges */}
          <div className="space-y-4">
            <h4 className="font-space text-lg font-bold text-white flex items-center gap-2">
              <FaLayerGroup className="text-cyan-400" />
              <span>Project Overview</span>
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-dark-900 border border-slate-700 text-cyan-400 text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Breakdown */}
          {project.architectureNodes && project.architectureNodes.length > 0 && (
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-700 space-y-3">
              <h4 className="font-sans text-sm font-bold text-blue-400 flex items-center gap-2 font-mono uppercase tracking-wider">
                <FaCogs />
                <span>System Architecture & Pipeline</span>
              </h4>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-200">
                {project.architectureNodes.map((node, nIdx) => (
                  <span key={nIdx} className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700">
                    {node.name} ({node.type})
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technical Highlights & Implementation Tradeoffs */}
          <div className="space-y-3">
            <h4 className="font-sans text-lg font-bold text-white">Engineering Deliverables & Highlights</h4>
            <div className="space-y-2.5">
              {project.keyFeatures.map((h, hIdx) => (
                <div key={hIdx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <FaCheckCircle className="text-blue-400 text-sm mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-xs sm:text-sm leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-6 border-t border-slate-700 bg-slate-900 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm transition-all"
              >
                <span>Launch Live Application</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <FaGithub className="text-sm" />
              <span>Inspect Source Code</span>
            </a>
          </div>
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
