import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personalInfo';
import { socialLinks } from '../../data/socials';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Mail } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  github: (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  mail: <Mail className="w-3.5 h-3.5" />,
};


export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
        },
      };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between items-center overflow-hidden grid-bg-pattern"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[850px] h-[500px] hero-radial-glow pointer-events-none rounded-full blur-3xl" />

      {/* Massive Typography */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 text-center mt-6 md:mt-10 select-none z-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-extrabold tracking-tighter text-[14vw] md:text-[11.5vw] leading-none uppercase flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10"
          variants={itemVariants}
        >
          <span className="text-white drop-shadow-sm">{personalInfo.firstName}</span>
          <span className="stroke-text">{personalInfo.lastName}</span>
        </motion.h1>
      </motion.div>

      {/* Content Grid */}
      <motion.div
        className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-[-6vw] sm:mt-[-8vw] md:mt-[-9.5vw] z-10 flex flex-col md:flex-row items-center justify-between gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Info Card */}
        <motion.div
          className="w-full md:w-1/3 order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start pt-6 md:pt-20"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-brand-emerald">
              {personalInfo.title}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug max-w-md">
            {personalInfo.tagline}
          </h2>
          <p className="text-xs text-neutral-400 mt-2 font-normal max-w-sm">
            {personalInfo.shortBio}
          </p>
          <div className="mt-6">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-neutral-900 border border-white/10 hover:border-brand-emerald/60 text-white text-xs font-medium hover:bg-neutral-800 transition-all duration-300 shadow-xl group"
            >
              <span>View Featured Work</span>
              <span className="text-neutral-400 group-hover:text-brand-emerald transition-transform duration-200 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </motion.div>

        {/* Center Portrait */}
        <motion.div
          className="w-full md:w-5/12 order-1 md:order-2 flex justify-center relative"
          variants={itemVariants}
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-t from-brand-emerald/20 via-transparent to-transparent opacity-70 blur-md group-hover:opacity-100 transition duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 max-w-[320px] sm:max-w-[360px] md:max-w-[390px] aspect-[3/4]">
              <img
                alt={`${personalInfo.name} - Junior Fullstack Developer Portrait`}
                className="w-full h-full object-cover object-top filter grayscale contrast-[1.1] brightness-95 group-hover:grayscale-0 transition-all duration-700 ease-out"
                src={personalInfo.profileImageUrl}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[11px]">
                <span className="text-neutral-300 font-mono">{personalInfo.location}</span>
                <span className="text-brand-emerald font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                  Open to Relocation
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Social Links */}
        <motion.div
          className="w-full md:w-1/3 order-3 flex flex-col items-center md:items-end gap-2.5 pt-4 md:pt-20"
          variants={itemVariants}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="w-48 flex items-center justify-between px-4 py-2.5 rounded-full bg-neutral-900/90 border border-white/10 hover:border-brand-emerald/50 hover:bg-[#161616] text-neutral-300 hover:text-white text-xs font-medium transition-all duration-200"
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              aria-label={link.label}
            >
              <span className="flex items-center gap-2">
                {iconMap[link.icon]}
                {link.label}
              </span>
              <span className="text-neutral-500 text-xs">↗</span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="mt-8 flex items-center justify-center"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <a
          href="#ticker"
          className="text-neutral-500 hover:text-brand-emerald transition-colors duration-200 text-xs flex flex-col items-center gap-1 font-mono"
        >
          <span>EXPLORE ECOSYSTEM</span>
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
