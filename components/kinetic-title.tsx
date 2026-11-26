'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function KineticTitle() {
  const reduceMotion = useReducedMotion();
  const wordTransition = (delay: number) => ({
    duration: reduceMotion ? 0 : 0.9,
    delay: reduceMotion ? 0 : delay,
    ease: 'easeOut' as const,
  });

  return (
    <h1
      aria-label="Beyond Code"
      className="mt-7 text-[clamp(4rem,13vw,9rem)] font-extrabold leading-[0.86] tracking-[-0.075em] text-white"
    >
      <span className="block overflow-hidden" aria-hidden="true">
        <motion.span
          className="block"
          initial={reduceMotion ? false : { y: '110%' }}
          animate={{ y: 0 }}
          transition={wordTransition(0.08)}
        >
          Beyond
        </motion.span>
      </span>
      <span className="block overflow-hidden" aria-hidden="true">
        <motion.span
          className="block"
          initial={reduceMotion ? false : { y: '110%' }}
          animate={{ y: 0 }}
          transition={wordTransition(0.2)}
        >
          Code<span className="text-lime">.</span>
        </motion.span>
      </span>
    </h1>
  );
}
