'use client';

const skillGroups = [
  {
    title: 'Languages',
    icon: '💻',
    iconBg: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML / CSS'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    iconBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    skills: ['React 19', 'Vite', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
  },
  {
    title: 'Backend & Databases',
    icon: '⚙️',
    iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Supabase', 'PostgreSQL', 'JWT Auth', 'REST APIs'],
  },
  {
    title: 'Tools & AI',
    icon: '🤖',
    iconBg: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    skills: ['Git & GitHub', 'Docker', 'AWS', 'Vercel', 'Agentic AI', 'LLM APIs', 'DSA'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-blue-400" />
            02 / Skills
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Technical Arsenal
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-surface hover:border-border-accent hover:bg-surface-hover p-8 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg border ${group.iconBg}`}>
                  {group.icon}
                </div>
                <h3 className="font-display text-base font-bold text-foreground">
                  {group.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] py-1.5 px-3 rounded-md bg-white/[0.03] border border-border text-text-dim hover:text-foreground hover:border-border-accent hover:bg-blue-500/5 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
