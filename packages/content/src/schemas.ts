import { z } from 'zod';

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  longDescription: z.string().optional(),
  tags: z.array(z.string()),
  image: z.string(),
  demoUrl: z.string().url(),
  repoUrl: z.string().url().optional(),
  caseStudyId: z.string(),
  featured: z.boolean().default(false),
  order: z.number().default(0),
});

export const caseStudySchema = z.object({
  id: z.string(),
  projectId: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  role: z.string(),
  duration: z.string(),
  teamSize: z.string().optional(),
  challenge: z.string(),
  approach: z.string(),
  solution: z.string(),
  results: z.array(z.string()),
  technologies: z.array(z.string()),
  images: z.array(z.object({
    url: z.string(),
    caption: z.string().optional(),
    alt: z.string().optional(),
  })).optional(),
  liveDemoUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  learnings: z.array(z.string()).optional(),
  nextSteps: z.array(z.string()).optional(),
});

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export const chatMessageSchema = z.object({
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string(),
  timestamp: z.number().optional(),
});

export const chatRequestSchema = z.object({
  messages: z.array(chatMessageSchema),
});

export type Project = z.infer<typeof projectSchema>;
export type CaseStudy = z.infer<typeof caseStudySchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
export type ChatMessage = z.infer<typeof chatMessageSchema>;
export type ChatRequest = z.infer<typeof chatRequestSchema>;