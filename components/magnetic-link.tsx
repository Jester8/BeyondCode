'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import Link from 'next/link';
import type { PointerEvent, ReactNode } from 'react';

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  fullWidth?: boolean;
  onDark?: boolean;
};

export function MagneticLink({
  href,
  children,
  secondary = false,
  fullWidth = false,
  onDark = false,
}: MagneticLinkProps) {
  const reduceMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });

  function moveWithPointer(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== 'mouse') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left - bounds.width / 2) * 0.16;
    const vertical = (event.clientY - bounds.top - bounds.height / 2) * 0.16;
    x.set(Math.max(-7, Math.min(7, horizontal)));
    y.set(Math.max(-7, Math.min(7, vertical)));
  }

  function resetPosition() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className={`inline-flex ${fullWidth ? 'w-full' : ''}`}
      style={reduceMotion ? undefined : { x, y }}
      onPointerMove={moveWithPointer}
      onPointerLeave={resetPosition}
    >
      <Link
        href={href}
        className={
          secondary
            ? `inline-flex items-center justify-center rounded-full border-2 font-extrabold uppercase transition duration-300 ${
                onDark
                  ? 'border-white text-white hover:bg-white hover:text-ink'
                  : 'border-current text-ink hover:bg-ink hover:text-white'
              } ${
                fullWidth
                  ? 'min-h-10 w-full whitespace-nowrap px-1 text-[9px] tracking-tight sm:min-h-12 sm:px-6 sm:text-sm sm:tracking-wide'
                  : 'min-h-12 px-6 text-sm tracking-wide'
              }`
            : `inline-flex items-center justify-center rounded-full bg-lime font-extrabold uppercase text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#a8dc24] hover:shadow-lg hover:shadow-black/10 ${
                fullWidth
                  ? 'min-h-10 w-full whitespace-nowrap px-1 text-[9px] tracking-tight sm:min-h-12 sm:px-6 sm:text-sm sm:tracking-wide'
                  : 'min-h-12 px-6 text-sm tracking-wide'
              }`
        }
      >
        {children}
      </Link>
    </motion.div>
  );
}
