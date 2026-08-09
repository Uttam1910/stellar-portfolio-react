import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { personalInfo } from '../data/portfolioData';
import { FaGraduationCap, FaBuilding, FaCode, FaEnvelope, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Page Title */}
          <div className="space-y-3 max-w-3xl">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              Engineering Profile & Biography
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-tight">
              About Uttam Thapa
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Full-Stack Software Engineer specializing in scalable web systems, backend services, and intelligent application features.
            </p>
          </div>

          {/* Photo + Biography Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Professional Photo Container */}
            <div className="lg:col-span-5 space-y-4">
              <div className="surface-card p-3 overflow-hidden shadow-2xl">
                <img
                  src="/images/uttam.JPG"
                  alt="Uttam Thapa — Software Engineer"
                  className="w-full h-[420px] object-cover rounded-lg border border-slate-700/80"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/avtar.png';
                  }}
                />
              </div>

              {/* Quick Info Badge Box below photo */}
              <div className="surface-card p-5 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <FaBuilding className="text-blue-400 text-sm flex-shrink-0" />
                  <span>Software Developer @ Growve</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <FaGraduationCap className="text-mint-500 text-sm flex-shrink-0" />
                  <span>B.Tech CS (AI/ML) — 9.56 CGPA</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <FaCode className="text-blue-400 text-sm flex-shrink-0" />
                  <span>Full-Stack & Backend Systems</span>
                </div>
              </div>
            </div>

            {/* Right: Engineering Bio */}
            <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              <div className="surface-card p-6 sm:p-8 space-y-5">
                <h2 className="font-sans text-2xl font-bold text-white tracking-tight">
                  Background & Commercial Focus
                </h2>

                <p>
                  I am a Full-Stack Software Engineer currently working at <strong className="text-white font-semibold">Growve</strong>. My work spans full-stack web applications, REST API backend microservices, relational multi-tenant database schemas, third-party webhook integrations, asynchronous background job queues, and AI-driven features.
                </p>

                <p>
                  Graduating with a B.Tech in Computer Science & Engineering with an AI & Machine Learning specialization (<strong className="text-blue-400 font-semibold">9.56 CGPA</strong>, First Class with Distinction from Mumbai University RGIT), I combine strong computer science fundamentals with practical production software delivery.
                </p>

                <p>
                  At Growve, I contribute to multi-tenant CRM and logistics software operations, implementing Next.js frontends, Fastify/Node.js backend services, PostgreSQL schema isolation patterns, courier partner integrations (Blue Dart Delivery API), and BullMQ/Redis worker pipelines.
                </p>
              </div>

              {/* Direct Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm transition-all"
                >
                  <FaEnvelope className="text-xs" />
                  <span>Get In Touch</span>
                </Link>
                <a
                  href={personalInfo.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  <FaFileDownload className="text-xs text-blue-400" />
                  <span>Download Resume</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 p-3 text-slate-400 hover:text-white transition-colors"
                >
                  <FaGithub className="text-base" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 p-3 text-slate-400 hover:text-white transition-colors"
                >
                  <FaLinkedin className="text-base" />
                </a>
              </div>
            </div>

          </div>

          {/* Core Engineering Principles */}
          <div className="space-y-6 pt-6 border-t border-slate-700/60">
            <h2 className="font-sans text-2xl font-bold text-white tracking-tight">
              Engineering Principles & Mindset
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="surface-card p-6 space-y-3">
                <div className="text-xs font-mono text-blue-400 font-bold uppercase">01 — Architecture</div>
                <h3 className="font-sans text-base font-bold text-white">Full-Stack System Focus</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Building cohesive features connecting client-side user interfaces with server logic, relational schema isolation, and third-party APIs.
                </p>
              </div>

              <div className="surface-card p-6 space-y-3">
                <div className="text-xs font-mono text-blue-400 font-bold uppercase">02 — Precision</div>
                <h3 className="font-sans text-base font-bold text-white">Clean Contracts & Type Safety</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Writing explicit TypeScript interfaces, strict REST payloads, sanitized endpoints, and clear system documentation.
                </p>
              </div>

              <div className="surface-card p-6 space-y-3">
                <div className="text-xs font-mono text-blue-400 font-bold uppercase">03 — Growth</div>
                <h3 className="font-sans text-base font-bold text-white">Production Reliability</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Focusing on asynchronous processing, queue isolation, containerized delivery, and continuous software refinement.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
