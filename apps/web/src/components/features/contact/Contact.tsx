'use client';

import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactFormSchema } from '@portfolio/content';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when user types
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus('idle');

    // Validate using Zod
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to submit form.');
      }
    } catch (err: any) {
      console.error(err);
      setSubmitStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-blue-400 mb-2 flex items-center justify-center gap-3">
            04 / Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Let&apos;s Build Something <br />
            <span className="bg-grad-primary bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-sm text-text-muted mt-4 leading-relaxed">
            Have a project in mind? Looking to hire? Or just want to connect &mdash; I&apos;m always down to talk code, ideas &amp; opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Info Cards & Socials */}
          <div className="space-y-6">
            {/* Email Card */}
            <a
              href="mailto:rithwikracharla@gmail.com"
              className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-surface hover:border-border-accent hover:bg-blue-500/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-105 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Email</p>
                <p className="font-display text-sm font-semibold text-foreground">rithwikracharla@gmail.com</p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+917013560134"
              className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-surface hover:border-border-accent hover:bg-blue-500/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-105 transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Phone</p>
                <p className="font-display text-sm font-semibold text-foreground">+91 7013560134</p>
              </div>
            </a>

            {/* Socials Row */}
            <div className="flex justify-center lg:justify-start gap-3 pt-4">
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
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-2xl border border-border bg-surface p-8 backdrop-blur-glass relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-wider text-text-dim mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={`w-full bg-background-2 border ${
                    errors.name ? 'border-red-500/50' : 'border-border'
                  } rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-border-accent text-foreground`}
                />
                {errors.name && <p className="text-[10px] text-red-400 font-mono mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-wider text-text-dim mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className={`w-full bg-background-2 border ${
                    errors.email ? 'border-red-500/50' : 'border-border'
                  } rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-border-accent text-foreground`}
                />
                {errors.email && <p className="text-[10px] text-red-400 font-mono mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-wider text-text-dim mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  className={`w-full bg-background-2 border ${
                    errors.message ? 'border-red-500/50' : 'border-border'
                  } rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-border-accent text-foreground resize-none`}
                />
                {errors.message && <p className="text-[10px] text-red-400 font-mono mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-grad-primary text-background font-display font-bold text-xs tracking-wider uppercase transition-all hover:translate-y-[-1px] hover:shadow-glow-blue disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Submission Status Alerts */}
            {submitStatus === 'success' && (
              <div className="absolute inset-0 bg-background/95 rounded-2xl flex flex-col items-center justify-center p-6 text-center animate-in fade-in-0 duration-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-4 animate-bounce" />
                <h4 className="font-display text-lg font-bold text-foreground mb-2">Message Sent!</h4>
                <p className="text-xs text-text-muted max-w-xs leading-relaxed mb-6">
                  Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="font-mono text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 rounded-xl border border-red-500/20 bg-red-500/5 flex items-start gap-3 animate-in slide-in-from-top-2 duration-200">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-red-400">Submission failed</p>
                  <p className="text-[10px] text-red-400/80 mt-0.5 leading-relaxed">{errorMessage}</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
