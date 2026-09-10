# Product Requirements Document (PRD)
## Junior Fullstack Web Developer — Personal Portfolio Website

**Document type:** Implementation-ready PRD
**Intended reader:** AI coding agent (e.g., Claude Sonnet) or human developer implementing from scratch
**Version:** 1.0

---

## 1. Product Overview

The product is a single-page (with optional sub-routes), responsive, dark-first personal portfolio website for a Junior Fullstack Web Developer. It is a marketing and credibility asset used during job applications, internship applications, and freelance client outreach. The site must communicate, within seconds of landing, who the developer is, what they build, and how competent they are — while remaining fast, accessible, and easy to maintain.

The site is a static/client-rendered React application (no CMS, no server-rendered backend required for MVP) built with Vite, React, TypeScript, and Tailwind CSS, deployable to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

---

## 2. Product Goals

1. Convert visitors (recruiters, hiring managers, clients) into interview requests, callbacks, or contact-form submissions.
2. Demonstrate frontend craftsmanship and fullstack capability through the build itself — the portfolio is also a live work sample.
3. Present technical skills, stack, and projects with maximum scan-ability in under 10 seconds per section.
4. Achieve strong Lighthouse scores (Performance, Accessibility, Best Practices, SEO all ≥ 90).
5. Remain easy to update by the developer as new skills/projects/experience are added, without touching layout code (data-driven content).
6. Work flawlessly across desktop, tablet, and mobile without horizontal scroll, layout shift, or broken interactions.

---

## 3. Target Users

| User | Primary Need | Behavior |
|---|---|---|
| Recruiter | Fast qualification: name, title, stack, years of experience | Skims for ~5–10 seconds, scans headings and badges |
| Hiring manager | Depth: real projects, responsibilities, outcomes | Reads Experience + Projects in more depth |
| Technical interviewer | Proof of technical ability, code quality | May click through to GitHub/live demos, checks stack precision |
| Potential client | Trust, portfolio quality, ease of contact | Focuses on Projects + Contact, evaluates polish |
| Fellow developer | Curiosity about implementation and stack choices | May view source, check GitHub repo, inspect animations |

**UX implication:** Information architecture must support both a "10-second skim" and a "5-minute deep read" of the same page. This is achieved via strong visual hierarchy, section anchors, and progressive disclosure (e.g., "View details" / expandable cards) rather than dense prose.

---

## 4. User Experience Goals

- **Immediate clarity:** name, title, and value proposition visible without scrolling on any device.
- **Low friction navigation:** every major section reachable within one click/tap from anywhere on the page (sticky nav).
- **Scannable content:** bullet points and badges over paragraphs; no more than 3–4 sentences of prose per content block.
- **Trust signals:** real links (GitHub, LinkedIn, live demos), consistent professional tone, no placeholder-looking content in the final build.
- **Frictionless contact:** a visitor should be able to initiate contact in under 10 seconds from any section (sticky CTA / footer / contact section).
- **Delight without distraction:** animations reinforce hierarchy and give a "modern, high-quality" feel, but never block reading or delay interaction.

---

## 5. Information Architecture

Single-page application with anchor-based sections, each independently addressable and deep-linkable via URL hash for SEO and shareability.

```
/                      → Home (all sections below, scrollable)
  #hero
  #about
  #skills
  #projects
  #experience
  #education
  #contact
/404                   → Custom not-found page (optional route, P2)
```

Navigation order (top to bottom, matches nav menu order):

1. Hero
2. About
3. Skills
4. Projects
5. Experience
6. Education
7. Contact
8. Footer

Rationale for ordering: recruiters need identity + proof (hero → about → skills) before commitment (projects → experience), with education last since it is typically the least differentiating signal for a junior fullstack developer whose portfolio and experience carry more weight.

---

## 6. Complete Page / Section Structure

### 6.1 Hero Section
**Purpose:** Immediate identity + value proposition + primary conversion action.

