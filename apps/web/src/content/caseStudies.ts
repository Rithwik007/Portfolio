import { CaseStudy } from '@portfolio/content';

export const caseStudies: Record<string, CaseStudy> = {
  'habit-tracker-case-study': {
    id: 'habit-tracker-case-study',
    projectId: 'habit-tracker',
    title: 'Habit Mastery',
    subtitle: 'Interactive daily checklists and monthly calendar tracking',
    role: 'Full-Stack Architect & UI/UX Engineer',
    duration: '3 Weeks',
    teamSize: 'Solo',
    challenge: 'Bridging the gap between simple checklists and comprehensive dashboards with a "visually stunning" and "psychologically engaging" platform that makes daily discipline feel premium.',
    approach: 'Authoring a custom migration script to map relational habit data while preserving user streaks. Designed a logic guard to prevent nagging loops and duplicate notification triggers.',
    solution: 'Designed and implemented a glassmorphic UI, real-time widgets, a Pomodoro timer, and a custom background worker for streak aggregation and notification delivery.',
    results: [
      'Successfully deployed V2.0 to active beta users',
      'Sub-second API response times under simulated traffic loads',
      'Engineered a reliable nagging automation pipeline to maintain user streaks',
    ],
    technologies: ['React 19', 'Vite', 'Node.js', 'MongoDB', 'Firebase', 'Chart.js'],
    liveDemoUrl: 'https://habit-tracker-web2.vercel.app/',
    repoUrl: 'https://github.com/Rithwik007/habit-tracker-web2.git',
    learnings: [
      'Custom Express middleware and token verification logic must have fallback layers to prevent auth blocks.',
      'Data migrations between Supabase and MongoDB require careful index adjustments.',
    ],
    nextSteps: [
      'Integrate simple machine learning model to predict burnout based on checklist completion patterns.',
      'Support customizable nagging intensity configurations for user notifications.',
    ],
  },
  'library-mgmt-case-study': {
    id: 'library-mgmt-case-study',
    projectId: 'library-mgmt',
    title: 'Departmental Library Management System',
    subtitle: 'VNR Departmental Library digitizing and operational workflow tracking',
    role: 'System Architect & Backend Developer',
    duration: '4 Weeks',
    teamSize: 'Solo',
    challenge: 'A robust, full-stack web application designed to digitize and streamline the operations of a departmental library, providing a platform for resource tracking and user transactions.',
    approach: 'Standardizing Indian Standard Time (IST) logic for precise return dates and automated fine calculation. Designing and building 40+ REST API endpoints with secure role-based access control (RBAC).',
    solution: 'Implemented atomic updates with MongoDB $inc operator to prevent concurrency issues during book stock changes. Built dynamic role-specific dashboards with secure session token control.',
    results: [
      'Digitized over 1000+ departmental library items and resources',
      'Reduced transaction times by 70% compared to legacy spreadsheets',
      'Achieved a highly secure, verified role-based access control system',
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'JWT', 'Tailwind CSS'],
    liveDemoUrl: 'https://library-management-frontend-ten-tan.vercel.app/',
    repoUrl: 'https://github.com/Rithwik007/Library-Management.git',
    learnings: [
      'Ensuring atomic operations for counter increments is critical in concurrent book booking environments.',
      'Datetime formatting standards must be consistent between client and server layers.',
    ],
    nextSteps: [
      'Add bar code scanning library for student mobile checkout.',
      'Integrate email reports for faculty review of book availability.',
    ],
  },
};
