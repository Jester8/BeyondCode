'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/programme', label: 'Programme' },
  { href: '/speakers', label: 'Speakers' },
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
    <header className="fixed inset-x-0 top-0 z-50">
      <section
        aria-label="Event information"
        className="overflow-hidden bg-ink py-2 text-white"
      >
        <p className="sr-only">
          Saturday 27 March 2027, Ibadan, Oyo State, 11:00am to 3:00pm, 200
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
                  'Saturday 27 March 2027',
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

      <div className="px-4 pt-3 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-black/[0.07] bg-white/90 px-4 py-2.5 shadow-sm shadow-black/[0.03] backdrop-blur-xl sm:px-6">
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

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className="text-sm font-semibold text-black/60 transition hover:text-tangerine aria-[current=page]:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/register"
              className="inline-flex min-h-10 items-center rounded-full bg-tangerine px-5 text-sm font-bold text-white transition hover:bg-[#e93d2a]"
            >
              Register
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-ink md:hidden"
            >
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              <span aria-hidden="true" className="flex w-4 flex-col gap-1">
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-full bg-current" />
              </span>
            </button>
          </div>
        </div>

        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className={`mx-1 mt-2 rounded-3xl border border-black/[0.07] bg-white p-3 shadow-card transition duration-200 md:hidden ${
            menuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-2 opacity-0'
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold text-black/70 hover:bg-paper"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#sponsors"
            className="block rounded-2xl px-4 py-3 text-sm font-semibold text-black/70 hover:bg-paper"
          >
            Sponsors
          </Link>
        </nav>
      </div>
    </header>
  );
}
