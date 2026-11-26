import Image from 'next/image';
import Link from 'next/link';
import { MagneticLink } from '@/components/magnetic-link';

export const whatsappLink =
  'https://wa.me/2348059674789?text=Hi%20Sam%2C%20I%20would%20like%20to%20register%20for%20Beyond%20Code%202027.';

export function Container({
  children,
  className = '',
  maxWidth = '6xl',
}: {
  children: React.ReactNode;
  className?: string;
  maxWidth?: '3xl' | '6xl';
}) {
  return (
    <div
      className={`mx-auto w-full ${maxWidth === '3xl' ? 'max-w-3xl' : 'max-w-6xl'} px-5 sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  children,
  className = '',
}: {
  eyebrow: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] text-ink sm:text-5xl">
        {children}
      </h2>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-black/5 bg-paper pb-14 pt-36 sm:pb-20 sm:pt-44">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-ink sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/60 sm:text-xl">
          {description}
        </p>
      </Container>
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <MagneticLink
      href={href}
      secondary={secondary}
    >
      {children}
    </MagneticLink>
  );
}

export function EventCta() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="overflow-hidden rounded-[2rem] bg-ink px-7 py-12 text-white sm:px-14 sm:py-16">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <Eyebrow>Save your seat</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
              One Saturday. 200 people. Conversations that move you forward.
            </h2>
            <p className="mt-4 text-white/65">
              Saturday 27 March 2027 · Ibadan, Oyo State
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/register">Register now</ButtonLink>
            <a
              href={whatsappLink}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Message us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/programme', label: 'Programme' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/#sponsors', label: 'Sponsors' },
  { href: '/register', label: 'Register' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container className="flex flex-col gap-7 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" aria-label="Beyond Code home" className="w-fit">
          <Image
            src="/assets/beyond-code-logo-white.png"
            alt="Beyond Code"
            width={180}
            height={80}
            className="h-10 w-auto brightness-0"
          />
        </Link>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-black/55 transition hover:text-tangerine"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-black/45">© 2027 Beyond Code</p>
      </Container>
    </footer>
  );
}

export function FeatureCard({
  number,
  title,
  children,
  accent = 'violet',
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  accent?: 'violet' | 'lime' | 'tangerine';
}) {
  const accents = {
    violet: 'text-violet',
    lime: 'text-[#669500]',
    tangerine: 'text-tangerine',
  };

  return (
    <article className="h-full rounded-3xl border border-black/[0.07] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <span className={`text-sm font-extrabold ${accents[accent]}`}>
        {number}
      </span>
      <h3 className="mt-5 text-xl font-extrabold tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-black/60">{children}</p>
    </article>
  );
}
