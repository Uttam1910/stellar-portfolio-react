import React from 'react';
import { capabilityProofAreas } from '../data/portfolioData';

export const EngineeringProof: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-b border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">
            Engineering Capabilities
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Engineering across products, systems, and infrastructure.
          </h2>
        </div>

        {/* 4 Capability Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilityProofAreas.map((area) => (
            <div
              key={area.code}
              className="surface-card p-6 flex flex-col justify-between"
            >
              <div>
                {/* Code Identifier */}
                <div className="text-xs font-mono text-blue-400 font-bold mb-4">
                  {area.code}
                </div>

                {/* Title */}
                <h3 className="font-sans text-base font-bold text-white tracking-tight mb-3">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-700/60">
                {area.stack.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded bg-slate-900 border border-slate-700/80 text-slate-300 font-mono text-[11px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
