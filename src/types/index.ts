// ==========================================
// TypeScript Type Definitions
// ==========================================

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  shortBio: string;
  longBio: string[];
  resumeUrl: string;
  profileImageUrl: string;
  location: string;
  locationDetail: string;
  email: string;
  availability: string;
  highlights: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // icon name from lucide-react or 'custom'
  external: boolean;
}

export interface Skill {
  name: string;
  detail: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  caseNumber: string;
  name: string;
  category: string;
  description: string;
  techStack: string[];
  primaryCta: { label: string; url: string };
  secondaryCta: { label: string; url: string };
  mockup: 'telemetry' | 'code' | 'performance';
}

export interface ExperienceEntry {
  company: string;
  position: string;
  period: string;
  description: string;
  current: boolean;
}

export interface EducationEntry {
  type: 'degree' | 'certification';
  label: string;
  title: string;
  subtitle: string;
  detail: string;
}

export interface MetricStat {
  value: string;
  suffix?: string;
  label: string;
  detail: string;
  highlighted?: boolean;
}

export interface TickerItem {
  text: string;
}
