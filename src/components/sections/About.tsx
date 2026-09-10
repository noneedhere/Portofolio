import { personalInfo } from '../../data/personalInfo';
import { stats } from '../../data/experience';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerContainer, StaggerItem } from '../animations/StaggerContainer';
import { SectionBadge } from '../ui/SectionBadge';
import { MetricCard } from '../ui/MetricCard';

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
              <SectionBadge label="01 / ABOUT &amp; PHILOSOPHY" className="mb-6" />
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
                  <MetricCard stat={stat} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

