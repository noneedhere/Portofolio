import type { ExperienceEntry, EducationEntry, MetricStat, TickerItem } from '../types';

export const experiences: ExperienceEntry[] = [
  {
    company: 'NovaTech Solutions',
    position: 'Software Engineering Intern',
    period: 'Summer 2024',
    description:
      'Collaborated with senior platform engineers on enterprise React/Next.js client portals. Refactored state synchronization layer reducing redundant API network payload transfers by 34%. Wrote automated Vitest unit testing suites reaching 88% codebase coverage across shared component libraries.',
    current: true,
  },
  {
    company: 'GitHub Ecosystem',
    position: 'Open Source Contributor & Module Maintainer',
    period: '2023 — Present',
    description:
      'Active maintainer of developer tooling plugins and utilities for Tailwind CSS and Prisma ORM. Authored documentation updates, squashed edge-case hydration bugs in Next.js third-party connectors, and reviewed community PRs.',
    current: true,
  },
  {
    company: 'University Engineering Lab',
    position: 'Lead Fullstack Engineer (Capstone)',
    period: '2023 — 2024',
    description:
      'Directed a team of 4 computer science seniors to construct an intelligent campus equipment loan system with RFID barcode scanning, role-based access control, and PostgreSQL database triggers. Awarded "Best Capstone System Architecture" among 32 student teams.',
    current: false,
  },
];

export const educationEntries: EducationEntry[] = [
  {
    type: 'degree',
    label: 'ACADEMIC DEGREE',
    title: 'B.S. in Computer Science',
    subtitle: 'Summa Cum Laude (GPA 3.94)',
    detail: 'Graduated Class of 2024',
  },
  {
    type: 'certification',
    label: 'CERTIFICATION',
    title: 'AWS Cloud Practitioner',
    subtitle: 'Amazon Web Services',
    detail: 'Issued 2024 · Verified',
  },
  {
    type: 'certification',
    label: 'CERTIFICATION',
    title: 'Meta Frontend Specialist',
    subtitle: 'Meta Professional Certification',
    detail: 'Advanced React & Web Standards',
  },
];

export const stats: MetricStat[] = [
  { value: '12', suffix: '+', label: 'Production Grade Projects Built', detail: 'Full-stack & Open Source' },
  { value: '3.94', label: 'Core CS GPA', detail: 'Summa Cum Laude', highlighted: true },
  { value: '99', suffix: '%', label: 'Avg Lighthouse Score', detail: 'Performance & A11y' },
  { value: '140', suffix: '+', label: 'Pull Requests Merged', detail: 'CI/CD Tested Code' },
];

export const tickerItems: TickerItem[] = [
  { text: 'REACT 18' },
  { text: 'NEXT.JS 14 (APP ROUTER)' },
  { text: 'TYPESCRIPT' },
  { text: 'NODE.JS & EXPRESS' },
  { text: 'POSTGRESQL & PRISMA' },
  { text: 'TAILWIND CSS' },
  { text: 'DOCKER CONTAINERIZATION' },
  { text: 'GRAPHQL & REST APIS' },
  { text: 'PYTHON' },
];

export const navLinks = [
  { label: 'Work', href: '#work', badge: '[03]', badgeColor: 'text-brand-emerald' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience', badge: '[2024]', badgeColor: 'text-neutral-500' },
  { label: 'Contact', href: '#contact' },
];
