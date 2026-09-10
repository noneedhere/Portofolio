import { projects } from '../../data/projects';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import type { Project } from '../../types';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <RevealOnScroll delay={index * 0.1}>
      <article className="rounded-3xl bg-[#121212] border border-white/10 p-8 sm:p-10 lg:p-12 hover:border-brand-emerald/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-brand-emerald bg-brand-emerald/10 px-2.5 py-1 rounded-md">
              {project.caseNumber}
            </span>
            <span className="text-xs font-mono text-neutral-400">{project.category}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.name}
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed font-light">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-3 py-1 rounded-full bg-neutral-900 border border-white/10 text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-4">
            <a
              href={project.primaryCta.url}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-emerald text-black font-semibold text-xs tracking-tight hover:bg-emerald-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{project.primaryCta.label}</span>
              <span>↗</span>
            </a>
            <a
              href={project.secondaryCta.url}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{project.secondaryCta.label}</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Project Screenshot */}
        <div className="lg:col-span-6">
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            <img
              src={project.image}
              alt={`${project.name} — project screenshot`}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}

export function Projects() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-emerald mb-4">
              <span>03 / SELECTED WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Engineering Cases
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-neutral-400">
            Showing 3 selected projects
          </div>
        </div>
      </RevealOnScroll>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
