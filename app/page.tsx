import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { KineticTitle } from '@/components/kinetic-title';
import { ArrowUpRightIcon } from '@/components/icons';
import { MerchBundleFeature } from '@/components/merch-bundle-feature';
import { merchProducts } from '@/components/merch-products';
import { partnerOpportunities } from '@/components/partner-opportunities';
import { SessionFlipCard } from '@/components/session-flip-card';
import { SpeakerRoster } from '@/components/speaker-roster';
import {
  ButtonLink,
  Container,
  EventCta,
  FeatureCard,
  SectionHeading,
} from '@/components/site';

const sessions = [
  {
    label: 'Opening talk and live audit',
    title: 'Perception Marketing',
    summary: 'A practical look at how trust shapes what people buy.',
    description:
      'How Nigerians decide to trust and buy: positioning, naira pricing, brand signals and social proof.',
  },
  {
    label: 'Live build',
    title: 'The Build: Shipping Faster with AI',
    summary: 'Watch a working feature get built live with AI.',
    description:
      'A working feature built live, with an honest look at where AI saves hours and where it gets things wrong.',
  },
  {
    label: 'Practical clinic',
    title: 'Communication and Ethics',
    summary: 'Build clearer proposals and make better decisions about data and money.',
    description:
      'Proposals that get replies, clear expectations on price and timelines, and the hard calls on data and money.',
  },
  {
    label: 'Closing panel',
    title: 'The Honest Panel',
    summary: 'An honest conversation about building, selling and surviving in tech.',
    description:
      'Four practitioners talk openly about building, selling and surviving in Nigerian tech.',
  },
];

const sessionTones = ['tangerine', 'violet', 'lime', 'ink'] as const;

