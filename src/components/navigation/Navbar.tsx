import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/experience';
import { useActiveSection } from '../../hooks/useActiveSection';

const sectionIds = ['work', 'about', 'stack', 'experience', 'contact'];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    },
    [mobileMenuOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-3 md:gap-8 px-4 md:px-6 py-2.5 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 max-w-5xl w-full transition-all duration-300 ${
            scrolled ? 'bg-[#121212]/90' : 'bg-[#121212]/80'
          }`}
          aria-label="Main navigation"
        >
          {/* Status Badge */}
          <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-brand-emerald/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-neutral-200 hidden sm:inline">
              Available for Opportunities
            </span>
            <span className="text-xs font-medium tracking-wide text-neutral-200 sm:hidden">
              Available
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 text-xs font-medium text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`hover:text-white transition-colors duration-200 flex items-center gap-1.5 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-white'
                    : ''
                }`}
                aria-current={
                  activeSection === link.href.replace('#', '') ? 'true' : undefined
                }
              >
                {link.label}
                {link.badge && (
                  <span className={`text-[10px] font-mono ${link.badgeColor}`}>
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black font-semibold text-xs tracking-tight hover:bg-brand-emerald transition-all duration-300 shadow-md"
          >
            <span>Let's Talk</span>
            <span className="text-sm leading-none">↗</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-neutral-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setMobileMenuOpen(false);
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`text-2xl font-semibold tracking-tight transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-brand-emerald'
                    : 'text-neutral-300 hover:text-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                onClick={handleNavClick}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="mt-4 px-8 py-3 rounded-full bg-brand-emerald text-black font-bold text-sm tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              onClick={handleNavClick}
            >
              Let's Talk ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
