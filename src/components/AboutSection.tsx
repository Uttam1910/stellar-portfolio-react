import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-900 border-b border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl space-y-8">
          
          <div className="space-y-3">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              Engineering Background & Principles
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight">
              About Uttam Thapa
            </h2>
          </div>

          <div className="surface-card p-6 sm:p-10 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Full-Stack Software Engineer currently working at <strong className="text-white font-semibold">Growve</strong>. My technical work spans full-stack web applications, backend API services, relational multi-tenant database schemas, webhook integrations, asynchronous background job queues, and AI application features.
            </p>

            <p>
              Holding a B.Tech in Computer Science & Engineering with an AI/ML specialization (<strong className="text-blue-400 font-semibold">9.56 CGPA</strong>, First Class with Distinction from Mumbai University RGIT), I combine strong analytical fundamentals with practical software implementation.
            </p>

            <p>
              I prioritize clean system architecture, type-safe code contracts, reliable API performance, explicit schema design, and seamless user experiences across mobile and desktop devices.
            </p>
          </div>

          {/* Key Engineering Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="surface-card p-6 space-y-2">
              <h3 className="font-sans text-base font-bold text-white">Full-Stack & Systems Focus</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Building end-to-end features connecting frontend Next.js/React views with Node.js/Fastify server logic.
              </p>
            </div>

            <div className="surface-card p-6 space-y-2">
              <h3 className="font-sans text-base font-bold text-white">Clean Architecture & Types</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Writing predictable, maintainable TypeScript code with strict schemas, modular components, and explicit data flow.
              </p>
            </div>

            <div className="surface-card p-6 space-y-2">
              <h3 className="font-sans text-base font-bold text-white">Integrations & Reliability</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Connecting third-party APIs (logistics, payments, AI), building webhook processors, and managing background queues cleanly.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
