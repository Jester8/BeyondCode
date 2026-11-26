import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { KineticTitle } from '@/components/kinetic-title';
import { ArrowUpRightIcon } from '@/components/icons';
import { MerchBundleFeature } from '@/components/merch-bundle-feature';
import { merchProducts } from '@/components/merch-products';
import { PartnerOpportunityCards } from '@/components/partner-opportunity-cards';
import { partnerOpportunities } from '@/components/partner-opportunities';
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
    description:
      'How Nigerians decide to trust and buy: positioning, naira pricing, brand signals and social proof.',
  },
  {
    label: 'Live build',
    title: 'The Build: Shipping Faster with AI',
    description:
      'A working feature built live, with an honest look at where AI saves hours and where it gets things wrong.',
  },
  {
    label: 'Practical clinic',
    title: 'Communication and Ethics',
    description:
      'Proposals that get replies, clear expectations on price and timelines, and the hard calls on data and money.',
  },
  {
    label: 'Closing panel',
    title: 'The Honest Panel',
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
      <section className="stage-panel relative flex min-h-[680px] items-center justify-center overflow-hidden px-5 pb-16 pt-[190px] text-center text-white sm:px-8 sm:pt-[205px]">
        <Container className="relative z-10 flex flex-col items-center">
          <KineticTitle />
          <p className="hero-entrance-delayed mt-5 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
            The Business of Tech
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
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
            Everything that happens after the code. A focused day for 200 tech
            professionals to trade real numbers, honest feedback and useful
            introductions.
          </p>
          <div className="hero-entrance-delayed mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/register">Reserve your seat</ButtonLink>
            <ButtonLink href="/programme" secondary>
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
        <Container className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-4 sm:py-10">
          {[
            ['200', 'People'],
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
                <FeatureCard
                  number={`0${index + 1} / ${session.label}`}
                  title={session.title}
                  tone={sessionTones[index]}
                >
                  {session.description}
                </FeatureCard>
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
                Bring something meaningful to the room.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/60">
                These open opportunities show how partners could support the
                day. No sponsors have been announced yet.
              </p>
            </Reveal>
            <Link
              href="/partners"
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-white transition hover:text-lime"
            >
              Explore every opportunity
              <ArrowUpRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="mt-10">
            <PartnerOpportunityCards
              opportunities={partnerOpportunities.slice(0, 3)}
              compact
            />
          </div>
        </Container>
      </section>

      <EventCta />
    </main>
  );
}
