'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type SessionTone = 'tangerine' | 'violet' | 'lime' | 'ink';

const toneStyles: Record<SessionTone, { front: string; text: string; detail: string }> = {
  tangerine: {
    front: 'border-tangerine bg-tangerine text-white',
    text: 'text-white',
    detail: 'text-white/75',
  },
  violet: {
    front: 'border-violet bg-violet text-white',
    text: 'text-white',
    detail: 'text-white/75',
  },
  lime: {
    front: 'border-lime bg-lime text-ink',
    text: 'text-ink',
    detail: 'text-ink/70',
  },
  ink: {
    front: 'border-ink bg-ink text-white',
    text: 'text-white',
    detail: 'text-white/75',
  },
};

export function SessionFlipCard({
  number,
  title,
  summary,
  description,
  tone,
}: {
  number: string;
  title: string;
  summary: string;
  description: string;
  tone: SessionTone;
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
          className={`session-flip-face ${colors.front}`}
          aria-hidden={flipped || undefined}
        >
          <span>
            <span className={`text-xs font-extrabold uppercase tracking-[0.16em] ${colors.detail}`}>
              {number}
            </span>
            <span className={`mt-8 block text-xl font-extrabold leading-tight tracking-tight sm:text-2xl ${colors.text}`}>
              {title}
            </span>
            <span className={`mt-3 block text-sm leading-relaxed ${colors.detail}`}>
              {summary}
            </span>
          </span>
          <span className={`mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] ${colors.detail}`}>
            Tap to view full details
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
