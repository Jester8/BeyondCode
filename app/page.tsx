import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { InteractiveCard } from '@/components/interactive-card';
import { KineticTitle } from '@/components/kinetic-title';
import {
  ButtonLink,
  Container,
  Eyebrow,
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

const reasons = [
  ['01', 'Real numbers', 'Users, naira, weeks and mistakes. Specifics are what you take home.'],
  ['02', 'Honest feedback', 'Live audits, a live build and a panel show what works while you watch.'],
  ['03', 'The Ask Board', 'Bring one ask and one offer. Meet people who can help with yours.'],
  ['04', 'Games and demos', 'Breakout games and a demo corner keep the conversation going.'],
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10">
            <div className="hero-entrance inline-flex items-center gap-2 rounded-full border border-tangerine/20 bg-tangerine/[0.06] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.13em] text-tangerine">
              <span className="h-2 w-2 rounded-full bg-tangerine" />
              Ibadan · 27 March 2027
            </div>
            <KineticTitle />
            <p className="hero-entrance-delayed mt-6 text-xl font-bold tracking-tight text-ink sm:text-2xl">
              The Business of Tech
            </p>
            <p className="hero-entrance-delayed mt-4 max-w-xl text-base leading-relaxed text-black/60 sm:text-lg">
              Everything that happens after the code. A focused day for 200
              tech professionals to trade real numbers, honest feedback and
              useful introductions.
            </p>
            <div className="hero-entrance-delayed mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/register">Reserve your seat</ButtonLink>
              <ButtonLink href="/programme" secondary>
                Explore the programme
              </ButtonLink>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-black/10 pt-6 text-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-black/40">
                  When
                </p>
                <p className="mt-1 font-bold">11:00am – 3:00pm</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-black/40">
                  Where
                </p>
                <p className="mt-1 font-bold">Ibadan, Oyo State</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-black/40">
                  Seats
                </p>
                <p className="mt-1 font-bold">200, limited</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -left-7 top-10 h-24 w-24 rounded-full bg-lime/25 blur-2xl sm:-left-10 sm:h-36 sm:w-36" />
            <div className="absolute -right-6 bottom-7 h-32 w-32 rounded-full bg-violet/15 blur-3xl" />
            <div className="relative aspect-[1.08] overflow-hidden rounded-[2rem] bg-paper">
              <Image
                src="/assets/workshop-collaboration.jpg"
                alt="A small group of technology professionals working through an idea together"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/35 bg-white/90 p-5 shadow-card backdrop-blur sm:bottom-7 sm:left-7 sm:right-7">
                <Eyebrow>Real people. Real work.</Eyebrow>
                <p className="mt-2 text-lg font-extrabold tracking-tight text-ink sm:text-xl">
                  A room where your next conversation could change everything.
                </p>
              </div>
              <span className="float-gently absolute right-4 top-4 rounded-full bg-lime px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-ink sm:right-6 sm:top-6">
                The business of tech
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-label="Beyond Code topics"
        className="border-y border-black/[0.06] bg-paper py-5"
      >
        <p className="sr-only">
          Markets, product, trust, money, communication, technology and people.
        </p>
        <div className="topic-marquee">
          <div className="topic-marquee-track" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-6 px-6 text-sm font-extrabold uppercase tracking-[0.16em] text-ink sm:gap-9 sm:px-9 sm:text-base"
              >
                {['Markets', 'Product', 'Trust', 'Money', 'Communication', 'People'].map(
                  (topic) => (
                    <span key={topic} className="flex items-center gap-6 sm:gap-9">
                      {topic}
                      <span className="h-2 w-2 rounded-full bg-tangerine" />
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="The event in numbers" className="border-y border-black/[0.06] bg-paper">
        <Container className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-4 sm:py-10">
          {[
            ['200', 'People'],
            ['4', 'Hours'],
            ['4', 'Sessions'],
            ['5', 'Guest speakers'],
          ].map(([number, label]) => (
            <Reveal key={label}>
              <p className="text-4xl font-extrabold tracking-[-0.06em] text-ink sm:text-5xl">
                {number}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-violet">
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
                  accent={index % 2 === 0 ? 'tangerine' : 'violet'}
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
            See the full programme <span aria-hidden="true">→</span>
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
              className="text-sm font-bold text-violet transition hover:text-tangerine"
            >
              Why people come →
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

      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <Reveal>
              <SectionHeading eyebrow="Guest speakers">
                Meet the people behind the ideas.
              </SectionHeading>
            </Reveal>
            <Link
              href="/speakers"
              className="text-sm font-bold text-violet transition hover:text-tangerine"
            >
              View all speakers →
            </Link>
          </div>
          <div className="mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            {[
              {
                name: 'Olusanya Samuel A.',
                role: 'Convener, Beyond Code',
                image: '/assets/sam-web.jpg',
              },
              {
                name: 'Abigail Akenawe',
                role: 'CEO, Nexspire Solutions',
                image: '/assets/Abigail.jpg',
              },
            ].map((speaker, index) => (
              <Reveal key={speaker.name} delay={index * 70}>
                <InteractiveCard className="h-full">
                  <Link
                    href={index === 0 ? '/speakers/olusanya-samuel' : '/speakers'}
                    className="group block h-full overflow-hidden rounded-3xl border border-black/[0.07] bg-white transition-shadow duration-300 hover:shadow-card"
                  >
                    <div className="relative aspect-[0.92] overflow-hidden bg-white">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-extrabold text-ink">{speaker.name}</h3>
                      <p className="mt-1 text-sm text-black/55">{speaker.role}</p>
                    </div>
                  </Link>
                </InteractiveCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="sponsors" className="border-y border-black/[0.06] bg-paper py-16 sm:py-20">
        <Container className="grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal>
            <SectionHeading eyebrow="Our partners">Meet our sponsors.</SectionHeading>
            <p className="mt-4 max-w-2xl text-black/60">
              Sponsor announcements are coming soon. Interested in supporting
              Beyond Code? We would love to hear from you.
            </p>
          </Reveal>
          <ButtonLink href="mailto:samuelolu407@gmail.com?subject=Beyond%20Code%202027%20sponsorship">
            Talk about sponsorship
          </ButtonLink>
        </Container>
      </section>

      <EventCta />
    </main>
  );
}
