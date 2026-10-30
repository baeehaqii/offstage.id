import type { CSSProperties } from "react";

// Splits text into staggered words for the headline rise; `from` continues the stagger across spans.
export function words(text: string, from = 0) {
  return text.split(" ").flatMap((w, i) => [
    i ? " " : null,
    <span key={i} className="word" style={{ "--i": from + i } as CSSProperties}>
      {w}
    </span>,
  ]);
}

export const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.3em] md:text-[13px]";
export const display = "font-serif text-[clamp(44px,6.7vw,96px)] leading-[0.95] tracking-[-0.01em]";
