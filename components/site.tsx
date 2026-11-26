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
      <h2 className="mt-4 text-3xl font-extrabold leading-[1.02] tracking-[-0.045em] text-ink sm:text-5xl">
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
    <section
      className="stage-panel relative overflow-hidden px-5 pb-14 pt-48 text-center text-white sm:px-8 sm:pb-20 sm:pt-52"
    >
      <Container className="relative z-10 flex flex-col items-center">
        <p className="rounded-full bg-lime px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-ink sm:text-xs">
          {eyebrow}
        </p>
        <h1 className="mt-7 max-w-5xl text-balance text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-xl">
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
  fullWidth = false,
  onDark = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  fullWidth?: boolean;
  onDark?: boolean;
}) {
  return (
    <MagneticLink
      href={href}
      secondary={secondary}
      fullWidth={fullWidth}
      onDark={onDark}
    >
      {children}
    </MagneticLink>
  );
}

export function EventCta() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="stage-panel relative overflow-hidden rounded-none px-7 py-12 text-white sm:rounded-[2rem] sm:px-14 sm:py-16">
        <div className="relative z-10 grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <Eyebrow>Save your seat</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
              One Saturday. 200 people. Conversations that move you forward.
            </h2>
            <p className="mt-4 text-white/65">
              Saturday 3 April 2027 · Ibadan, Oyo State
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
  { href: '/team', label: 'Team' },
  { href: '/merch', label: 'Merch' },
  { href: '/partners', label: 'Partners' },
  { href: '/#sponsors', label: 'Sponsors' },
  { href: '/register', label: 'Register' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Container className="flex flex-col gap-7 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" aria-label="Beyond Code home" className="w-fit">
          <Image
            src="/assets/beyond-code-logo-white.png"
            alt="Beyond Code"
            width={180}
            height={80}
            className="h-10 w-auto"
          />
        </Link>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/65 transition hover:text-lime"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-white/45">© 2027 Beyond Code</p>
      </Container>
    </footer>
  );
}

export function FeatureCard({
  number,
  title,
  children,
  accent = 'violet',
  tone = 'paper',
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  accent?: 'violet' | 'lime' | 'tangerine';
  tone?: 'paper' | 'violet' | 'tangerine' | 'lime' | 'ink';
}) {
  const accents = {
    violet: 'text-violet',
    lime: 'text-[#669500]',
    tangerine: 'text-tangerine',
  };
  const surfaces = {
    paper: 'border-black/[0.08] bg-white',
    violet: 'border-violet bg-violet text-white',
    tangerine: 'border-tangerine bg-tangerine text-white',
    lime: 'border-lime bg-lime text-ink',
    ink: 'border-ink bg-ink text-white',
  };
  const numberColor =
    tone === 'paper'
      ? accents[accent]
      : tone === 'lime'
        ? 'text-ink/65'
        : 'text-white/70';
  const copyColor =
    tone === 'paper'
      ? 'text-black/60'
      : tone === 'lime'
        ? 'text-ink/75'
        : 'text-white/80';

  return (
    <article
      className={`group relative isolate h-full overflow-hidden rounded-[1.5rem] border p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-card sm:p-7 ${surfaces[tone]}`}
    >
      {tone !== 'paper' && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full border-[18px] border-current opacity-[0.06] shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition duration-700 group-hover:rotate-12 group-hover:scale-110"
        />
      )}
      <div className="relative z-10">
        <span className={`text-sm font-extrabold ${numberColor}`}>{number}</span>
        <h3
          className={`mt-5 text-xl font-extrabold tracking-tight ${
            tone === 'paper' || tone === 'lime' ? 'text-ink' : 'text-white'
          }`}
        >
          {title}
        </h3>
        <p className={`mt-3 text-sm leading-relaxed ${copyColor}`}>{children}</p>
      </div>
    </article>
  );
}
