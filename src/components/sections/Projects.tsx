import { projects } from '../../data/projects';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import type { Project } from '../../types';

function TelemetryMockup() {
  return (
    <div className="bg-gradient-to-tr from-black to-neutral-900 rounded-2xl border border-white/10 p-6 shadow-2xl relative overflow-hidden group">
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-xs font-mono text-neutral-400">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 text-neutral-500">telemetry-cluster.internal:4000</span>
        </span>
        <span className="text-brand-emerald">99.98% Uptime</span>
      </div>
      <div className="space-y-3 font-mono text-xs">
        <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-white/5 flex items-center justify-between">
          <span className="text-neutral-400">P99 Query Response:</span>
          <span className="text-brand-emerald font-bold">42ms</span>
        </div>
        <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-white/5 flex items-center justify-between">
          <span className="text-neutral-400">Ingested Events (24h):</span>
          <span className="text-white font-bold">14,289,010</span>
        </div>
        <div className="h-28 rounded-xl bg-neutral-950 border border-white/5 p-4 flex items-end justify-between gap-1">
          <div className="w-full bg-brand-emerald/30 h-[45%] rounded-t" />
          <div className="w-full bg-brand-emerald/40 h-[60%] rounded-t" />
          <div className="w-full bg-brand-emerald/30 h-[30%] rounded-t" />
          <div className="w-full bg-brand-emerald/60 h-[80%] rounded-t" />
          <div className="w-full bg-brand-emerald/50 h-[65%] rounded-t" />
          <div className="w-full bg-brand-emerald h-[95%] rounded-t shadow-[0_0_12px_#00E599]" />
          <div className="w-full bg-brand-emerald/70 h-[75%] rounded-t" />
        </div>
      </div>
    </div>
  );
}

function CodeMockup() {
  return (
    <div className="bg-[#161616] rounded-2xl border border-white/10 p-6 shadow-2xl relative overflow-hidden">
      <div className="p-4 rounded-xl bg-neutral-950 border border-white/10 space-y-3 font-mono text-xs">
        <div className="flex justify-between items-center text-neutral-500">
          <span>PIPELINE: PROMPT_CHAIN_V2</span>
          <span className="text-brand-emerald">STREAM ACTIVE</span>
        </div>
        <div className="text-neutral-300 leading-relaxed font-mono">
          <span className="text-purple-400">const</span> pipeline ={' '}
          <span className="text-blue-400">new</span> AgentGraph({'{'}
          <br />
          {'  '}evaluator: <span className="text-brand-emerald">&quot;gpt-4o-mini&quot;</span>,
          <br />
          {'  '}fallback: <span className="text-brand-emerald">&quot;local-mistral-7b&quot;</span>,
          <br />
          {'  '}streamingBuffer: <span className="text-amber-400">true</span>
          <br />
          {'}'});
        </div>
        <div className="p-3 bg-neutral-900 rounded-lg border border-white/5 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-brand-emerald animate-ping" />
          <span className="text-[11px] text-neutral-400">
            Streaming: 114 tokens/sec · Latency 140ms
          </span>
        </div>
      </div>
    </div>
  );
}

function PerformanceMockup() {
  return (
    <div className="bg-gradient-to-br from-neutral-900 to-[#121212] rounded-2xl border border-white/10 p-6 shadow-2xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-white/10 pb-3">
          <span>CHECKOUT FLOW PERFORMANCE</span>
          <span className="text-brand-emerald">Lighthouse 100/100</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-black/50 p-4 rounded-xl border border-white/5">
            <p className="text-[11px] text-neutral-500 font-mono">FCP (First Contentful)</p>
            <p className="text-xl font-bold text-white mt-1">0.42s</p>
          </div>
          <div className="bg-black/50 p-4 rounded-xl border border-white/5">
            <p className="text-[11px] text-neutral-500 font-mono">TTFB (Edge Cache)</p>
            <p className="text-xl font-bold text-brand-emerald mt-1">28ms</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mockupComponents: Record<string, React.ReactNode> = {
  telemetry: <TelemetryMockup />,
  code: <CodeMockup />,
  performance: <PerformanceMockup />,
};

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
        <div className="lg:col-span-6">{mockupComponents[project.mockup]}</div>
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
            Showing 3 of 12 production repos
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
