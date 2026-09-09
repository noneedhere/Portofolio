import { tickerItems } from '../../data/experience';

export function TechTicker() {
  const items = tickerItems;

  return (
    <section
      id="ticker"
      className="py-6 border-y border-white/5 bg-[#0b0b0b] overflow-hidden"
    >
      <div className="relative w-full flex items-center overflow-x-hidden">
        <div className="flex whitespace-nowrap animate-ticker gap-10 md:gap-16 items-center text-xs md:text-sm font-mono tracking-wider text-neutral-400">
          {/* First set */}
          {items.map((item, i) => (
            <span key={`a-${i}`} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald" />
              {item.text}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((item, i) => (
            <span key={`b-${i}`} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald" />
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
