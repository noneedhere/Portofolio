interface SectionBadgeProps {
  label: string;
  variant?: 'default' | 'highlight';
  className?: string;
}

export function SectionBadge({
  label,
  variant = 'default',
  className = '',
}: SectionBadgeProps) {
  const variantStyles = {
    default:
      'bg-white/5 border-white/10 text-brand-emerald',
    highlight:
      'bg-brand-emerald/10 border-brand-emerald/30 text-brand-emerald',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono ${variantStyles[variant]} ${className}`}
    >
      <span>{label}</span>
    </div>
  );
}
