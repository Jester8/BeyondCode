'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function KineticTitle() {
  const reduceMotion = useReducedMotion();
  const word = (value: string, startDelay: number) =>
    Array.from(value).map((letter, index) => (
      <motion.span
        key={`${value}-${index}`}
        className="inline-block"
        initial={reduceMotion ? false : { opacity: 0, y: '0.35em' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.28,
          delay: reduceMotion ? 0 : startDelay + index * 0.065,
          ease: 'easeOut',
        }}
      >
        {letter}
      </motion.span>
    ));

  return (
    <>
      <h1
        aria-label="Beyond Code"
        className="mt-7 text-[clamp(4rem,13vw,9rem)] font-extrabold leading-[0.86] tracking-[-0.075em] text-white"
      >
        <span className="block" aria-hidden="true">
          {word('Beyond', 0.08)}
        </span>
        <span className="block" aria-hidden="true">
          {word('Code', 0.52)}
          <motion.span
            className="inline-block text-lime"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, delay: reduceMotion ? 0 : 0.78 }}
          >
            .
          </motion.span>
        </span>
      </h1>
      <motion.p
        className="mt-5 text-2xl font-extrabold tracking-tight text-white sm:text-4xl"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.45,
          delay: reduceMotion ? 0 : 0.98,
          ease: 'easeOut',
        }}
      >
        The Business of Tech
      </motion.p>
    </>
  );
}
