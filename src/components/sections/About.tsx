import { personalInfo } from '../../data/personalInfo';
import { stats } from '../../data/experience';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerContainer, StaggerItem } from '../animations/StaggerContainer';

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <RevealOnScroll>
        <div className="rounded-3xl bg-[#121212] border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Ambient corner glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Philosophy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-emerald mb-6">
                <span>01 / ABOUT &amp; PHILOSOPHY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                I engineer digital products that balance clean, intuitive interfaces with scalable systems.
              </h2>
              <div className="mt-8 space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
                {personalInfo.longBio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-white/10">
                {personalInfo.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-neutral-300 font-mono"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-emerald" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Key Metrics */}
            <StaggerContainer className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
              {stats.map((stat, i) => (
                <StaggerItem key={i}>
                  <div className="p-6 rounded-2xl bg-[#161616] border border-white/5 hover:border-brand-emerald/30 transition-all duration-300">
                    <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {stat.value}
                      {stat.suffix && (
                        <span className="text-brand-emerald">{stat.suffix}</span>
                      )}
                    </p>
                    <p className="text-xs font-medium text-neutral-400 mt-2">
                      {stat.label}
                    </p>
                    <p
                      className={`text-[11px] mt-1 font-mono ${
                        stat.highlighted
                          ? 'text-brand-emerald'
                          : 'text-neutral-500'
                      }`}
                    >
                      {stat.detail}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
