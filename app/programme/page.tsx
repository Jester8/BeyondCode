import Image from 'next/image';
import { Reveal } from '@/components/reveal';
import {
  Container,
  EventCta,
  FeatureCard,
  PageIntro,
  SectionHeading,
} from '@/components/site';

const sessions = [
  {
    label: 'Opening talk and live audit',
    title: 'Perception Marketing: How Nigerians Decide to Trust and Buy',
    description:
      'Positioning, pricing in naira, brand signals and social proof, followed by a live audit of three attendee products.',
  },
  {
    label: 'Live build for engineers',
    title: 'The Build: Shipping Faster with AI',
    description:
      'A working feature built live with AI tools. Where AI saves hours, where it gets things wrong, and how to build for local conditions.',
  },
  {
    label: 'Practical clinic',
    title: 'Communication and Ethics: Doing Business People Trust',
    description:
      'Proposals and messages that get replies, honest expectations on price and timelines, and the hard calls on customer data and money.',
  },
  {
    label: 'Closing panel',
    title: 'The Honest Panel: Building, Selling and Surviving in Nigerian Tech',
    description:
      'Four practitioners from different corners of tech talk openly about what really happens beyond the code, with questions from the room.',
  },
];

export const metadata = {
  title: 'Programme',
  description: 'Explore the four practical sessions at Beyond Code 2027.',
};

export default function ProgrammePage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="The programme"
        title="Saturday, session by session."
        description="Four sessions on what happens after the code: perception, building with AI, communication and ethics, and a closing panel."
      />

      <section className="py-10 sm:py-14">
        <Container className="grid gap-4 sm:grid-cols-3">
          {[
            ['Date', 'Saturday 27 March 2027'],
            ['Time', '11:00am to 3:00pm'],
            ['Venue', 'Ibadan, Oyo State · to be confirmed'],
          ].map(([label, value], index) => (
            <Reveal key={label} delay={index * 70}>
              <div className="rounded-3xl border border-black/[0.07] bg-paper p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-violet">
                  {label}
                </p>
                <p className="mt-2 text-lg font-extrabold text-ink">{value}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container>
          <Reveal>
            <figure className="group relative min-h-[280px] overflow-hidden rounded-3xl bg-paper sm:min-h-[390px]">
              <Image
                src="/assets/workshop-collaboration.jpg"
                alt="A small team of tech professionals collaborating around a laptop"
                fill
                sizes="100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20 text-white sm:p-9 sm:pt-28">
                <span className="text-xs font-bold uppercase tracking-widest text-lime">
                  Practical by design
                </span>
                <p className="mt-2 max-w-2xl text-2xl font-extrabold leading-tight sm:text-4xl">
                  Four sessions. One honest day. Real work in the room.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="The sessions">
              Four sessions, one honest day.
            </SectionHeading>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {sessions.map((session, index) => (
              <Reveal key={session.title} delay={(index % 2) * 90}>
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
          <Reveal className="mt-16">
            <SectionHeading eyebrow="Around the sessions">
              More than talks.
            </SectionHeading>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ['Welcome', 'Olusanya Samuel opens the day and sets the tone.'],
              ['Networking and games', 'A break, the Ask Board, breakout games and a demo corner.'],
              ['Closing and open networking', 'The day closes and the room stays on to keep talking.'],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={index * 70}>
                <FeatureCard number={`0${index + 1}`} title={title}>
                  {copy}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <EventCta />
    </main>
  );
}
