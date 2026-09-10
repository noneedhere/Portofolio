import type { MetricStat } from '../../types';

interface MetricCardProps {
  stat: MetricStat;
  className?: string;
}

export function MetricCard({ stat, className = '' }: MetricCardProps) {
  return (
    <div
      className={`p-6 rounded-2xl bg-[#161616] border border-white/5 hover:border-brand-emerald/30 transition-all duration-300 ${className}`}
    >
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
          stat.highlighted ? 'text-brand-emerald' : 'text-neutral-500'
        }`}
      >
        {stat.detail}
      </p>
    </div>
  );
}
