import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'pulsemetrics',
    caseNumber: 'CASE 01',
    name: 'PulseMetrics — Real-Time Cloud Telemetry & Alert Engine',
    category: 'Full-Stack Cloud Telemetry',
    description:
      'Architected an analytics pipeline capable of ingesting 25k telemetry event pings per minute with sub-80ms visualization latency. Built custom responsive line and bar streaming renderers using Web Workers to prevent main-thread UI jank.',
    techStack: ['Next.js 14', 'TypeScript', 'TimescaleDB', 'Docker', 'Tailwind CSS'],
    primaryCta: { label: 'Live Dashboard', url: '#' },
    secondaryCta: { label: 'Source Code', url: '#' },
    mockup: 'telemetry',
  },
  {
    id: 'synthetix',
    caseNumber: 'CASE 02',
    name: 'Synthetix OS — Multi-Agent LLM Canvas & Prompt Orchestrator',
    category: 'AI Orchestration & Workspaces',
    description:
      'Built a canvas-based node editor for chaining generative LLM pipelines with structured output validation. Includes live streaming token generation via WebSockets and token-cost budgeting telemetry.',
    techStack: ['React Flow', 'Node.js', 'WebSockets', 'Python Worker', 'Redis'],
    primaryCta: { label: 'Try Sandbox', url: '#' },
    secondaryCta: { label: 'View Schema', url: '#' },
    mockup: 'code',
  },
  {
    id: 'aura-commerce',
    caseNumber: 'CASE 03',
    name: 'Aura Commerce — Next-Gen Headless Storefront',
    category: 'Headless Architecture',
    description:
      'Engineered a lightning-fast headless ecommerce platform with dynamic ISR (Incremental Static Regeneration), optimistic shopping cart state, and PCI-compliant Stripe checkout webhooks with zero dropped transactions.',
    techStack: ['Next.js App Router', 'Stripe SDK', 'Supabase', 'Tailwind'],
    primaryCta: { label: 'View Storefront', url: '#' },
    secondaryCta: { label: 'Architecture Spec', url: '#' },
    mockup: 'performance',
  },
];
