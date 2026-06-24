import Link from 'next/link';
import { cn } from '@portfolio/ui';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
} from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/rithwik007', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com/in/rithwikracharla', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://twitter.com/rithwik007', label: 'Twitter', icon: Twitter },
  { href: 'mailto:rithwikracharla@gmail.com', label: 'Email', icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border bg-background/50 backdrop-blur-glass">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-display font-semibold text-foreground">
              Rithwik Racharla
            </h3>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Full Stack Developer & AI Enthusiast building scalable applications
              and intelligent systems. Currently exploring Agentic AI and
              distributed systems.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="#hero"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect
            </h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={cn(
                    'inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-surface transition-all duration-200 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500'
                  )}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                  <ExternalLink className="sr-only" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Rithwik Racharla. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS, and TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}