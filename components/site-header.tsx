'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@/components/icons';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/programme', label: 'Programme' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/merch', label: 'Merch' },
  { href: '/partners', label: 'Partners' },
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
        className="overflow-hidden bg-ink py-2 text-white"
      >
        <p className="sr-only">
          Saturday 3 April 2027, Ibadan, Oyo State, 11:00am to 3:00pm, 200
          seats.
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
                  '200 seats',
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
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
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

          <div className="flex items-center gap-8">
            <nav
              aria-label="Primary"
              className="hidden items-center gap-6 lg:flex"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={`text-sm font-bold transition-colors hover:text-violet ${
                    pathname === link.href ? 'text-violet' : 'text-ink/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/register"
                className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-ink px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-violet"
              >
                Register
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </nav>
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

      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto grid min-h-11 max-w-6xl grid-cols-3 items-center gap-2 px-5 text-[10px] sm:px-8 sm:text-sm">
          <p className="whitespace-nowrap font-bold text-ink">
            Saturday 3 April 2027
          </p>
          <p className="whitespace-nowrap text-center text-black/60">Ibadan, Oyo State</p>
          <p className="whitespace-nowrap text-right font-extrabold text-violet">
            200 seats · 11am
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
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="block rounded-2xl px-4 py-3 text-sm font-semibold text-black/70 hover:bg-paper"
          >
            {link.label}
          </Link>
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
