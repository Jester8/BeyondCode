'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type SessionTone = 'tangerine' | 'violet' | 'lime' | 'ink';

const toneStyles: Record<
  SessionTone,
  { panel: string; text: string; detail: string; number: string }
> = {
  tangerine: {
    panel: 'bg-tangerine',
    text: 'text-white',
    detail: 'text-white/75',
    number: 'text-white/10',
  },
  violet: {
    panel: 'bg-violet',
    text: 'text-white',
    detail: 'text-white/75',
    number: 'text-white/10',
  },
  lime: {
    panel: 'bg-lime',
    text: 'text-ink',
    detail: 'text-ink/70',
    number: 'text-ink/10',
  },
  ink: {
    panel: 'bg-ink',
    text: 'text-white',
    detail: 'text-white/75',
    number: 'text-white/10',
  },
};

export function SessionFlipCard({
  number,
  label,
  title,
  summary,
  description,
  tone,
  showHint = true,
}: {
  number: string;
  label: string;
  title: string;
  summary: string;
  description: string;
  tone: SessionTone;
  showHint?: boolean;
}) {
  const [flipped, setFlipped] = useState(false);
  const reduceMotion = useReducedMotion();
  const colors = toneStyles[tone];

  return (
    <button
      type="button"
      aria-pressed={flipped}
      aria-label={`${flipped ? 'Hide details for' : 'Show details for'} ${title}`}
      onClick={() => setFlipped((value) => !value)}
      className="session-flip-card block w-full text-left"
    >
      <motion.span
        className="session-flip-inner"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.62,
          ease: [0.2, 0.7, 0.2, 1],
        }}
      >
        <span
          className="session-flip-face border-black/[0.07] bg-white"
          aria-hidden={flipped || undefined}
        >
          <span className={`relative flex min-h-[190px] flex-1 flex-col justify-between overflow-hidden p-6 sm:min-h-[205px] sm:p-7 ${colors.panel}`}>
            <span
              aria-hidden="true"
              className={`absolute -right-2 -top-8 select-none text-[12rem] font-extrabold leading-none tracking-[-0.12em] ${colors.number}`}
            >
              {number}
            </span>
            <span className="relative z-10 inline-flex w-fit bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink [clip-path:polygon(7%_0,100%_0,93%_50%,100%_100%,7%_100%,0_50%)] sm:text-xs">
              {label}
            </span>
            <span className={`relative z-10 text-xs font-extrabold uppercase tracking-[0.16em] ${colors.detail}`}>
              Session {number}
            </span>
          </span>
          <span className="flex min-h-32 flex-1 flex-col bg-white p-5 sm:p-6">
            <span className="text-xl font-extrabold leading-tight tracking-tight text-ink sm:text-2xl">
              {title}
            </span>
            <span className="mt-2 text-sm leading-relaxed text-black/60">
              {summary}
            </span>
            {showHint && (
              <span className="mt-auto pt-5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-violet">
                Tap to view full details
              </span>
            )}
          </span>
        </span>
        <span
          className="session-flip-face session-flip-back border-ink bg-ink p-6 text-white sm:p-7"
          aria-hidden={!flipped || undefined}
        >
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-lime">
            Session details
          </span>
          <span className="mt-5 block text-lg font-bold leading-relaxed text-white/85 sm:text-xl">
            {description}
          </span>
          <span className="mt-8 text-xs font-extrabold uppercase tracking-[0.14em] text-white/55">
            Tap to flip back
          </span>
        </span>
      </motion.span>
    </button>
  );
}
