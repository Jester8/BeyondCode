'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { MouseEvent, PointerEvent } from 'react';

export function useResponsiveCarousel(itemCount: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const swipeOccurred = useRef(false);

  useEffect(() => {
    const breakpoint = window.matchMedia('(max-width: 767px)');
    const updateBreakpoint = () => setIsMobile(breakpoint.matches);
    updateBreakpoint();
    breakpoint.addEventListener('change', updateBreakpoint);

    return () => breakpoint.removeEventListener('change', updateBreakpoint);
  }, []);

  useEffect(() => {
    if (reduceMotion || !isMobile || itemCount < 2) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % itemCount);
    }, 4800);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isMobile, itemCount, reduceMotion]);

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    swipeOccurred.current = false;
    swipeStart.current = { x: event.clientX, y: event.clientY };
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start) return;

    const horizontal = event.clientX - start.x;
    const vertical = event.clientY - start.y;
    if (Math.abs(horizontal) < 48 || Math.abs(horizontal) < Math.abs(vertical)) {
      return;
    }

    swipeOccurred.current = true;
    setActiveIndex((index) =>
      horizontal < 0
        ? (index + 1) % itemCount
        : (index - 1 + itemCount) % itemCount,
    );
  }

  function onClickCapture(event: MouseEvent<HTMLDivElement>) {
    if (!swipeOccurred.current) return;
    event.preventDefault();
    event.stopPropagation();
    swipeOccurred.current = false;
  }

  function onPointerCancel() {
    swipeStart.current = null;
  }

  return {
    activeIndex,
    setActiveIndex,
    reduceMotion,
    swipeHandlers: {
      onPointerDown,
      onPointerUp,
      onClickCapture,
      onPointerCancel,
    },
  };
}
