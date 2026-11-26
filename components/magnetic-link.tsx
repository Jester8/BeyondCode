'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import Link from 'next/link';
import type { PointerEvent, ReactNode } from 'react';

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  secondary?: boolean;
};

export function MagneticLink({
  href,
  children,
  secondary = false,
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
      className="inline-flex"
      style={reduceMotion ? undefined : { x, y }}
      onPointerMove={moveWithPointer}
      onPointerLeave={resetPosition}
    >
      <Link
        href={href}
        className={
          secondary
            ? 'inline-flex min-h-12 items-center justify-center rounded-full border border-black/15 px-6 text-sm font-bold text-ink transition duration-300 hover:border-black/35 hover:bg-black/[0.03]'
            : 'inline-flex min-h-12 items-center justify-center rounded-full bg-tangerine px-6 text-sm font-bold text-white transition duration-300 hover:bg-[#e93d2a] hover:shadow-lg hover:shadow-tangerine/20'
        }
      >
        {children}
      </Link>
    </motion.div>
  );
}
