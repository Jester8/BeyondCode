'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const MINIMUM_LOADER_DURATION_MS = 5000;
const FADE_DURATION_MS = 350;

export function SiteLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    const progressTimer = window.setInterval(() => {
      setProgress((current) =>
        Math.min(94, current + Math.max(1, Math.ceil((94 - current) * 0.1))),
      );
    }, 45);

    const pageReady = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
        return;
      }

      window.addEventListener('load', () => resolve(), { once: true });
    });

    let finishTimer = 0;
    let hideTimer = 0;
    let cancelled = false;

    Promise.all([pageReady, document.fonts.ready]).then(() => {
      if (cancelled) return;
      const progressEndTime = MINIMUM_LOADER_DURATION_MS - FADE_DURATION_MS;
      const remainingTime = Math.max(
        0,
        progressEndTime - (performance.now() - startedAt),
      );
      finishTimer = window.setTimeout(() => {
        window.clearInterval(progressTimer);
        setProgress(100);
        hideTimer = window.setTimeout(() => {
          setVisible(false);
        }, FADE_DURATION_MS);
      }, remainingTime);
    });

    return () => {
      cancelled = true;
      window.clearInterval(progressTimer);
      window.clearTimeout(finishTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden={progress === 100}
      className={`site-loader fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-ink px-6 py-10 text-white transition-opacity duration-300 motion-reduce:transition-none ${
        progress === 100 ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div aria-hidden="true" className="site-loader-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="site-loader-ring absolute left-1/2 top-1/2 h-[min(70vw,34rem)] w-[min(70vw,34rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/20"
      />
      <div aria-hidden="true" className="site-loader-orbit absolute left-1/2 top-1/2 h-[min(86vw,42rem)] w-[min(86vw,42rem)] rounded-full border border-dashed border-white/10" />
      <div aria-hidden="true" className="site-loader-scan absolute inset-x-0 top-0 h-40" />
      <div className="relative w-full max-w-md">
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-3 text-[9px] font-bold uppercase tracking-[0.24em] text-white/45">
          <span>Beyond Code / 2027</span>
          <span>System start</span>
        </div>
        <div className="mb-12 flex min-h-14 items-center justify-center">
          <Image
            src="/assets/beyond-code-logo-white.png"
            alt="Beyond Code"
            width={220}
            height={100}
            sizes="220px"
            className="h-14 w-auto object-contain"
          />
        </div>
        <p className="text-center text-[10px] font-extrabold uppercase tracking-[0.3em] text-lime">
          Initializing experience
        </p>
        <div className="mt-4 flex items-end justify-between gap-5">
          <p className="font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
            Beyond the expected
          </p>
          <span
            aria-hidden="true"
            className="font-display text-3xl font-bold tabular-nums tracking-tight text-lime sm:text-4xl"
          >
            {progress}%
          </span>
        </div>
        <div
          className="mt-5 h-1 overflow-hidden bg-white/10"
          role="progressbar"
          aria-label="Loading Beyond Code"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div
            className="h-full bg-lime transition-[width] duration-100 ease-out motion-reduce:transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
          <span>Connecting</span>
          <span>Ready {String(progress).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}
