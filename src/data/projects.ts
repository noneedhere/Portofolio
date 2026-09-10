import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'simply-chat',
    caseNumber: 'CASE 01',
    name: 'Simply Chat — AI-Powered Chatbot Application',
    category: 'AI & Natural Language Processing',
    description:
      'Built a conversational AI chatbot application featuring a clean, intuitive interface with REST vs. GraphQL comparison capabilities. Integrates GPT-based language model with structured response rendering, session persistence, and dark/light theme support.',
    techStack: ['React', 'Node.js', 'GPT API', 'REST', 'Tailwind CSS'],
    primaryCta: { label: 'Live Demo', url: '#' },
    secondaryCta: { label: 'Source Code', url: '#' },
    image: '/Images/ai-chatbot.png',
  },
  {
    id: 'rail-booking',
    caseNumber: 'CASE 02',
    name: 'Rail Booking — Real-Time Seat Reservation System',
    category: 'Full-Stack Booking Platform',
    description:
      'Engineered a railway seat reservation system with real-time seat availability tracking, concurrency-safe booking logic, and interactive seat selection UI. Features executive class carriage layouts, price-per-seat display, and multi-state seat indicators (available, selected, held, booked).',
    techStack: ['Laravel', 'MySQL', 'Blade', 'Tailwind CSS', 'Redis'],
    primaryCta: { label: 'Live App', url: '#' },
    secondaryCta: { label: 'Source Code', url: '#' },
    image: '/Images/rail-booking.png',
  },
  {
    id: 'siakad',
    caseNumber: 'CASE 03',
    name: 'SIAKAD — Academic Information System',
    category: 'Education & Dashboard Platform',
    description:
      'Developed a comprehensive academic information system featuring student attendance tracking, monthly analytics summaries, attendance calendars, billing management, and role-based access control. Built with a responsive dashboard layout and real-time attendance rate calculations.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    primaryCta: { label: 'View Dashboard', url: '#' },
    secondaryCta: { label: 'Source Code', url: '#' },
    image: '/Images/siakad.png',
  },
];
