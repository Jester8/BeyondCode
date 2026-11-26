'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useState } from 'react';

type Speaker = {
  name: string;
  role: string;
  category: string;
  accent: string;
  mark?: string;
  image?: string;
  href?: string;
};

const speakers: Speaker[] = [
  {
    name: 'Olusanya Samuel A.',
    role: 'Convener, Beyond Code',
    category: 'Confirmed speaker',
    image: '/assets/sam-web.jpg',
    href: '/speakers/olusanya-samuel',
    accent: 'bg-[#6536D8]',
  },
  {
    name: 'Speaker announcement soon',
    role: 'A new perspective is joining the room.',
    category: 'Guest speaker',
    mark: '01',
    accent: 'bg-[#FF6547]',
  },
  {
    name: 'More voices coming soon',
    role: 'Stay tuned for the next announcement.',
    category: 'Guest speaker',
    mark: '02',
    accent: 'bg-[#C7C9F5]',
  },
  {
    name: 'Meet our next guest soon',
    role: 'Practical experience. Honest ideas.',
    category: 'Guest speaker',
    mark: '03',
    accent: 'bg-[#94CD01]',
  },
  {
    name: 'New perspectives, soon',
    role: 'More details will be shared shortly.',
    category: 'Guest speaker',
    mark: '04',
    accent: 'bg-[#F4AD36]',
  },
];

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const reduceMotion = useReducedMotion();
  const card = (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group overflow-hidden border border-white/10 bg-white/[0.04]"
    >
      <div
        className={`relative aspect-[0.84] overflow-hidden ${speaker.accent}`}
      >
        {speaker.image ? (
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            sizes="(max-width: 767px) 86vw, (max-width: 1023px) 44vw, 30vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden"
          >
            <span className="absolute -right-5 -top-10 select-none text-[15rem] font-extrabold leading-none tracking-[-0.12em] text-ink/10 sm:text-[18rem]">
              {speaker.mark}
            </span>
            <div className="absolute inset-x-7 bottom-8">
              <span className="mb-3 block h-1 w-12 bg-ink/60" />
              <p className="max-w-[8ch] text-4xl font-extrabold uppercase leading-[0.86] tracking-[-0.06em] text-ink sm:text-5xl">
                To be announced
              </p>
            </div>
          </div>
        )}
        <span className="absolute right-4 top-4 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink [clip-path:polygon(7%_0,100%_0,93%_50%,100%_100%,7%_100%,0_50%)] sm:text-xs">
          {speaker.category}
        </span>
      </div>
      <div className="min-h-28 p-5 sm:p-6">
        <h3 className="text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
          {speaker.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {speaker.role}
        </p>
      </div>
    </motion.article>
  );

  return speaker.href ? (
    <Link
      href={speaker.href}
      aria-label={`View profile of ${speaker.name}`}
      className="block h-full focus-visible:outline-white"
    >
      {card}
    </Link>
  ) : (
    card
  );
}

export function SpeakerRoster() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const breakpoint = window.matchMedia('(max-width: 767px)');
    const updateBreakpoint = () => setIsMobile(breakpoint.matches);
    updateBreakpoint();
    breakpoint.addEventListener('change', updateBreakpoint);

    return () => breakpoint.removeEventListener('change', updateBreakpoint);
  }, []);

  useEffect(() => {
    if (reduceMotion || !isMobile) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % speakers.length);
    }, 4800);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isMobile, reduceMotion]);

  return (
    <>
      <div className="hidden grid-cols-2 gap-5 md:grid lg:grid-cols-3">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.name} speaker={speaker} />
        ))}
      </div>

      <div
        aria-label="Beyond Code speakers"
        aria-roledescription="carousel"
        role="region"
        className="md:hidden"
      >
        <div className="overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={speakers[activeIndex].name}
              initial={reduceMotion ? false : { opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: 40 }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                ease: 'easeInOut',
              }}
            >
              <SpeakerCard speaker={speakers[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2">
          {speakers.map((speaker, index) => (
            <button
              key={speaker.name}
              type="button"
              aria-label={`Show ${speaker.name}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-lime'
                  : 'w-1.5 bg-white/35 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
