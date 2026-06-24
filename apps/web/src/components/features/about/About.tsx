'use client';

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-blue-400" />
            01 / About
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Who I Am
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Bio Card */}
          <div className="md:col-span-2 rounded-2xl border border-border bg-surface hover:border-border-accent hover:bg-surface-hover p-8 relative overflow-hidden transition-all duration-300">
            <div className="absolute inset-0 bg-grad-soft opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300" />
            <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-4">Bio</p>
            <p className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
              &quot;Building the future, one commit at a time.&quot;
            </p>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              I&apos;m a Computer Science student passionate about crafting intelligent, scalable software. My journey spans full-stack web development, Java engineering, and the cutting edge of Agentic AI. I love systems that think, adapt, and deliver real impact to real users.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-violet-500/20 bg-violet-500/5 text-violet-400 font-mono text-xs">
              <span>🔭</span> Currently: Agentic AI Systems
            </div>
          </div>

          {/* Status Card */}
          <div className="rounded-2xl border border-border bg-surface hover:border-border-accent hover:bg-surface-hover p-8 relative overflow-hidden transition-all duration-300">
            <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-4">Status</p>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-display text-sm font-semibold text-emerald-400">Open to Work</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed mb-6">
              Internships, part-time roles & freelance projects.
            </p>
            <div className="pt-4 border-t border-border">
              <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-2">Location</p>
              <p className="text-xs text-foreground font-display font-medium">📍 Hyderabad, India</p>
            </div>
          </div>

          {/* Education Card */}
          <div className="rounded-2xl border border-border bg-surface hover:border-border-accent hover:bg-surface-hover p-8 relative overflow-hidden transition-all duration-300">
            <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-4">Education</p>
            <h3 className="font-display text-base font-bold text-foreground mb-1">VNR VJIET</h3>
            <p className="text-xs text-text-muted mb-4">B.Tech — Computer Science & Engineering</p>
            <span className="inline-block font-mono text-[10px] bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2.5 py-1 rounded-md tracking-wider">
              2022 — 2026
            </span>
            <div className="pt-4 mt-4 border-t border-border">
              <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-2">Interests</p>
              <p className="text-xs text-text-muted leading-relaxed">Algorithms &middot; Scalable Systems &middot; AI Research</p>
            </div>
          </div>

          {/* Stats Card */}
          <div className="md:col-span-2 rounded-2xl border border-border bg-surface hover:border-border-accent hover:bg-surface-hover p-8 relative overflow-hidden transition-all duration-300">
            <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-4">Quick Numbers</p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="font-display text-4xl font-bold bg-grad-primary bg-clip-text text-transparent mb-1">2+</p>
                <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Live Projects</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold bg-grad-primary bg-clip-text text-transparent mb-1">300+</p>
                <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted">DSA Solved</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold bg-grad-primary bg-clip-text text-transparent mb-1">&infin;</p>
                <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Curiosity</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
