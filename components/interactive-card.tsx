'use client';

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import type { PointerEvent, ReactNode } from 'react';

type InteractiveCardProps = {
  children: ReactNode;
  className?: string;
};

export function InteractiveCard({
  children,
  className = '',
}: InteractiveCardProps) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [5, -5]),
    { stiffness: 220, damping: 22 },
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-5, 5]),
    { stiffness: 220, damping: 22 },
  );

  function tiltToPointer(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== 'mouse') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetTilt() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      className={className}
      style={
        reduceMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 1100 }
      }
      onPointerMove={tiltToPointer}
      onPointerLeave={resetTilt}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