const reasons = [
  ['01', 'Real numbers', 'Users, naira, weeks and mistakes. Specifics are what you take home.'],
  ['02', 'Honest feedback', 'Live audits, a live build and a panel show what works while you watch.'],
  ['03', 'The Ask Board', 'Bring one ask and one offer. Meet people who can help with yours.'],
  ['04', 'Games and demos', 'Breakout games and a demo corner keep the conversation going.'],
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section       className="home-hero relative flex min-h-[680px] items-center justify-center overflow-hidden bg-ink px-0 pb-16 pt-[118px] text-center text-white sm:px-8 sm:pt-[205px]">
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/assets/business-of-tech-event.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain object-center opacity-65 sm:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/55 to-ink/90" />
        </div>
        <Container className="relative z-10 flex flex-col items-center">
          <KineticTitle />
          <div className="mt-6 hidden flex-wrap justify-center gap-2 sm:flex">
            {['Saturday 3 April 2027', '11:00am – 3:00pm', 'Ibadan, Oyo State'].map(
              (detail, index) => (
                <span
                  key={detail}
                  className={`rounded-md px-4 py-2 text-[11px] font-extrabold uppercase tracking-wide text-ink sm:text-sm ${
                    index === 0
                      ? 'bg-lime'
                      : index === 1
                        ? 'bg-tangerine text-white'
                        : 'bg-white'
                  }`}
                >
                  {detail}
                </span>
              ),
            )}
          </div>
          <p className="hero-entrance-delayed mt-7 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Everything that happens after the code. A day for tech professionals
            to trade real numbers, honest feedback and useful introductions.
          </p>
          <div className="hero-entrance-delayed mt-8 grid w-full max-w-[360px] grid-cols-2 gap-2 sm:flex sm:w-auto sm:max-w-none sm:gap-3">
            <ButtonLink href="/register" fullWidth>
              Reserve your seat
            </ButtonLink>
            <ButtonLink href="/programme" secondary fullWidth onDark>
              Explore the programme
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section
        aria-label="Beyond Code topics"
        className="border-y border-white/10 bg-ink py-5 text-white"
      >
        <p className="sr-only">
          Markets, product, trust, money, communication, technology and people.
        </p>
        <div className="topic-marquee">
          <div className="topic-marquee-track" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-6 px-6 text-sm font-extrabold uppercase tracking-[0.16em] text-white sm:gap-9 sm:px-9 sm:text-base"
              >
                {['Markets', 'Product', 'Trust', 'Money', 'Communication', 'People'].map(
                  (topic) => (
                    <span key={topic} className="flex items-center gap-6 sm:gap-9">
                      {topic}
                    <span className="h-2 w-2 rounded-full bg-lime" />
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="The event in numbers" className="border-y border-white/10 bg-ink text-white">
        <Container className="grid grid-cols-3 gap-3 py-8 sm:gap-6 sm:py-10">
          {[
            ['4', 'Hours'],
            ['4', 'Sessions'],
            ['5', 'Guest speakers'],
          ].map(([number, label]) => (
            <Reveal key={label}>
              <p className="text-4xl font-extrabold tracking-[-0.06em] text-white sm:text-5xl">
                {number}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-lime">
                {label}
              </p>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <Reveal>
              <SectionHeading eyebrow="Inside the room">
                Come for the insight. Leave with people in your corner.
              </SectionHeading>
            </Reveal>
            <Reveal>
              <p className="max-w-xl text-base leading-relaxed text-black/60 sm:ml-auto sm:text-lg">
                Small-room energy, honest work sessions and introductions that
                can continue long after the event. Bring one ask, one offer and
                an open mind.
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <figure className="group relative min-h-[300px] overflow-hidden rounded-3xl bg-paper sm:min-h-[390px]">
                <Image
                  src="/assets/workshop-collaboration.jpg"
                  alt="Technology professionals collaborating around a laptop"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6 pt-20 text-white sm:p-8 sm:pt-24">
                  <span className="text-xs font-bold uppercase tracking-widest text-lime">
                    Learn by doing
                  </span>
                  <p className="mt-2 max-w-md text-2xl font-extrabold leading-tight sm:text-3xl">
                    Ideas get sharper when you work through them together.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={90}>
              <figure className="group relative min-h-[300px] overflow-hidden rounded-3xl bg-paper sm:min-h-[390px]">
                <Image
                  src="/assets/event-networking.jpg"
                  alt="Attendees meeting and sharing ideas during a technology event"
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6 pt-20 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-lime">
                    Meet your people
                  </span>
                  <p className="mt-2 text-2xl font-extrabold leading-tight">
                    Make the introduction that opens the next door.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="A day with purpose">
              Four sessions, one honest conversation.
            </SectionHeading>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sessions.map((session, index) => (
              <Reveal key={session.title} delay={index * 70}>
                <SessionFlipCard
                  number={`0${index + 1}`}
                  label={session.label}
                  title={session.title}
                  summary={session.summary}
                  description={session.description}
                  tone={sessionTones[index]}
                />
              </Reveal>
            ))}
          </div>
          <Link
            href="/programme"
            className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-violet transition hover:gap-3"
          >
            See the full programme <ArrowUpRightIcon />
          </Link>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <Reveal>
              <SectionHeading eyebrow="Why attend">
                Built to get people talking.
              </SectionHeading>
            </Reveal>
            <Link
              href="/about#why"
              className="inline-flex items-center gap-2 text-sm font-bold text-violet transition hover:text-tangerine"
            >
              Why people come <ArrowUpRightIcon />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * 70}>
                <FeatureCard
                  number={number}
                  title={title}
                  accent={index === 2 ? 'lime' : 'violet'}
                >
                  {copy}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 text-white sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <Reveal>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime">
                Guest speakers
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl">
                Meet the people behind the ideas.
              </h2>
            </Reveal>
            <Link
              href="/speakers"
              className="group inline-flex items-center gap-3 text-sm font-bold text-white transition hover:text-lime"
            >
              View all speakers
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition group-hover:border-lime">
                <ArrowUpRightIcon />
              </span>
            </Link>
          </div>
          <div className="mt-10">
            <SpeakerRoster />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink">
                Beyond Code merch
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.02] tracking-[-0.045em] text-ink sm:text-5xl">
                A little piece of the room.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-black/60">
                Choose a color on any product page and order directly through
                WhatsApp.
              </p>
            </Reveal>
            <ButtonLink href="/merch">Explore the merch</ButtonLink>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {merchProducts.map((product) => (
              <Link
                key={product.name}
                href={`/merch/${product.slug}`}
                  aria-label={`Order Beyond Code ${product.name}; choose a color`}
                className="group overflow-hidden rounded-2xl border border-black/[0.07] bg-white sm:rounded-3xl"
              >
                <div className="relative aspect-[1.2] overflow-hidden bg-paper sm:aspect-[1.47]">
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className={
                      product.imageFit === 'contain'
                        ? 'object-contain p-2 sm:p-3'
                        : 'object-cover transition-transform duration-700 group-hover:scale-[1.04]'
                    }
                  />
                </div>
                <div className="p-3 sm:p-5">
                  <h3 className="text-sm font-extrabold text-ink sm:text-lg">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-ink sm:text-sm">
                    {product.price}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink sm:text-xs">
                    Order now
                    <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <MerchBundleFeature className="mt-5" />
        </Container>
      </section>

      <section id="sponsors" className="bg-ink py-16 text-white sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime">
                Sponsors & partners
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl">
                Open ways to be part of the room.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/60">
                No sponsors have been announced yet. Explore the roles available
                to organizations who want to support Beyond Code.
              </p>
            </Reveal>
          </div>
          <div className="partner-marquee mt-10 py-2">
            <p className="sr-only">
              Open opportunities:{' '}
              {partnerOpportunities.map((item) => item.title).join(', ')}.
            </p>
            <div className="partner-marquee-track" aria-hidden="true">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 items-center gap-3 px-2 sm:gap-4"
                >
                  {partnerOpportunities.map((opportunity) => (
                    <div
                      key={`${copy}-${opportunity.slug}`}
                      className="inline-flex h-24 min-w-[240px] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 sm:min-w-[280px] sm:px-5"
                    >
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/[0.04] text-center text-[9px] font-extrabold uppercase leading-tight tracking-[0.1em] text-lime">
                        Your
                        <br />
                        logo
                      </span>
                      <span>
                        <span className="block text-[9px] font-extrabold uppercase tracking-[0.16em] text-lime">
                          {opportunity.category}
                        </span>
                        <span className="mt-1 block text-sm font-extrabold text-white sm:text-base">
                          {opportunity.title}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="relative overflow-hidden rounded-none bg-ink px-7 py-12 text-white sm:rounded-[2rem] sm:px-14 sm:py-16">
          <div className="relative z-10 grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime">
                Get involved
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
                Sponsor. Partner. Be a part.
              </h2>
              <p className="mt-4 text-white/75">
                Help shape an event for the people building Nigeria’s
                technology community.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/partners">Explore opportunities</ButtonLink>
              <a
                href="mailto:samuelolu407@gmail.com?subject=Beyond%20Code%20partnership"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Talk to the team
              </a>
            </div>
          </div>
        </Container>
      </section>

      <EventCta />
    </main>
  );
}
