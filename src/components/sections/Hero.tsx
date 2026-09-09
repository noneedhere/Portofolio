import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personalInfo';
import { socialLinks } from '../../data/socials';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Github, Linkedin, Mail } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-3.5 h-3.5" />,
  linkedin: <Linkedin className="w-3.5 h-3.5" />,
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
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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
