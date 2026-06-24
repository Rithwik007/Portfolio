'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, HelpCircle, Layers, CheckCircle2, RefreshCw } from 'lucide-react';
import { projects } from '@/content/projects';
import { caseStudies } from '@/content/caseStudies';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@portfolio/ui';

export function Projects() {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);

  const activeCaseStudy = selectedCaseStudyId ? caseStudies[selectedCaseStudyId] : null;

  return (
    <section id="projects" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-blue-400" />
              03 / Projects
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Featured Works
            </h2>
          </div>
          <a
            href="https://github.com/Rithwik007"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1.5 border-b border-blue-400/30 pb-0.5"
          >
            View all on GitHub &rarr;
          </a>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-[500px_1fr] ${
                  isReversed ? 'lg:grid-cols-[1fr_500px]' : ''
                } rounded-3xl border border-border bg-surface overflow-hidden transition-all duration-500 hover:border-border-accent hover:-translate-y-1 hover:shadow-2xl`}
              >
                {/* Project Image */}
                <div className={`relative aspect-[16/10] overflow-hidden bg-background-2 ${isReversed ? 'lg:order-2' : ''}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover opacity-80 transition-transform duration-700 hover:scale-105 hover:opacity-100"
                  />
                  <div className={`absolute inset-0 pointer-events-none bg-gradient-to-t lg:bg-gradient-to-r from-background/95 to-transparent ${
                    isReversed ? 'lg:bg-gradient-to-l' : ''
                  }`} />
                  <span className="absolute top-4 left-4 font-mono text-[9px] font-bold uppercase tracking-wider bg-blue-500/12 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-md backdrop-blur-md">
                    Web Project
                  </span>
                </div>

                {/* Project Info */}
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <p className="font-mono text-[10px] text-text-muted mb-2 tracking-widest">
                    00{idx + 1}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-border text-text-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedCaseStudyId(project.caseStudyId)}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-grad-primary text-background font-display font-semibold text-xs tracking-wide transition-all hover:translate-y-[-1px] hover:shadow-glow-blue"
                    >
                      Case Study &rarr;
                    </button>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-border bg-transparent text-text-dim font-display font-semibold text-xs transition-colors hover:text-foreground hover:border-border-accent"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        Live Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-border bg-transparent text-text-dim font-display font-semibold text-xs transition-colors hover:text-foreground hover:border-border-accent"
                      >
                        <Github className="w-3.5 h-3.5 mr-1.5" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Coming Soon Card */}
          <div className="rounded-3xl border border-dashed border-blue-500/20 bg-surface p-12 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:border-blue-500/40">
            <p className="font-mono text-xs text-text-muted">
              🚀 Next project cooking in the lab...
            </p>
            <a
              href="https://github.com/Rithwik007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-blue-500/25 bg-transparent text-blue-400 font-display font-semibold text-xs transition-colors hover:bg-blue-500/5"
            >
              Follow on GitHub
            </a>
          </div>
        </div>

        {/* Case Study Dialog */}
        <Dialog open={selectedCaseStudyId !== null} onOpenChange={(open) => !open && setSelectedCaseStudyId(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background border border-border rounded-2xl p-6 sm:p-8">
            {activeCaseStudy && (
              <>
                <DialogHeader className="mb-6">
                  <DialogTitle className="font-display text-3xl font-bold bg-grad-primary bg-clip-text text-transparent mb-2">
                    {activeCaseStudy.title}
                  </DialogTitle>
                  <DialogDescription className="font-display text-sm text-text-dim">
                    {activeCaseStudy.subtitle}
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {activeCaseStudy.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] font-bold uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-8">
                  {/* Problem / Challenge */}
                  <div>
                    <h4 className="text-sm font-display font-bold text-foreground flex items-center gap-2 mb-3">
                      <HelpCircle className="w-4 h-4 text-blue-400" />
                      The Problem
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed bg-white/[0.02] border border-border rounded-xl p-4">
                      {activeCaseStudy.challenge}
                    </p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="text-sm font-display font-bold text-foreground flex items-center gap-2 mb-3">
                      <Layers className="w-4 h-4 text-blue-400" />
                      My Role &amp; Approach
                    </h4>
                    <div className="text-xs text-text-muted leading-relaxed bg-white/[0.02] border border-border rounded-xl p-4">
                      <p className="font-semibold text-text-dim mb-2">Role: {activeCaseStudy.role}</p>
                      <p>{activeCaseStudy.approach}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-sm font-display font-bold text-foreground flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      The Solution
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed bg-white/[0.02] border border-border rounded-xl p-4">
                      {activeCaseStudy.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-sm font-display font-bold text-foreground flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Results &amp; Impact
                    </h4>
                    <ul className="space-y-2.5">
                      {activeCaseStudy.results.map((r, idx) => (
                        <li key={idx} className="text-xs text-text-muted flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reflections & Next Steps */}
                  {activeCaseStudy.nextSteps && (
                    <div>
                      <h4 className="text-sm font-display font-bold text-foreground flex items-center gap-2 mb-3">
                        <RefreshCw className="w-4 h-4 text-violet-400" />
                        What I&apos;d Do Differently
                      </h4>
                      <ul className="space-y-2.5">
                        {activeCaseStudy.nextSteps.map((ns, idx) => (
                          <li key={idx} className="text-xs text-text-muted flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                            <span>{ns}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-border">
                  {activeCaseStudy.liveDemoUrl && (
                    <a
                      href={activeCaseStudy.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-grad-primary text-background font-display font-semibold text-xs tracking-wide transition-all hover:translate-y-[-1px] hover:shadow-glow-blue"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      Live Demo
                    </a>
                  )}
                  {activeCaseStudy.repoUrl && (
                    <a
                      href={activeCaseStudy.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-border bg-transparent text-text-dim font-display font-semibold text-xs transition-colors hover:text-foreground hover:border-border-accent"
                    >
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      Source Code
                    </a>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}