**Content requirements:**
- Developer full name (large, dominant typography)
- Professional title (e.g., "Fullstack Web Developer") — animated/rotating optional (e.g., cycling through "Fullstack Developer" / "React Developer" / "Backend Enthusiast") via lightweight text-rotation, but must not cause layout shift
- One-sentence value proposition (what kind of problems they solve / what stack they specialize in)
- Short 1–2 sentence introduction
- Primary CTA: "View Projects" (scrolls to #projects)
- Secondary CTA: "Download CV" (opens/downloads a PDF) or "Contact Me" (scrolls to #contact) — pick one based on priority; recommend "Download CV" as secondary since "Contact" already lives in nav and footer
- Social links: GitHub, LinkedIn, Email (icon row, opens in new tab except email which uses `mailto:`)
- Developer visual: profile photo or stylized avatar/illustration with subtle decorative background (gradient blob, grid pattern, or glow — kept subtle per Section 3 constraints)
- Scroll-down indicator (optional, subtle bounce animation, respects reduced motion)

**Behavior:**
- Entrance animation on initial load only (staggered fade/slide-up for name → title → description → CTAs), 400–700ms total, using Framer Motion `staggerChildren`.
- CTAs are keyboard-focusable and operable before animation completes (animation must not use `pointer-events: none` beyond the animation's own duration).
- Fully visible above the fold on standard viewport heights (with the exception of very short mobile viewports, where scroll indicator may be omitted).

---

### 6.2 About Section
**Purpose:** Humanize the developer and establish narrative/career focus beyond the resume facts.

**Content requirements:**
- Short professional introduction (2–4 sentences)
- Background (how they got into development)
- Development interests (e.g., "building performant web apps," "developer tooling")
- Career focus / what they're looking for (internship, junior role, freelance)
- Personal working philosophy (1–2 sentences, e.g., approach to code quality, learning, collaboration)
- Profile image (secondary image or repeated from hero, styled differently — e.g., framed card with decorative border)
- Optional stat cards (only if accurate/meaningful): e.g., "X projects shipped," "X technologies," "X months/years learning/building" — must not fabricate metrics like "99% client satisfaction" without real basis
- Optional experience highlights (2–3 short highlight chips, e.g., "Open Source Contributor," "Hackathon Participant")

**Behavior:**
- Scroll-triggered entrance animation (fade/slide-in) using Intersection Observer, fires once per section (not on every scroll pass).
- Image and text content reflow to stacked layout on mobile (image above or below text, not side-by-side).

---

### 6.3 Skills & Technology Stack Section
**Purpose:** Fast, scannable proof of technical range.

**Content requirements — grouped categories:**
- **Frontend:** React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML, CSS
- **Backend:** Node.js, Express.js, Python, Django
- **Database:** MySQL, SQLite, PostgreSQL
- **Tools & Others:** Git, GitHub, Docker, REST API, WordPress, (extendable)

**Card requirements per skill:**
- Icon (from Simple Icons / brand icon set, consistent sizing)
- Technology name
- Category (implicit via grouping, or explicit tag)
- Optional proficiency indicator — **do not** use numeric percentages (e.g., "React 87%") since these are widely seen as arbitrary/non-credible. Instead use a qualitative, non-misleading indicator if included at all: a simple 3-tier tag ("Learning" / "Comfortable" / "Confident") or omit proficiency entirely and let Projects/Experience prove competency.

**Behavior:**
- Grouped into tabbed or sectioned grid (tabs recommended for larger stacks to avoid a long unbroken grid on mobile).
- Hover state: subtle lift + icon color shift/glow (desktop only; tap state equivalent on touch = brief highlight, no dependency on hover for information access).
- Icons must have text labels — never icon-only (accessibility + recognizability, since not all technology logos are universally recognizable).
- Grid reflows: 4–6 columns desktop, 3 columns tablet, 2 columns mobile.

---

## 7. Featured Projects

**Purpose:** The primary evidence of ability. This is the highest-priority content section.

**Content requirements per project:**
- Project name
- Short description (1–3 sentences, outcome-focused, not just feature list)
- Project category (e.g., "Fullstack," "Frontend," "API," "Freelance")
- Technology stack (badge list)
- Project image/screenshot (real screenshot, 16:9 or consistent aspect ratio, optimized/compressed, lazy-loaded)
- Key features (3–5 bullet points)
- GitHub repository link (icon + link, opens new tab)
- Live demo link when available (icon + link, opens new tab); if unavailable, omit the button rather than showing a disabled/dead one

**Layout requirements:**
- One "featured" project (the strongest project) receives a larger card / full-width treatment at the top of the grid.
- Remaining projects in a responsive grid (3 columns desktop, 2 tablet, 1 mobile).
- Project count: minimum 3, recommended 4–6 for MVP; more can be added later without layout changes (data-driven).

**Card interaction:**
- Hover: image subtle zoom/scale (`scale-105`, ~300ms ease), overlay gradient darkening, tech badges become more prominent or CTA buttons fade in.
- Touch devices: tapping the card opens the project (or expands to show CTAs directly, since hover doesn't apply) — do not require a hover-only affordance to reveal the "View Project" action on mobile.
- Optional (P1/P2): clicking a card opens a detail modal with expanded description, more screenshots, and full feature list, instead of/in addition to inline card content.

---

## 8. Experience

**Purpose:** Demonstrate real-world or applied work history (internships, freelance, part-time, bootcamp-driven project work, open source).

**Content requirements per entry:**
- Company / organization name
- Position/title
- Employment period (start – end or "Present")
- Location (city/remote), if relevant
- Responsibilities (2–4 concise bullets)
- Technologies used (badge list)
- Key achievements/contributions — prioritize measurable outcomes where genuinely available (e.g., "Reduced page load time by 30%," "Built X feature used by Y users"); if no metrics exist, use concrete, specific accomplishment statements instead of vague claims.

**Layout:**
- Vertical timeline (desktop: centered or left-aligned line with alternating or single-side cards; mobile: single-column left-aligned line, no alternating layout to avoid cramped columns).
- Each entry animates in as it enters the viewport (fade + slight slide along the timeline axis).
- If the developer has limited formal experience, this section should also accept non-traditional entries (e.g., "Freelance Web Developer," "Open Source Contributor," "Personal Project Sprint") — the data model should not assume only formal employment.

---

## 9. Education

**Content requirements per entry:**
- Institution name
- Degree / major (or course/bootcamp name)
- Study period
- Relevant specialization/focus
- Relevant achievements or activities (clubs, competitions, GPA if strong and relevant)
- Certifications (can be listed as a distinct sub-list or separate card set within the same section — e.g., "freeCodeCamp," "Meta Frontend Developer Certificate," relevant online course certificates)

**Layout:**
- Clean card or compact timeline layout (simpler than Experience timeline — education entries are typically fewer).
- Certifications can render as small badge/chip cards with issuing organization + optional verification link.

---

## 10. Contact Section

**Purpose:** Final, unambiguous conversion point.

**Content requirements:**
- Email address (clickable `mailto:`, also copy-to-clipboard affordance recommended)
- Social links: GitHub, LinkedIn (icon buttons, consistent with hero/footer)
- Contact form (see below)

**Contact form fields:**
- Name (required, min 2 characters)
- Email (required, valid email format via Zod schema)
- Message (required, min 10 characters, max ~1000 characters with visible counter)
- Submit button

**Form states (all required):**
- **Default:** empty fields, submit button enabled but validates on submit/blur
- **Focus:** visible focus ring on active field (meets WCAG contrast)
- **Validation error:** inline error message under the specific field, field border/color indicates error (not color alone — also icon/text), form does not submit
- **Loading:** submit button shows spinner + disabled state, fields disabled to prevent duplicate submits
- **Success:** form replaced or overlaid with a success message/confirmation state; fields clear
- **Error (submission failed):** inline error banner near the form with retry affordance; entered data is preserved (not cleared) so the user doesn't have to retype

**Technical approach:**
- Frontend built with React Hook Form + Zod for validation regardless of backend readiness.
- If no backend/email service is implemented at build time, wire the form to a clearly marked integration point (e.g., a single `submitContactForm()` function in `lib/`) that can be swapped to EmailJS, Resend, or a custom API route without touching UI components.
- Never expose API keys client-side; if using EmailJS or similar, use environment variables and any provider-recommended domain restrictions.

---

## 11. Navigation

**Desktop:**
- Fixed/sticky top navbar (semi-transparent with backdrop-blur/glassmorphism, becomes more opaque on scroll for contrast)
- Logo/name (left)
- Section links: About, Skills, Projects, Experience, Education, Contact (center or left-center)
- CTA button: "Resume" or "Contact" (right, visually distinct/filled button)
- Active-section highlighting as user scrolls (via Intersection Observer, updates active nav link without needing a click)

**Mobile:**
- Collapsed to logo + hamburger icon
- Hamburger opens a full-screen or slide-in animated menu (Framer Motion, spring or ease transition, 200–350ms)
- Menu includes all section links + CTA, large touch targets (min 44×44px)
- Clear close interaction: explicit close (X) icon, tap-outside-to-close, and Escape key support
- Body scroll is locked while mobile menu is open

**Shared behavior:**
- Smooth scroll to section on link click (native `scroll-behavior: smooth` or Lenis if adopted; must account for sticky navbar height offset so headings aren't hidden behind the navbar)
- Navigation remains usable/visible while scrolling (sticky, not hidden), but may shrink in height on scroll to conserve vertical space
- All nav links keyboard accessible and reachable via Tab in logical order

---

## 12. Responsive Design

**Breakpoints (Tailwind defaults, mobile-first):**

| Breakpoint | Width | Target |
|---|---|---|
| Base (no prefix) | < 640px | Mobile |
| `sm` | ≥ 640px | Large mobile / small tablet |
| `md` | ≥ 768px | Tablet |
| `lg` | ≥ 1024px | Desktop |
| `xl` | ≥ 1280px | Large desktop |
| `2xl` | ≥ 1536px | Extra-large desktop |

**Requirements:**
- No horizontal overflow at any breakpoint (verify with `overflow-x-hidden` on root only as a safety net, not as a fix for underlying layout bugs).
- Typography uses fluid/responsive scale (Tailwind text utilities per breakpoint, or `clamp()` in CSS for hero headline specifically).
- Images use `object-fit: cover` within fixed-aspect-ratio containers to remain proportional without distortion.
- Cards reflow from multi-column grids to single/double column stacks per breakpoint (see per-section grid specs above).
- Navigation switches from full desktop bar to hamburger at `md` breakpoint (customizable, but `md` is the recommended cutoff since a full link row typically doesn't fit comfortably below ~900–1024px with a logo and CTA).
- Animations remain performant on mobile: reduce or simplify parallax/heavy scroll effects on smaller viewports if frame drops are observed; prefer `transform` and `opacity` animations (GPU-accelerated) over layout-triggering properties.
- Touch targets minimum 44×44px (buttons, nav links, form controls, close icons).
- Content remains readable without zoom on small screens: minimum body text size 16px equivalent.

---

## 13. Accessibility

**Requirements:**
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>` per content block, `<footer>`, `<article>` for project/experience cards where appropriate.
- Proper heading hierarchy: one `<h1>` (developer name in hero), `<h2>` for each major section title, `<h3>` for card/item titles within sections — no skipped levels.
- Accessible navigation: nav landmark (`<nav aria-label="Main navigation">`), current section indicated via `aria-current="page"` or equivalent on active link.
- Full keyboard navigation: all interactive elements (links, buttons, form fields, mobile menu toggle) reachable and operable via Tab/Shift+Tab/Enter/Space, with logical tab order matching visual order.
- Visible focus states on every interactive element (custom focus ring using Tailwind `focus-visible:` utilities, sufficient contrast against dark background — do not remove default outlines without replacing them).
- Sufficient color contrast: body text ≥ 4.5:1, large text/headings ≥ 3:1 against background (WCAG AA), verified against the actual dark theme palette chosen in implementation.
- Descriptive alt text on all meaningful images (profile photo, project screenshots describe what's shown, not just "project image"); decorative background elements use `alt=""` or `aria-hidden="true"`.
- Accessible buttons/links: icon-only buttons (e.g., social icons, hamburger, form close) include `aria-label`.
- Form labels: every input has an associated `<label>` (visually present or `sr-only`, never placeholder-only labeling).
- Reduced motion: all Framer Motion / CSS animations check `prefers-reduced-motion: reduce` and fall back to instant or minimal-transition states.
- Do not rely solely on color: form errors, active nav state, and status indicators pair color with icon/text/shape changes.

---

## 14. Performance

**Requirements:**
- Images: served in modern formats (WebP/AVIF with fallback), properly sized (no serving a 4000px image into a 400px container), compressed.
- Lazy-loading: below-the-fold images (`loading="lazy"`), Intersection Observer for section animations rather than continuous scroll listeners.
- JavaScript: avoid unnecessary libraries; prefer native Intersection Observer over adding a dependency where feasible; tree-shake unused component library code.
- Animation overhead: animate `transform`/`opacity` only where possible; avoid animating layout-affecting properties (`width`, `top`, `margin`) at 60fps scale.
- Fonts: use a maximum of 1–2 font families, subset if using Google Fonts, use `font-display: swap`, preload the primary heading font.
- Code splitting: route-level splitting if additional routes (e.g., custom 404, project detail pages) are added; the main single-page experience should still ship as a reasonably sized initial bundle (target < 250KB gzipped JS for initial load, excluding images).
- Avoid excessive third-party scripts (no unnecessary analytics/tag-manager bloat beyond a single lightweight analytics tool if desired).

**Target Lighthouse scores (mobile, throttled):** Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.

---

## 15. SEO

**Requirements:**
- Descriptive `<title>` (e.g., "Jane Doe — Fullstack Web Developer Portfolio")
- Meta description summarizing the developer's value proposition (~150–160 characters)
- Open Graph tags: `og:title`, `og:description`, `og:image` (a designed social preview card, 1200×630), `og:type=website`, `og:url`
- Twitter Card metadata (`twitter:card=summary_large_image`, title, description, image)
- Favicon (multiple sizes: 32×32, 16×16, apple-touch-icon, and a manifest icon if PWA is later added)
- Semantic HTML and proper heading structure (reinforces Section 13)
- Descriptive section IDs/anchors usable as shareable deep links (`/#projects`, etc.)
- Structured data (JSON-LD `Person` schema) recommended for rich search result eligibility — name, job title, URL, social profile links (`sameAs`)
- Relevant developer keywords naturally present in copy (job title, primary stack) without keyword stuffing

---

## 16. Component Architecture

Recommended folder structure:

```text
src/
├── components/
│   ├── layout/          # Page-level structural components: PageWrapper, Container, Section
│   ├── navigation/       # Navbar, MobileMenu, NavLink, ScrollProgress
│   ├── sections/         # Hero, About, Skills, Projects, Experience, Education, Contact, Footer
│   ├── cards/            # ProjectCard, SkillCard, ExperienceItem, EducationCard, StatCard
│   ├── ui/               # Generic reusable primitives: Button, Badge, Input, TextArea, Modal, Tooltip, SectionHeading
│   └── animations/       # Reusable animation wrappers: FadeIn, StaggerContainer, RevealOnScroll
├── data/                 # Structured content: personalInfo.ts, skills.ts, projects.ts, experience.ts, education.ts, socials.ts
├── hooks/                # useActiveSection, useMediaQuery, useReducedMotion, useScrollProgress
├── lib/                  # utils.ts (cn/classnames helper), validation.ts (Zod schemas), contact.ts (form submission integration point), seo.ts
├── assets/               # Images, icons not covered by icon libraries, resume PDF
├── types/                # TypeScript interfaces: Project, Skill, ExperienceEntry, EducationEntry, SocialLink
├── App.tsx
├── main.tsx
└── index.css
```

**Directory responsibilities:**
- `components/layout/`: shared structural wrappers (max-width containers, consistent section padding) used by every section to enforce visual consistency.
- `components/navigation/`: everything related to wayfinding — desktop nav, mobile nav, scroll-position-aware active-link logic.
- `components/sections/`: one component per major page section; each section composes cards/ui components and pulls its content from `data/`. Sections should not contain hardcoded copy.
- `components/cards/`: repeated content-display units used inside sections (projects, skills, experience, education).
- `components/ui/`: small, style-consistent, prop-driven primitives shared across the whole app (buttons, badges, modals, tooltips, section headings) — the design system layer.
- `components/animations/`: thin wrapper components around Framer Motion patterns (e.g., `<RevealOnScroll>`) so animation logic isn't duplicated across every section.
- `data/`: the single source of truth for all portfolio content, typed against `types/`. Updating the portfolio (new project, new job) should primarily mean editing files here.
- `hooks/`: cross-cutting client-side logic reused across components.
- `lib/`: framework-agnostic utilities and integration points (validation schemas, the swappable contact-form submission function, SEO helper for setting meta tags).
- `assets/`: static binary/media files.
- `types/`: shared TypeScript type definitions consumed by both `data/` and `components/`.

**Component sizing principle:** avoid over-fragmenting into components with a single element and no reuse (e.g., don't create a standalone `<Heading1>` used exactly once); do create a component wherever a pattern repeats 2+ times or where isolating logic (e.g., form validation, modal behavior) improves clarity.

---

## 17. Data Architecture

All portfolio content is stored as typed TypeScript objects/arrays in `src/data/`, decoupled from rendering components.

**Example type shapes (illustrative, not final implementation):**

- `PersonalInfo`: name, title, tagline, shortBio, longBio, resumeUrl, profileImageUrl, location
- `SocialLink`: label, url, icon
- `Skill`: name, category (`'frontend' | 'backend' | 'database' | 'tools'`), icon, proficiency? (optional qualitative tier)
- `Project`: id, name, description, category, techStack (string[]), imageUrl, features (string[]), githubUrl, liveUrl?, featured (boolean)
- `ExperienceEntry`: company, position, startDate, endDate | 'Present', location?, responsibilities (string[]), techStack (string[]), achievements (string[])
- `EducationEntry`: institution, degree, startDate, endDate, focus?, achievements (string[])
- `Certification`: name, issuer, dateIssued, verificationUrl?

**Rationale:** Sections render generically from these arrays (`.map()`), so adding a new project or job requires only appending a data object — no component code changes, no risk of breaking layout when content is updated later by the developer (who may not revisit the codebase deeply after initial build).

---

## 18. Reusable UI System

| Component | Responsibility | Key Props (illustrative) |
|---|---|---|
| `Button` | Primary/secondary/ghost action trigger | `variant`, `size`, `icon?`, `onClick`, `disabled`, `loading` |
| `Badge` | Small labeled chip (tech stack, category tags) | `label`, `variant`/`color` |
| `SectionHeading` | Consistent heading + optional eyebrow/kicker text per section | `title`, `eyebrow?`, `align` |
| `ProjectCard` | Displays one project (see Section 7) | `project`, `featured?` |
| `SkillCard` | Displays one skill/technology | `skill` |
| `SocialLink` | Icon + accessible link to a social profile | `platform`, `url` |
| `TimelineItem` | One entry within Experience or Education timeline | `entry`, `type` |
| `Modal` | Accessible dialog (project detail, if implemented) | `isOpen`, `onClose`, `children` — must trap focus, close on Escape, restore focus on close |
| `Tooltip` | Small contextual label on hover/focus | `content`, `children` |
| `Navbar` | Top navigation, desktop + mobile logic composed | none (reads from `data/` and `hooks/useActiveSection`) |
| `Footer` | Site footer | none (reads from `data/`) |

All components must accept a `className` passthrough prop for minor per-instance style overrides and use Tailwind's `cn()`/`clsx` utility pattern for conditional class composition.

---

## 19. Content Strategy

- Prose kept to 2–4 sentence blocks maximum; anything longer is restructured as bullet points.
- Every project and experience entry leads with outcome/impact where possible, not just a feature list.
- Technology badges used consistently across Skills, Projects, and Experience so a recruiter can pattern-match a required stack at a glance.
- CTAs use action verbs and specific destinations ("View Projects," not "Learn More").
- No lorem ipsum or placeholder text in the delivered build — every content slot in `data/` must be filled with real (or clearly marked example/sample) content before considering the MVP complete.

---

## 20. Footer

**Content requirements:**
- Developer name
- Short tagline (can repeat or lightly vary the hero value proposition)
- Navigation links (mirrors main nav for accessibility/SEO, especially useful if a visitor lands scrolled deep via a shared anchor link)
- Social links: GitHub, LinkedIn, Email
- Copyright line with current year (dynamically generated via `new Date().getFullYear()`, not hardcoded)

**Behavior:**
- Subtle entrance animation on scroll-into-view (fade-in), consistent with rest of site.
- No new complex interaction patterns introduced here — footer should be the simplest section visually.

---

## 21. Optional Advanced Features (P1/P2 — see Section 26 for priority)

| Feature | Value | Complexity |
|---|---|---|
| Dark/light theme toggle | Nice UX touch, low differentiation since dark-first is already the primary identity | Medium |
| Project filtering (by category/tech) | Useful once project count grows beyond ~6 | Low–Medium |
| Project detail modal | Lets project cards stay concise while offering depth on demand | Medium |
| Command palette (Cmd+K style nav) | Impressive "developer flex" but low necessity for a portfolio's core goal | Medium–High |
| Animated custom cursor | Purely decorative, risk of feeling gimmicky/hurting performance | Low value, avoid unless strongly desired |
| GitHub activity integration (contribution graph, pinned repos via API) | Strong credibility signal, live proof of activity | Medium (requires GitHub API handling, rate limits) |
| Downloadable CV | High value, low complexity — recommend promoting to P0 | Low |
| Contact form integration (EmailJS/Resend) | High value for actual conversions | Low–Medium |
| Scroll progress indicator | Small polish touch | Low |
| Interactive technology stack (hover reveals related projects) | Nice engagement touch, not essential | Medium |
| View transitions (page/section) | Polish, marginal value on a single-page site | Low–Medium |
| Custom 404 page | Only relevant if multiple routes exist; still good practice | Low |
| Analytics | Useful for the developer to track traffic/conversion | Low |
| PWA support | Low relevance for a portfolio use case | Low value, avoid unless requested |

---

## 22. Security Considerations

- Never expose API keys or secrets in client-side code or committed files; use environment variables (`.env`, excluded via `.gitignore`) for any third-party service keys (e.g., EmailJS public key still should be scoped/restricted per provider guidance).
- Validate and sanitize all contact form input client-side (Zod) and, if a backend/serverless function is added later, server-side as well — never trust client-only validation for anything persisted or emailed.
- Escape/sanitize any user-provided content before rendering if ever displayed back (not applicable for MVP since the form only sends data, doesn't render submissions on-page, but relevant if a guestbook-style feature is ever added).
- Avoid unnecessary third-party scripts; each added script (analytics, email service, font CDN) increases attack surface and should be justified.
- If integrating external APIs (e.g., GitHub API for activity feed), handle failures gracefully (don't expose raw error/stack traces to the UI) and respect rate limits with caching where possible.
- Set appropriate `rel="noopener noreferrer"` on all external links opened in new tabs to prevent tab-nabbing.

---

## 23. UX Requirements — Interactive Component States

| Component | Loading | Hover | Focus | Active | Disabled | Empty | Error | Success |
|---|---|---|---|---|---|---|---|---|
| Primary/Secondary Button | Spinner replaces label, button width preserved (no layout shift) | Slight scale/brightness change, ~150ms ease | Visible ring, offset from button edge | Slight scale-down (press feedback) | Reduced opacity, `cursor-not-allowed`, no hover/active effects | N/A | N/A | N/A |
| Nav Link | N/A | Underline/color shift | Visible focus ring | Active section indicated via distinct color/underline | N/A | N/A | N/A | N/A |
| Contact Form Fields | Disabled + dimmed during submission | Border color shift | Visible ring, border color change | N/A | Dimmed, non-interactive | Placeholder text guides expected input | Red-toned border + inline message + icon | Green-toned border/check icon briefly, or field resets after success |
| Contact Form (as a whole) | Submit button loading state (see above); fields locked | N/A | N/A | N/A | N/A | N/A | Error banner near top of form, entered data preserved | Success message/confirmation replaces or overlays form |
| Project Card | Image shows a low-quality placeholder/skeleton while lazy-loading | Image scale + overlay CTA reveal | Visible ring around card when tab-focused | Slight scale-down on click/tap | N/A | N/A | Fallback placeholder image if screenshot fails to load (`onError` handler) | N/A |
| Mobile Menu Toggle | N/A | Icon color/background shift | Visible ring | Icon morph animation (hamburger ↔ X) | N/A | N/A | N/A | N/A |
| Skill Card | N/A | Lift + icon glow/color shift | Visible ring | Slight scale-down | N/A | N/A | Fallback generic icon if a specific tech icon is missing | N/A |
| Modal (if implemented) | N/A | N/A | Focus trapped inside modal, first focusable element auto-focused on open | N/A | N/A | N/A | N/A | N/A |

---

## 24. Browser Compatibility

- Must render and function correctly on current stable and previous major versions of: Chrome, Edge, Firefox, Safari (desktop and iOS).
- CSS: rely on Tailwind's standard utility output (broad compatibility); avoid bleeding-edge CSS features without fallback (e.g., use `backdrop-filter` with a solid-color fallback background for browsers/OS settings where blur is disabled or unsupported).
- JavaScript: Vite's default build targets modern evergreen browsers; no need to support IE11 or legacy browsers.
- Test responsive behavior at common viewport widths: 375px (mobile), 768px (tablet), 1024px (small desktop/laptop), 1440px+ (large desktop).
- Test touch interactions specifically on iOS Safari and Android Chrome, since hover-dependent affordances must have touch-equivalent behavior (see Section 7).

---

## 25. Deliverables

This PRD satisfies the following required deliverable components (cross-referenced by section):

1. Product overview — Section 1
2. Product goals — Section 2
3. Target users — Section 3
4. UX goals — Section 4
5. Information architecture — Section 5
6. Page/section structure — Section 6
7. Detailed feature requirements — Sections 6–10
8. UI/UX requirements — Sections 3, 6–10, 23
9. Animation guidelines — Section 4 (principles) + per-section behavior notes
10. Responsive behavior — Section 12
11. Accessibility requirements — Section 13
12. Performance requirements — Section 14
13. SEO requirements — Section 15
14. Technology stack — Section 5 (input) + Section 29 (final recommendation)
15. Component architecture — Section 16
16. Data architecture — Section 17
17. Folder structure — Section 16
18. Security considerations — Section 22
19. Optional features — Section 21
20. Development priorities — Section 26
21. Acceptance criteria — Section 27

---

## 26. Development Priority

### P0 — Must Have (MVP; site is not launch-ready without these)
- Hero, About, Skills, Projects, Experience, Education, Contact, Footer sections (all with real content, no placeholders)
- Responsive layout across mobile/tablet/desktop
- Working navigation (desktop + mobile hamburger) with smooth scroll
- Contact form with full validation and all UX states (loading/success/error), even if final email delivery is stubbed behind a swappable integration point
- Downloadable CV link/button
- Core accessibility requirements (semantic HTML, keyboard nav, focus states, alt text, form labels, reduced-motion support)
- Basic SEO (title, meta description, favicon, OG tags, semantic headings)
- Scroll-triggered entrance animations for each section (respecting reduced motion)
- Data-driven content architecture (`data/` directory, typed)

### P1 — Should Have (materially improves quality/impact, implement immediately after P0)
- Featured-project visual emphasis in the Projects grid
- Active-section highlighting in navigation
- Contact form fully wired to a real email delivery service (EmailJS/Resend)
- Structured data (JSON-LD Person schema)
- Scroll progress indicator
- Project detail modal for expanded case-study content
- Social preview image (OG image) custom-designed rather than generic

### P2 — Nice to Have (post-launch enhancements)
- Dark/light theme toggle
- Project filtering by category/technology
- GitHub activity integration
- Command palette
- Custom 404 page (if additional routes are ever added)
- Analytics integration
- View transitions between states/sections

---

## 27. Acceptance Criteria

### Hero Section
- Developer name is clearly visible as the dominant `<h1>` element without scrolling on all target breakpoints.
- Professional title is displayed directly beneath/alongside the name.
- Primary CTA ("View Projects") scrolls smoothly to `#projects` and is reachable via keyboard.
- All social links open the correct destination (GitHub/LinkedIn in new tab, email via `mailto:`).
- Hero layout has no overlap, clipping, or overflow at 375px, 768px, 1024px, and 1440px+ widths.
- Entrance animation completes without blocking any interactive element from being clicked/tapped/focused during the animation.
- With `prefers-reduced-motion: reduce` enabled, entrance animation is skipped or reduced to a simple opacity fade with no transform/movement.

### About Section
- All listed content types (intro, background, interests, focus, philosophy) are present and each under the length guidance in Section 19.
- Any displayed statistic is accurate and traceable to real data (no fabricated numbers).
- Section reflows to a single-column stacked layout below the `md` breakpoint with no overlapping text/image.

### Skills Section
- Every listed technology renders with both an icon and a visible text label.
- No numeric percentage-based proficiency claims are present unless explicitly re-approved.
- Grid adapts from the specified desktop column count down to 2 columns on mobile without icon/text truncation or overlap.
- Hover state is visually distinct on desktop; tapping on touch devices does not require a hover-only interaction to access any information.

### Projects Section
- At least 3 real projects are present with no placeholder/lorem ipsum text or broken image links.
- The designated featured project is visually distinguished from the rest of the grid.
- Every project card's GitHub link resolves to a real, working repository; live demo links (where present) resolve to a working deployment.
- Card hover/tap reveals or emphasizes the CTA(s) without requiring pixel-perfect hover targeting on mobile.
- Grid reflows to 1 column on mobile, without cards being cut off or requiring horizontal scroll.

### Experience Section
- Each entry displays company/organization, position, period, responsibilities, and technologies used.
- Timeline renders correctly (no overlapping entries, no broken connecting line) at all breakpoints.
- Achievements are stated in concrete terms (specific outcomes/technologies/scope), not generic filler phrases.

### Education Section
- Each entry displays institution, degree/program, and study period at minimum.
- Certifications (if any) are visually distinguishable from formal education entries.

### Contact Section
- Form validates Name, Email, and Message according to the rules in Section 10 and blocks submission on invalid input with visible, specific inline errors.
- Submitting a valid form triggers the loading state, then either the success state or a recoverable error state — form never fails silently.
- Submitting the form does not lose previously entered data on an error response.
- Email and social links function correctly and match the same links used in Hero/Footer.

### Navigation
- All section links scroll to the correct section, accounting for sticky navbar height offset (target heading is not hidden behind the navbar after scroll).
- Mobile menu opens and closes via hamburger tap, explicit close icon, tap-outside, and Escape key.
- Active section is visually indicated in the nav as the user scrolls, updating without requiring a click.
- All nav items are reachable and operable via keyboard alone, in logical tab order.

### Responsive Design (global)
- No horizontal scrollbar appears at any of the four tested breakpoints (375/768/1024/1440+).
- No component exhibits layout shift (CLS) greater than 0.1 during normal page load and scroll.
- All touch targets measure at least 44×44px on mobile.

### Accessibility (global)
- Automated audit (e.g., axe or Lighthouse Accessibility) reports no critical or serious violations.
- Full keyboard traversal of the page (Tab/Shift+Tab) reaches every interactive element in logical order with a visible focus indicator at each stop.
- All images have appropriate `alt` text or are correctly marked decorative.

### Performance (global)
- Lighthouse mobile scores meet or exceed the targets stated in Section 14 on a production build.
- Largest Contentful Paint element (hero heading/image) renders within an acceptable threshold on a throttled mobile connection (target < 2.5s).

### SEO (global)
- Page has a unique, descriptive title and meta description.
- Open Graph and Twitter Card tags are present and render a correct preview when tested (e.g., via a social debugger tool).
- Exactly one `<h1>` exists on the page, and heading levels do not skip (no `<h2>` directly followed by `<h4>`, etc.).

---

## 28. Final PRD Requirements — Confirmation

Every requirement in this document is written to be specific, actionable, technically realistic, testable, and prioritized per Section 26. Library/technology recommendations are justified inline at the point of use (Sections 5, 6.1–6.3, 10, 14, 16, 17) rather than listed without rationale. The document intentionally avoids code-level implementation (per instruction) and focuses on requirements, structure, and acceptance criteria only.

---

## 29. Recommended Final Tech Stack

| Layer | Choice | Justification |
|---|---|---|
| Build tool | Vite | Fast dev server, minimal config, excellent TypeScript/React support, small production bundles |
| Framework | React 18+ | Industry-standard, component-driven, aligns with "fullstack developer" positioning |
| Language | TypeScript | Type safety for data models (Section 17), reduces runtime bugs, signals engineering maturity to technical reviewers |
| Styling | Tailwind CSS | Rapid, consistent, utility-first styling; mobile-first responsive utilities map directly to Section 12 requirements |
| UI primitives | shadcn/ui + Radix UI (as needed for Modal, Tooltip) | Accessible-by-default primitives (focus trapping, ARIA handled), avoids reinventing complex accessible components from scratch |
| Icons | Lucide React (UI icons) + Simple Icons (tech/brand logos) | Consistent stroke-based icon set for UI; accurate brand logos for the Skills section |
| Animation | Framer Motion (Motion for React) | Declarative, React-idiomatic, built-in `prefers-reduced-motion` support patterns, sufficient for all specified animations without needing GSAP |
| Routing | React Router (only if a custom 404 or project detail pages are added) | Avoid adding this dependency at all if the MVP remains a true single page with anchor links only |
| Form handling | React Hook Form + Zod | Minimal re-renders, strong TypeScript-first schema validation, directly supports all form states in Section 23 |
| Contact delivery | EmailJS (fastest to ship, no backend needed) or Resend (if a serverless function is introduced) | Both avoid exposing SMTP credentials client-side when configured per provider guidance |
| SEO | React Helmet Async (or Vite plugin equivalent) | Manage `<title>`/meta tags per Section 15 without server-side rendering |
| Smooth scroll (optional) | Native CSS `scroll-behavior: smooth` by default; Lenis only if a more refined scroll feel is explicitly desired | Avoid adding Lenis unless the native behavior is judged insufficient — extra dependency must earn its place per Section 5 |
| Scroll detection | Native Intersection Observer via a custom `useInView`-style hook | Avoids adding `react-intersection-observer` unless the native wrapper proves insufficient |
| Deployment | Vercel or Netlify | Zero-config static hosting, automatic HTTPS, preview deployments, generous free tier |

---

## 30. Recommended Project Architecture

Follows the folder structure and responsibilities defined in Section 16, with the data-driven approach in Section 17 as the core architectural principle: **presentation components never hardcode content; content lives exclusively in `src/data/` and is strongly typed via `src/types/`.**

Rendering flow: `App.tsx` composes `components/sections/*` in the order defined in Section 5 → each section pulls its data slice from `src/data/` → each section renders `components/cards/*` and `components/ui/*` for repeated/styled elements → `components/animations/*` wraps sections/cards for consistent scroll-reveal behavior → `hooks/` supplies cross-cutting concerns (active section tracking, reduced-motion detection, media queries) to `components/navigation/*` and `components/animations/*`.

---

## 31. MVP Feature List

- Hero with name, title, value prop, dual CTAs, social links
- About with real bio content and optional accurate stats
- Skills grouped by category with icons and labels
- Minimum 3 real projects, one visually featured, all with working links
- Experience timeline with at least one real entry (formal or freelance/project-based)
- Education section with at least one entry
- Fully validated, stateful contact form (loading/success/error), wired to a real or clearly stubbed delivery mechanism
- Responsive desktop/tablet/mobile navigation with smooth scroll and mobile hamburger menu
- Footer with nav links, socials, dynamic copyright year
- Core accessibility compliance (Section 13)
- Core SEO tags (Section 15)
- Scroll-reveal entrance animations across all sections, reduced-motion compliant

---

## 32. Development Roadmap

**Phase 1 — Foundation**
Set up Vite + React + TypeScript + Tailwind; establish folder structure (Section 16); define all TypeScript types (Section 17); scaffold `data/` files with real content collected from the developer.

**Phase 2 — Core Layout & Navigation**
Build layout wrappers, desktop navbar, mobile hamburger menu, smooth-scroll behavior, and the reusable UI primitives (Button, Badge, SectionHeading).

**Phase 3 — Content Sections (P0)**
Implement Hero, About, Skills, Projects, Experience, Education, Contact, Footer using real data, in that order, each meeting its Section 27 acceptance criteria before moving to the next.

**Phase 4 — Animation Pass**
Layer in Framer Motion entrance/scroll-reveal animations per Section 4 across all sections; verify `prefers-reduced-motion` handling throughout.

**Phase 5 — Accessibility & Performance Audit**
Run automated accessibility checks, manual keyboard-navigation pass, Lighthouse audit; fix contrast, focus-order, and performance issues before considering P0 complete.

**Phase 6 — SEO & Metadata**
Add title/meta/OG/Twitter tags, favicon set, JSON-LD structured data, verify social preview rendering.

**Phase 7 — P1 Enhancements**
Active-section nav highlighting, real email delivery integration, project detail modal, scroll progress indicator.

**Phase 8 — P2 Enhancements (optional, post-launch)**
Theme toggle, project filtering, GitHub activity integration, analytics, custom 404.

---

## 33. Acceptance Checklist (Pre-Launch)

- [ ] All P0 features implemented and meeting Section 27 criteria
- [ ] No placeholder/lorem ipsum content anywhere in the live build
- [ ] Verified responsive at 375px, 768px, 1024px, 1440px+ with no horizontal overflow
- [ ] Keyboard-only navigation traverses the entire page with visible focus states
- [ ] `prefers-reduced-motion` verified to disable/reduce all animations
- [ ] Lighthouse (mobile) ≥ 90 Performance, ≥ 95 Accessibility, ≥ 95 Best Practices, ≥ 95 SEO
- [ ] Contact form tested for validation errors, successful submission, and failure/recovery
- [ ] All external links (GitHub, LinkedIn, live demos) verified working and open safely (`rel="noopener noreferrer"`)
- [ ] Favicon, OG image, and social preview verified via a link-preview debugging tool
- [ ] No console errors/warnings in production build
- [ ] `.env`/secrets excluded from version control, no keys present in client bundle inspection

---

## 34. Potential Future Improvements

- Multi-language support (i18n) if targeting international opportunities
- Blog/writing section to demonstrate communication skills and SEO longevity
- Case-study-style deep dives per project (dedicated route per project rather than modal)
- Automated project sync from GitHub API (auto-pull repo description/stars/last-updated)
- Visitor analytics dashboard for the developer's own insight (privacy-respecting, e.g., Plausible)
- A/B testing different hero value propositions to optimize recruiter engagement
- Light theme as a genuinely designed second theme rather than a simple inversion, if user research suggests demand
