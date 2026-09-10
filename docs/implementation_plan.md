# Portfolio Website — Implementation Plan

Build a dark-first, emerald-accented personal portfolio website for a Junior Fullstack Web Developer using **Vite + React + TypeScript + Tailwind CSS**, closely following the [portfolio-website-prd.md](file:///d:/zidane%20dev/Project/Portofolio%20Website%202/portfolio-website-prd.md) requirements and the Stitch design reference (dark `#080808` background, `#00E599` emerald accent, Inter + JetBrains Mono fonts, editorial/studio aesthetic with glassmorphism nav, grid patterns, and radial glows).

---

## Proposed Changes

### Phase 1 — Project Scaffolding

#### [NEW] Vite + React + TypeScript + Tailwind project
- Initialize with `npx -y create-vite@latest ./ -- --template react-ts`
- Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `framer-motion`, `react-hook-form`, `zod`, `@hookform/resolvers`, `lucide-react`, `react-helmet-async`
- Configure Tailwind with the custom design tokens from the Stitch reference:
  - Colors: `brand.emerald (#00E599)`, `brand.dark (#080808)`, `brand.surface (#111111)`, `brand.card (#161616)`, `brand.border (rgba(255,255,255,0.08))`
  - Fonts: Inter (sans), JetBrains Mono (mono)
  - Custom animations: `pulse-slow`, `ticker` (scrolling tech marquee)

---

### Phase 2 — Type System & Data Layer

#### [NEW] `src/types/index.ts`
All TypeScript interfaces: `PersonalInfo`, `SocialLink`, `Skill`, `Project`, `ExperienceEntry`, `EducationEntry`, `Certification`

#### [NEW] `src/data/` directory
- `personalInfo.ts` — Name, title, tagline, bio, resume URL, location
- `skills.ts` — Grouped by frontend/backend/database/tools categories
- `projects.ts` — 3 featured projects (PulseMetrics, Synthetix OS, Aura Commerce) with tech stacks, descriptions, links
- `experience.ts` — 3 entries (intern, open source, capstone)
- `education.ts` — B.S. CS + 2 certifications (AWS, Meta)
- `socials.ts` — GitHub, LinkedIn, Twitter/X, Email links

---

### Phase 3 — Layout & Navigation

#### [NEW] `src/components/layout/Container.tsx`
Max-width wrapper with responsive padding

#### [NEW] `src/components/layout/Section.tsx`
Consistent section wrapper with padding, optional ID for anchor links

#### [NEW] `src/components/navigation/Navbar.tsx`
- Fixed/sticky floating pill navbar (glassmorphism: `bg-[#121212]/80 backdrop-blur-xl`)
- "Available for Opportunities" status badge with ping animation
- Desktop nav links: Work, About, Stack, Experience, Contact
- "Let's Talk" CTA button (white pill → emerald on hover)
- Mobile hamburger menu (full-screen overlay, body scroll lock, Escape to close)
- Active section highlighting via Intersection Observer

---

### Phase 4 — Content Sections (All P0)

#### [NEW] `src/components/sections/Hero.tsx`
- Massive typography: "ALEXANDER" (solid white) + "CHEN" (stroke text)
- Grid background pattern + radial emerald glow
- Editorial portrait (grayscale → color on hover) with gradient frame
- Left info card: title, tagline, "View Featured Work" CTA
- Right social links column (GitHub, LinkedIn, Twitter/X, Email pills)
- "EXPLORE ECOSYSTEM" scroll indicator with bounce animation
- Framer Motion staggered entrance animation

#### [NEW] `src/components/sections/TechTicker.tsx`
- Infinitely scrolling horizontal marquee of tech stack items
- Duplicated items for seamless CSS animation loop

#### [NEW] `src/components/sections/About.tsx`
- Section badge: "01 / ABOUT & PHILOSOPHY"
- Large headline + 2-paragraph professional bio
- Status chips: "Fresh Graduate", "Authorized to work"
- 4 metric cards (12+ projects, 3.94 GPA, 99% Lighthouse, 140+ PRs)
- Emerald corner glow decoration

#### [NEW] `src/components/sections/Skills.tsx`
- Section badge: "02 / ARCHITECTURE & TOOLS"  
- 3-column card grid: Frontend Engineering, Backend & APIs, Data & Cloud DevOps
- Each card: icon, title, description, list of tech with detail annotations
- Hover: card border shifts to emerald, icon scales up

#### [NEW] `src/components/sections/Projects.tsx`
- Section badge: "03 / SELECTED WORKS"
- 3 full-width case study cards (vertically stacked, not grid)
- Each card: case number, category, title, description, tech badges, "Live" + "Source" CTAs
- Right side: custom mockup/visualization panel per project
  - PulseMetrics: simulated telemetry dashboard (bar chart + metrics)
  - Synthetix OS: code snippet + streaming indicator
  - Aura Commerce: performance metrics grid (FCP, TTFB)

#### [NEW] `src/components/sections/Experience.tsx`
- Section badge: "04 / JOURNEY & ROLES"
- Vertical timeline with emerald-glowing nodes
- 3 entries: Intern, Open Source Contributor, Lead Capstone Engineer
- Hover: node scales up, title shifts to emerald
- Education & Certifications row: 3 compact cards (B.S., AWS, Meta)

#### [NEW] `src/components/sections/Contact.tsx`
- Section badge: "LET'S TALK / OPEN TO FULL-TIME ROLES"
- Large CTA headline: "Let's build something extraordinary together."
- "Get in Touch Directly" emerald button (mailto)
- Copy email pill button with clipboard API + success feedback
- Social links strip (GitHub, LinkedIn, Twitter/X, Resume PDF)
- Radial emerald glow background decoration

#### [NEW] `src/components/sections/Footer.tsx`
- Minimal footer: copyright (dynamic year), timezone/location indicator, "BACK TO TOP" link
- Emerald pulse dot

---

### Phase 5 — Animation System

#### [NEW] `src/components/animations/RevealOnScroll.tsx`
Framer Motion wrapper using `whileInView` with `once: true` — fade + slide-up on scroll

#### [NEW] `src/components/animations/StaggerContainer.tsx`
Staggered children animation wrapper

#### [NEW] `src/hooks/useReducedMotion.ts`
Respects `prefers-reduced-motion: reduce` — disables transforms, reduces to opacity-only fades

#### [NEW] `src/hooks/useActiveSection.ts`
Intersection Observer tracking which section is in viewport, updates active nav link

---

### Phase 6 — UI Primitives

#### [NEW] `src/components/ui/Button.tsx`
Primary (emerald) / secondary (ghost) / outline variants, loading state with spinner

#### [NEW] `src/components/ui/Badge.tsx`
Tech stack badge / category chip, consistent mono font styling

#### [NEW] `src/components/ui/SectionBadge.tsx`
Numbered section eyebrow label (e.g., "01 / ABOUT & PHILOSOPHY")

#### [NEW] `src/components/ui/MetricCard.tsx`
Stat card with large number, label, and subtitle

---

### Phase 7 — SEO & Meta

#### [NEW] `src/components/SEO.tsx`
React Helmet Async wrapper: title, meta description, OG tags, Twitter Card, JSON-LD Person schema

#### [MODIFY] `index.html`
Favicon links, preconnect for Google Fonts, `scroll-smooth` class on `<html>`

---

### Phase 8 — App Assembly

#### [MODIFY] `src/App.tsx`
Compose all sections in order: Navbar → Hero → TechTicker → About → Skills → Projects → Experience → Contact → Footer

#### [MODIFY] `src/main.tsx`
Wrap app with `HelmetProvider`

#### [MODIFY] `src/index.css`
Global styles: custom scrollbar, selection colors, stroke-text utility, grid-bg-pattern, hero-radial-glow, smooth scrolling

---

## User Review Required

> [!IMPORTANT]
> The Stitch design uses **Tailwind CSS v3** via CDN. The PRD also specifies Tailwind CSS. I will use **Tailwind CSS v3** (installed via npm, not CDN) for the Vite + React build. Please confirm this is acceptable.

> [!IMPORTANT]
> The PRD mentions a **contact form** with full validation states (React Hook Form + Zod). The Stitch design shows a simpler **mailto + copy-email** approach without a form. I recommend implementing **both**: the prominent "Get in Touch" mailto CTA + copy-email button from the design, AND a simple inline contact form below it as the PRD requires. Please confirm or choose one approach.

> [!IMPORTANT]
> The Stitch design uses the name **"Alexander Chen"** as the developer persona. The PRD is generic. I'll use Alexander Chen as the placeholder name/content since the design is built around it. You can easily update all content later by editing the `src/data/` files.

## Open Questions

> [!NOTE]
> **Portrait Image**: The Stitch design uses a Google-hosted AI-generated portrait. I'll reference this image URL directly. If you'd like a custom image instead, please provide one.

> [!NOTE]
> **Contact form vs. mailto-only**: Should I include both a contact form (per PRD) AND the mailto/copy-email approach (per design), or just the design's approach?

---

## Verification Plan

### Automated Tests
- `npm run build` — Verify production build compiles without errors
- `npx tsc --noEmit` — TypeScript type checking

### Manual Verification
- Launch `npm run dev` and open in browser
- Visual comparison against the Stitch design screenshot
- Test responsive breakpoints: 375px, 768px, 1024px, 1440px+
- Verify smooth scroll navigation
- Verify mobile hamburger menu open/close
- Test copy-to-clipboard functionality
- Test keyboard navigation (Tab through all interactive elements)
- Verify `prefers-reduced-motion` behavior
- Check no horizontal overflow at any breakpoint
