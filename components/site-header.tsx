'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@/components/icons';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const programmeLinks = [
  { href: '/programme', label: 'Programme overview' },
  { href: '/speakers', label: 'Speakers' },
];

const aboutLinks = [
  { href: '/about', label: 'About Beyond Code' },
  { href: '/team', label: 'Team' },
  { href: '/partners', label: 'Partners' },
];

const mobileSections = [
  {
    label: '',
    links: [
      { href: '/', label: 'Home' },
      { href: '/events', label: 'Events' },
    ],
  },
  { label: 'Programme', links: programmeLinks },
  { label: 'About', links: aboutLinks },
  { label: '', links: [{ href: '/merch', label: 'Merch' }] },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white">
      <section
        aria-label="Event information"
        className="hidden overflow-hidden bg-ink py-2 text-white sm:block"
      >
        <p className="sr-only">
          Saturday 3 April 2027, Ibadan, Oyo State, 11:00am to 3:00pm.
        </p>
        <div className="event-ticker" aria-hidden="true">
          <div className="event-ticker-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-5 px-5 text-[10px] font-extrabold uppercase tracking-[0.16em] sm:gap-8 sm:px-8 sm:text-xs"
              >
                {[
                  'Saturday 3 April 2027',
                  'Ibadan, Oyo State',
                  '11:00am — 3:00pm',
                  'The Business of Tech',
                ].map((detail) => (
                  <span key={detail} className="flex items-center gap-5 sm:gap-8">
                    <span className="text-lime">{detail}</span>
                    <span className="text-tangerine">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-b border-black/10">
        <div className="relative mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Beyond Code home" className="shrink-0">
            <Image
              src="/assets/beyond-code-logo-white.png"
              alt="Beyond Code"
              width={170}
              height={76}
              priority
              className="h-9 w-auto brightness-0"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-6"
          >
            <Link
              href="/"
              aria-current={pathname === '/' ? 'page' : undefined}
              className={`whitespace-nowrap text-sm font-bold transition-colors hover:text-violet ${
                pathname === '/' ? 'text-violet' : 'text-ink/70'
              }`}
            >
              Home
            </Link>
            <Link
              href="/events"
              aria-current={pathname === '/events' ? 'page' : undefined}
              className={`whitespace-nowrap text-sm font-bold transition-colors hover:text-violet ${
                pathname === '/events' ? 'text-violet' : 'text-ink/70'
              }`}
            >
              Events
            </Link>
            <details className="group relative">
              <summary
                className={`flex cursor-pointer list-none items-center gap-2 whitespace-nowrap text-sm font-bold transition-colors hover:text-violet [&::-webkit-details-marker]:hidden ${
                  pathname === '/programme' || pathname.startsWith('/speakers')
                    ? 'text-violet'
                    : 'text-ink/70'
                }`}
              >
                Programme
                <span className="h-1.5 w-1.5 rotate-45 border-b border-r border-current transition-transform group-open:-rotate-[135deg]" />
              </summary>
              <div className="invisible absolute left-1/2 top-full z-[60] min-w-48 -translate-x-1/2 pt-4 opacity-0 transition group-open:visible group-open:opacity-100">
                <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-card">
                  {programmeLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      className={`block whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-paper hover:text-violet ${
                        pathname === link.href ? 'text-violet' : 'text-ink/70'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </details>
            <details className="group relative">
              <summary
                className={`flex cursor-pointer list-none items-center gap-2 whitespace-nowrap text-sm font-bold transition-colors hover:text-violet [&::-webkit-details-marker]:hidden ${
                  pathname === '/about' ||
                  pathname.startsWith('/team') ||
                  pathname.startsWith('/partners')
                    ? 'text-violet'
                    : 'text-ink/70'
                }`}
              >
                About
                <span className="h-1.5 w-1.5 rotate-45 border-b border-r border-current transition-transform group-open:-rotate-[135deg]" />
              </summary>
              <div className="invisible absolute left-1/2 top-full z-[60] min-w-48 -translate-x-1/2 pt-4 opacity-0 transition group-open:visible group-open:opacity-100">
                <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-card">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      className={`block whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-paper hover:text-violet ${
                        pathname === link.href ? 'text-violet' : 'text-ink/70'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </details>
            <Link
              href="/merch"
              aria-current={pathname.startsWith('/merch') ? 'page' : undefined}
              className={`whitespace-nowrap text-sm font-bold transition-colors hover:text-violet ${
                pathname.startsWith('/merch') ? 'text-violet' : 'text-ink/70'
              }`}
            >
              Merch
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/register"
              className="group hidden min-h-11 items-center gap-3 rounded-full bg-ink px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-violet lg:inline-flex"
            >
              Register
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-11 w-11 place-items-center text-violet transition hover:text-ink lg:hidden"
            >
              <span className="sr-only">
                {menuOpen ? 'Close menu' : 'Open menu'}
              </span>
              <span aria-hidden="true" className="flex w-4 flex-col gap-1">
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden border-b border-black/10 bg-white sm:block">
        <div className="mx-auto hidden min-h-11 max-w-6xl grid-cols-3 items-center gap-2 px-5 text-[10px] sm:grid sm:px-8 sm:text-sm">
          <p className="whitespace-nowrap font-bold text-ink">
            Saturday 3 April 2027
          </p>
          <p className="whitespace-nowrap text-center text-black/60">Ibadan, Oyo State</p>
          <p className="whitespace-nowrap text-right font-extrabold text-violet">
            11am – 3pm
          </p>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`absolute right-4 top-full mt-2 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-black/10 bg-white p-3 shadow-card transition duration-200 lg:hidden ${
          menuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        {mobileSections.map((section, index) => (
          <div
            key={section.label || `section-${index}`}
            className={index > 0 ? 'mt-2 border-t border-black/5 pt-2' : ''}
          >
            {section.label && (
              <p className="px-4 pb-1 pt-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-black/40">
                {section.label}
              </p>
            )}
            {section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={`block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-paper ${
                  pathname === link.href ? 'text-violet' : 'text-black/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <Link
          href="/register"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-sm font-extrabold text-white transition-colors hover:bg-violet"
        >
          Register
          <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </nav>
    </header>
  );
}
