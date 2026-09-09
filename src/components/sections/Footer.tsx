import { personalInfo } from '../../data/personalInfo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8 bg-[#080808] text-xs text-neutral-500 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p>
            © {currentYear} {personalInfo.name.toUpperCase()} — ALL RIGHTS RESERVED.
          </p>
        </div>
        {/* Timezone indicator */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
          <span className="text-neutral-400">
            {personalInfo.locationDetail} · ACTIVE
          </span>
        </div>
        {/* Back to top */}
        <div>
          <a
            href="#hero"
            className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
          >
            <span>BACK TO TOP</span>
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
