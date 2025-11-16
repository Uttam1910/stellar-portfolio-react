import React, { useCallback, useMemo, useState } from 'react';

type Skill = { name: string; level: number };
type Category = { title: string; icon: string; skills: Skill[] };

const Skills: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<{ skill: Skill; category: string } | null>(null);

  const skillCategories: Category[] = useMemo(() => [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 88 },
        { name: 'Java', level: 75 },
        { name: 'C++', level: 70 },
      ]
    },
    {
      title: 'Web Development',
      icon: 'fas fa-globe',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'React', level: 92 },
        { name: 'Next.js', level: 86 },
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'Tailwind CSS', level: 93 },
      ]
    },
    {
      title: 'Database Management',
      icon: 'fas fa-database',
      skills: [
        { name: 'MySQL', level: 87 },
        { name: 'MongoDB', level: 85 },
        { name: 'Cloud Databases', level: 78 },
      ]
    },
    {
      title: 'DevOps',
      icon: 'fas fa-server',
      skills: [
        { name: 'Docker', level: 82 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Jenkins', level: 80 },
        { name: 'AWS', level: 80 },
        { name: 'Azure', level: 75 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'VS Code', level: 95 },
        { name: 'Linux', level: 88 },
        { name: 'Postman', level: 90 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: 'fas fa-users',
      skills: [
        { name: 'Team Collaboration', level: 95 },
        { name: 'Problem Solving', level: 92 },
        { name: 'Communication', level: 90 },
        { name: 'Agile Methodologies', level: 85 },
      ]
    }
  ], []);

  const toggleCategory = useCallback((title: string) => {
    setExpandedCategory(prev => {
      // if clicking the already-expanded category, collapse and clear selection
      if (prev === title) {
        setSelectedSkill(null);
        return null;
      }
      return title;
    });
  }, []);

  const onSelectSkill = useCallback((skill: Skill, category: string) => {
    setSelectedSkill({ skill, category });
    // ensure category expanded when selecting
    setExpandedCategory(category);
  }, []);

  const clearSelection = useCallback(() => setSelectedSkill(null), []);

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-delayed"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Main content - centered */}
      <section className="relative z-10 flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="w-full max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <p className="text-teal-400 font-mono text-sm sm:text-base opacity-70">
              <span className="text-gray-500">&lt;</span>skills
              <span className="text-gray-500">/&gt;</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              My <span className="text-teal-400">Skills</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid - Collapsible Cards with selectable skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className={`w-full text-left bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-4 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 group`}
                >
                  <button
                    onClick={() => toggleCategory(category.title)}
                    aria-expanded={expandedCategory === category.title}
                    className="w-full flex items-center justify-between py-2 px-2 rounded-md"
                  >
                    <div className="flex items-center gap-4">
                      <i className={`${category.icon} text-teal-400 text-3xl`} aria-hidden />
                      <h2 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">{category.title}</h2>
                    </div>
                    <span className={`text-teal-400 text-2xl transition-transform duration-300 ${expandedCategory === category.title ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>

                  {/* Expanded content (fixed max height + internal scrolling to avoid layout jumps) */}
                  <div className={`mt-4 overflow-hidden transition-all duration-300 ${expandedCategory === category.title ? 'max-h-[20rem]' : 'max-h-0'}`}>
                    <div className={`${expandedCategory === category.title ? 'max-h-[20rem] overflow-y-auto pr-2' : 'max-h-0'}`} style={{ scrollBehavior: 'smooth' }}>
                      {category.skills.map((skill) => {
                        const isSelected = selectedSkill?.skill.name === skill.name && selectedSkill?.category === category.title;
                        return (
                          <button
                            key={skill.name}
                            onClick={() => onSelectSkill(skill, category.title)}
                            className={`w-full flex items-center justify-between p-3 rounded-md transition-all duration-250 ${isSelected ? 'bg-gradient-to-r from-teal-500/20 to-cyan-500/10 ring-1 ring-teal-400/20 scale-[1.01]' : 'hover:bg-gray-700/50'} focus:outline-none`}
                            aria-pressed={isSelected}
                          >
                            <div className="flex-1 text-left">
                              <div className="flex items-center justify-between gap-4">
                                <span className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-gray-300'}`}>{skill.name}</span>
                                <span className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-teal-400'}`}>{skill.level}%</span>
                              </div>
                              <div className="relative mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                  className={`h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-700 ease-out shadow-glow`}
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alternative Flat View */}
          <div className="mt-8 animate-fade-in-delay">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Quick <span className="text-teal-400">Overview</span>
            </h2>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 rounded-lg p-8 hover:border-teal-500/40 transition-all duration-300">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skillCategories.flatMap(cat =>
                  cat.skills.slice(0, 3).map((skill, idx) => (
                    <div key={`${cat.title}-${idx}`} className="text-center p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
                      <p className="text-sm font-semibold text-teal-400">{skill.name}</p>
                      <p className="text-xs text-gray-400 mt-1">{skill.level}%</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          {/* Selected Skill Detail (desktop) */}
          {selectedSkill && (
            <div className="fixed right-6 top-40 w-80 hidden lg:block z-50">
              <div className="bg-gray-900/70 backdrop-blur rounded-xl border border-teal-500/20 p-4 shadow-xl">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{selectedSkill.skill.name}</h3>
                    <p className="text-sm text-gray-300 mt-1">Category: <span className="text-teal-400 font-medium">{selectedSkill.category}</span></p>
                  </div>
                  <button onClick={clearSelection} className="text-gray-400 hover:text-white">✕</button>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-300">{selectedSkill.skill.name} — experience level: <span className="text-teal-400 font-semibold">{selectedSkill.skill.level}%</span>. Used across projects and prototypes to build production-ready features and improve developer workflows.</p>
                </div>
                <div className="mt-4">
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-700" style={{ width: `${selectedSkill.skill.level}%` }} />
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <button onClick={clearSelection} className="px-3 py-1 text-sm bg-gray-800/40 rounded-md text-white hover:bg-gray-700/60">Close</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Skills;
