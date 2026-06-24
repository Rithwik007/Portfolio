import { Project } from '@portfolio/content';

export const projects: Project[] = [
  {
    id: 'habit-tracker',
    title: 'Habit Tracker',
    description: 'Interactive daily checklists and monthly calendar grid with real-time weather, a Pomodoro-style timer, and rich analytics charts — backed by Supabase auth and a glassmorphic UI.',
    tags: ['React.js', 'Supabase', 'Chart.js', 'REST API'],
    image: '/habit_tracker.webp',
    demoUrl: 'https://habit-tracker-web2.vercel.app/',
    repoUrl: 'https://github.com/Rithwik007/habit-tracker-web2.git',
    caseStudyId: 'habit-tracker-case-study',
    featured: true,
    order: 1,
  },
  {
    id: 'library-mgmt',
    title: 'Library Management System',
    description: 'Full-stack system with role-based dashboards for students, faculty & admins. Supports book issue/return workflows, fine management, and RESTful APIs with JWT access control.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'JWT'],
    image: '/library_mgmt.webp',
    demoUrl: 'https://library-management-frontend-ten-tan.vercel.app/',
    repoUrl: 'https://github.com/Rithwik007/Library-Management.git',
    caseStudyId: 'library-mgmt-case-study',
    featured: true,
    order: 2,
  },
];
