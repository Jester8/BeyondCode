'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ArrowUpIcon } from '@/components/icons';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 480);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: reduceMotion ? 'auto' : 'smooth',
        })
      }
      className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-ink text-white shadow-card transition hover:-translate-y-1 hover:bg-violet focus-visible:outline-white sm:bottom-8 sm:right-8"
    >
      <ArrowUpIcon />
    </button>
  );
}
