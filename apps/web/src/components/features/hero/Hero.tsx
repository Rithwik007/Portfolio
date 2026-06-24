'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const roles = ['Full Stack Developer', 'Java Engineer', 'Agentic AI Builder', 'DSA Enthusiast', 'Problem Solver'];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setTypedText(currentRole.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentRole.length) {
          setIsDeleting(true);
        }
      } else {
        setTypedText(currentRole.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const delay = isDeleting 
      ? 38 
      : charIndex === currentRole.length 
        ? 2200 
        : 75;

    const timer = setTimeout(handleTyping, delay);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </div>
            
            <p className="font-display text-base text-text-dim mb-2">Hi, I&apos;m</p>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6 bg-grad-primary bg-clip-text text-transparent">
              Rithwik
              <br />
              Racharla
            </h1>
            
            <div className="font-display text-lg sm:text-2xl font-medium text-text-dim mb-6 flex items-center gap-2.5 min-h-[2em]">
              <span className="text-text-muted">//</span>
              <span className="text-foreground">{typedText}</span>
              <span className="inline-block w-[2px] h-[1.1em] bg-blue-400 animate-[blink_0.85s_step-end_infinite]" />
            </div>
            
            <p className="text-base text-text-muted max-w-lg mb-8 leading-relaxed">
              CS undergrad at VNR VJIET passionate about building full-stack applications, cracking hard DSA problems, and exploring the frontier of Agentic AI.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-grad-primary text-background font-display font-bold text-sm tracking-wide transition-all hover:translate-y-[-2px] hover:shadow-glow-blue"
              >
                View My Work &rarr;
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-transparent text-foreground font-display font-semibold text-sm transition-all hover:border-border-accent hover:bg-blue-500/5 hover:translate-y-[-2px]"
              >
                Get In Touch
              </a>
            </div>
            
            <div className="flex gap-3">
              <a
                href="https://github.com/Rithwik007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-muted transition-all hover:text-blue-400 hover:border-border-accent hover:bg-blue-500/5 hover:translate-y-[-2px]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rithwik-racharla-488064211"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-muted transition-all hover:text-blue-400 hover:border-border-accent hover:bg-blue-500/5 hover:translate-y-[-2px]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rithwikracharla@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-muted transition-all hover:text-blue-400 hover:border-border-accent hover:bg-blue-500/5 hover:translate-y-[-2px]"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Photo */}
          <div className="flex items-center justify-center relative">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]">
              {/* Orbits */}
              <div className="absolute inset-[-55px] rounded-full border border-dashed border-blue-500/10 pointer-events-none animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-[-100px] rounded-full border border-dashed border-blue-500/10 pointer-events-none animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Conic Ring Background */}
              <div className="absolute inset-[-5px] rounded-full bg-[conic-gradient(from_0deg,#60a5fa,#a78bfa,#60a5fa)] animate-[spin_7s_linear_infinite] z-0" />
              <div className="absolute inset-[4px] rounded-full bg-background z-0" />
              
              {/* Photo */}
              <div className="absolute inset-0 rounded-full overflow-hidden z-10 group">
                <Image
                  src="/profile.png"
                  alt="Rithwik Racharla — Full Stack Developer"
                  fill
                  priority
                  className="object-cover object-[center_8%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Floating Badges */}
              <div className="hidden sm:flex absolute top-[18px] right-[-38px] bg-background-1/90 border border-border rounded-xl px-4 py-2.5 font-mono text-[10px] items-center gap-2.5 shadow-2xl z-20 backdrop-blur-md animate-[bounce_4s_infinite]">
                <span className="text-base">🎓</span>
                <div>
                  <span className="block font-bold text-[13px] text-foreground">VNR VJIET</span>
                  <span className="block text-text-muted text-[10px]">CS Undergrad</span>
                </div>
              </div>
              
              <div className="hidden sm:flex absolute bottom-[50px] left-[-44px] bg-background-1/90 border border-border rounded-xl px-4 py-2.5 font-mono text-[10px] items-center gap-2.5 shadow-2xl z-20 backdrop-blur-md animate-[bounce_4s_infinite_1.6s]">
                <span className="text-base">⚡</span>
                <div>
                  <span className="block font-bold text-[13px] text-foreground">300+</span>
                  <span className="block text-text-muted text-[10px]">DSA Problems</span>
                </div>
              </div>
              
              <div className="hidden sm:flex absolute bottom-0 right-0 bg-background-1/90 border border-border rounded-xl px-4 py-2.5 font-mono text-[10px] items-center gap-2.5 shadow-2xl z-20 backdrop-blur-md animate-[bounce_4s_infinite_0.9s]">
                <span className="text-base">🤖</span>
                <div>
                  <span className="block font-bold text-[13px] text-foreground">Agentic AI</span>
                  <span className="block text-text-muted text-[10px]">Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
