import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'emerald' | 'muted';
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const variantStyles = {
    default:
      'bg-neutral-900 border-white/10 text-neutral-300',
    emerald:
      'bg-brand-emerald/10 border-brand-emerald/30 text-brand-emerald',
    muted:
      'bg-white/5 border-white/10 text-neutral-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
