import { Monitor, Server, Database } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { StaggerContainer, StaggerItem } from '../animations/StaggerContainer';

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor className="w-5 h-5" />,
  server: <Server className="w-5 h-5" />,
  database: <Database className="w-5 h-5" />,
};

export function Skills() {
  return (
    <section id="stack" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-emerald mb-4">
              <span>02 / ARCHITECTURE &amp; TOOLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering Toolkit
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-4 md:mt-0 font-light">
            Battle-tested libraries, systems, and protocols used to craft resilient cloud platforms and high-throughput web applications.
          </p>
        </div>
      </RevealOnScroll>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => (
          <StaggerItem key={i}>
            <div className="rounded-2xl bg-[#121212] border border-white/10 p-7 hover:border-brand-emerald/40 transition-all duration-300 group h-full">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-emerald mb-6 group-hover:scale-110 transition-transform">
                {iconMap[category.icon]}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
              <p className="text-xs text-neutral-400 mb-6 font-light">
                {category.description}
              </p>
              <ul className="space-y-3 font-mono text-xs text-neutral-300">
                {category.skills.map((skill, j) => (
                  <li
                    key={j}
                    className={`flex items-center justify-between ${
                      j < category.skills.length - 1
                        ? 'pb-2 border-b border-white/5'
                        : ''
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                      {skill.name}
                    </span>
                    <span className="text-neutral-500 text-[10px]">{skill.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
