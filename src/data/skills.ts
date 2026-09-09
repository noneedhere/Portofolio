import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    description: 'Type-safe component architectures, state hydration, and pixel-precise layout designs.',
    icon: 'monitor',
    skills: [
      { name: 'React 18 & Next.js 14', detail: 'App Router / SSR' },
      { name: 'TypeScript', detail: 'Strict Typing' },
      { name: 'Tailwind CSS', detail: 'Utility First' },
      { name: 'Zustand & TanStack Query', detail: 'Async Cache' },
      { name: 'HTML5 / Web A11y', detail: 'WCAG AAA' },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Modular microservices, idempotent REST APIs, WebSockets, and secure auth pipelines.',
    icon: 'server',
    skills: [
      { name: 'Node.js & Express', detail: 'Event-Driven' },
      { name: 'Python & FastAPI', detail: 'Async Endpoints' },
      { name: 'REST & GraphQL', detail: 'Contract Schema' },
      { name: 'JWT & OAuth 2.0', detail: 'Auth Security' },
      { name: 'WebSockets / Socket.io', detail: 'Real-Time Data' },
    ],
  },
  {
    title: 'Data & Cloud DevOps',
    description: 'Schema migration pipelines, distributed storage, container orchestration, and serverless hosting.',
    icon: 'database',
    skills: [
      { name: 'PostgreSQL & Prisma', detail: 'ACID Compliant' },
      { name: 'Redis', detail: 'In-Memory Cache' },
      { name: 'Docker & Containers', detail: 'Reproducible CI' },
      { name: 'Supabase & Firebase', detail: 'Managed BaaS' },
      { name: 'AWS (S3, CloudFront)', detail: 'Cloud Certified' },
    ],
  },
];
