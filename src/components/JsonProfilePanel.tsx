import React from 'react';

export const JsonProfilePanel: React.FC = () => {
  return (
    <div className="surface-card overflow-hidden shadow-2xl border border-slate-700 font-mono text-xs sm:text-sm">
      {/* File Header Tab */}
      <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-700/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-slate-400 text-xs font-mono ml-2">engineering_profile.json</span>
        </div>
        <span className="text-[11px] text-slate-500 font-mono">JSON</span>
      </div>

      {/* JSON Content Body with Syntax Colors */}
      <div className="p-5 bg-slate-900/90 text-slate-200 leading-relaxed overflow-x-auto">
        <div>
          <span className="text-slate-500">1  </span>
          <span className="text-slate-400">{'{'}</span>
        </div>

        <div>
          <span className="text-slate-500">2    </span>
          <span className="text-blue-400">"name"</span>
          <span className="text-slate-400">: </span>
          <span className="text-emerald-400">"Uttam Thapa"</span>
          <span className="text-slate-400">,</span>
        </div>

        <div>
          <span className="text-slate-500">3    </span>
          <span className="text-blue-400">"role"</span>
          <span className="text-slate-400">: </span>
          <span className="text-emerald-400">"Full-Stack Software Engineer"</span>
          <span className="text-slate-400">,</span>
        </div>

        <div>
          <span className="text-slate-500">4    </span>
          <span className="text-blue-400">"focus"</span>
          <span className="text-slate-400">: [</span>
        </div>

        <div>
          <span className="text-slate-500">5      </span>
          <span className="text-emerald-400">"Web Systems"</span>
          <span className="text-slate-400">, </span>
          <span className="text-emerald-400">"Backend Engineering"</span>
          <span className="text-slate-400">, </span>
          <span className="text-emerald-400">"AI Applications"</span>
        </div>

        <div>
          <span className="text-slate-500">6    </span>
          <span className="text-slate-400">],</span>
        </div>

        <div>
          <span className="text-slate-500">7    </span>
          <span className="text-blue-400">"experience"</span>
          <span className="text-slate-400">: {'{'}</span>
        </div>

        <div>
          <span className="text-slate-500">8      </span>
          <span className="text-blue-400">"company"</span>
          <span className="text-slate-400">: </span>
          <span className="text-emerald-400">"Growve"</span>
          <span className="text-slate-400">,</span>
        </div>

        <div>
          <span className="text-slate-500">9      </span>
          <span className="text-blue-400">"domain"</span>
          <span className="text-slate-400">: [</span>
          <span className="text-emerald-400">"CRM"</span>
          <span className="text-slate-400">, </span>
          <span className="text-emerald-400">"Logistics"</span>
          <span className="text-slate-400">]</span>
        </div>

        <div>
          <span className="text-slate-500">10   </span>
          <span className="text-slate-400">{'}'},</span>
        </div>

        <div>
          <span className="text-slate-500">11   </span>
          <span className="text-blue-400">"stack"</span>
          <span className="text-slate-400">: {'{'}</span>
        </div>

        <div>
          <span className="text-slate-500">12     </span>
          <span className="text-blue-400">"frontend"</span>
          <span className="text-slate-400">: [</span>
          <span className="text-emerald-400">"Next.js"</span>
          <span className="text-slate-400">, </span>
          <span className="text-emerald-400">"React"</span>
          <span className="text-slate-400">],</span>
        </div>

        <div>
          <span className="text-slate-500">13     </span>
          <span className="text-blue-400">"backend"</span>
          <span className="text-slate-400">: [</span>
          <span className="text-emerald-400">"Node.js"</span>
          <span className="text-slate-400">, </span>
          <span className="text-emerald-400">"Fastify"</span>
          <span className="text-slate-400">],</span>
        </div>

        <div>
          <span className="text-slate-500">14     </span>
          <span className="text-blue-400">"database"</span>
          <span className="text-slate-400">: [</span>
          <span className="text-emerald-400">"PostgreSQL"</span>
          <span className="text-slate-400">],</span>
        </div>

        <div>
          <span className="text-slate-500">15     </span>
          <span className="text-blue-400">"systems"</span>
          <span className="text-slate-400">: [</span>
          <span className="text-emerald-400">"BullMQ"</span>
          <span className="text-slate-400">, </span>
          <span className="text-emerald-400">"Redis"</span>
          <span className="text-slate-400">, </span>
          <span className="text-emerald-400">"Webhooks"</span>
          <span className="text-slate-400">],</span>
        </div>

        <div>
          <span className="text-slate-500">16     </span>
          <span className="text-blue-400">"cloud"</span>
          <span className="text-slate-400">: [</span>
          <span className="text-emerald-400">"Azure"</span>
          <span className="text-slate-400">, </span>
          <span className="text-emerald-400">"DigitalOcean"</span>
          <span className="text-slate-400">]</span>
        </div>

        <div>
          <span className="text-slate-500">17   </span>
          <span className="text-slate-400">{'}'},</span>
        </div>

        <div>
          <span className="text-slate-500">18   </span>
          <span className="text-blue-400">"education"</span>
          <span className="text-slate-400">: {'{'}</span>
        </div>

        <div>
          <span className="text-slate-500">19     </span>
          <span className="text-blue-400">"degree"</span>
          <span className="text-slate-400">: </span>
          <span className="text-emerald-400">"B.Tech CS (AI/ML)"</span>
          <span className="text-slate-400">,</span>
        </div>

        <div>
          <span className="text-slate-500">20     </span>
          <span className="text-blue-400">"cgpa"</span>
          <span className="text-slate-400">: </span>
          <span className="text-amber-400">9.56</span>
        </div>

        <div>
          <span className="text-slate-500">21   </span>
          <span className="text-slate-400">{'}'}</span>
        </div>

        <div>
          <span className="text-slate-500">22 </span>
          <span className="text-slate-400">{'}'}</span>
        </div>
      </div>
    </div>
  );
};
