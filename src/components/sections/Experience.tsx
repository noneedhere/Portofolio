import { experiences, educationEntries } from '../../data/experience';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerContainer, StaggerItem } from '../animations/StaggerContainer';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <RevealOnScroll>
        <div className="rounded-3xl bg-[#121212] border border-white/10 p-8 sm:p-12 lg:p-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-emerald mb-4">
                <span>04 / JOURNEY &amp; ROLES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Work Experience &amp; Leadership
              </h2>
            </div>
            <p className="text-neutral-400 text-xs font-mono mt-2 md:mt-0">
              2022 — PRESENT
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l border-white/10 ml-3 sm:ml-6 space-y-12 pl-6 sm:pl-10">
            {experiences.map((exp, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="relative group">
                  {/* Timeline Node */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#080808] border-2 group-hover:scale-125 transition-transform ${
                      exp.current
                        ? 'border-brand-emerald shadow-[0_0_10px_#00E599]'
                        : 'border-white/40 group-hover:border-brand-emerald'
                    }`}
                  />
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-emerald transition-colors">
                      {exp.position}{' '}
                      <span className="text-neutral-400 font-normal">
                        @ {exp.company}
                      </span>
                    </h3>
                    <span
                      className={`text-xs font-mono w-fit ${
                        exp.current
                          ? 'text-brand-emerald bg-brand-emerald/10 px-2.5 py-0.5 rounded-full'
                          : 'text-neutral-400'
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 max-w-3xl leading-relaxed mt-2 font-light">
                    {exp.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Education & Certifications Row */}
          <StaggerContainer className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationEntries.map((entry, i) => (
              <StaggerItem key={i}>
                <div className="p-5 rounded-2xl bg-[#161616] border border-white/5">
                  <span className="text-[10px] font-mono text-brand-emerald tracking-wider uppercase">
                    {entry.label}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1">{entry.title}</h4>
                  <p className="text-xs text-neutral-400 mt-1">{entry.subtitle}</p>
                  <p className="text-[11px] text-neutral-500 mt-2 font-mono">
                    {entry.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </RevealOnScroll>
    </section>
  );
}
