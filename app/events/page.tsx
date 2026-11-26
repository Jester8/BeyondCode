import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowUpRightIcon } from '@/components/icons';
import {
  ButtonLink,
  Container,
  EventCta,
  FeatureCard,
  PageIntro,
  SectionHeading,
} from '@/components/site';

export const metadata = {
  title: 'Events',
  description:
    'Find upcoming Beyond Code events for people building, growing and shaping technology.',
};

const eventDetails = [
  ['Date', 'Saturday 3 April 2027'],
  ['Time', '11:00am – 3:00pm'],
  ['Location', 'Ibadan, Oyo State'],
  ['Capacity', '200 people'],
];

export default function EventsPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Beyond Code events"
        title="Good work starts with getting in the room."
        description="A thoughtful gathering for people building, growing and shaping technology. Come for practical ideas; leave with useful connections."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-lime" />
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-black/55">
                Upcoming event
              </p>
            </div>
            <article className="grid overflow-hidden rounded-[2rem] border border-black/[0.07] bg-white shadow-card lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[300px] bg-white sm:min-h-[440px] lg:min-h-[560px]">
                <Image
                  src="/assets/business-of-tech-event.png"
                  alt="Beyond Code: The Business of Tech neon conference poster with an auditorium audience"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-tangerine">
                  Beyond Code 2027
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
                  The Business of Tech
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-black/60">
                  Everything that happens after the code. Spend a day
                  trading real numbers, honest feedback and useful
                  introductions with tech professionals from across the
                  community.
                </p>
                <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-black/10 pt-6">
                  {eventDetails.map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-black/40">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm font-bold text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-7 grid w-full max-w-[360px] grid-cols-2 gap-2 sm:flex sm:w-auto sm:max-w-none sm:gap-3">
                  <ButtonLink href="/register" fullWidth>
                    Reserve your seat
                  </ButtonLink>
                  <ButtonLink href="/programme" secondary fullWidth>
                    View programme
                  </ButtonLink>
                </div>
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="A day with purpose">
              Practical ideas. Real people. Room to connect.
            </SectionHeading>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Learn by doing', 'A live audit, a practical build and candid conversation you can put to work.'],
              ['02', 'Meet your people', 'Find collaborators and peers through open networking and the Ask Board.'],
              ['03', 'Leave with direction', 'Take away useful ideas, specific feedback and a new connection to follow up with.'],
            ].map(([number, title, copy], index) => (
              <Reveal key={title} delay={index * 70}>
                <FeatureCard
                  number={number}
                  title={title}
                  accent={index === 1 ? 'lime' : 'violet'}
                >
                  {copy}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-10 md:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <SectionHeading eyebrow="Who you will meet">
              A room full of people moving tech forward.
            </SectionHeading>
            <p className="mt-5 max-w-xl leading-relaxed text-black/60">
              Founders, engineers, product people, marketers, students and
              operators—united by a curiosity about the business behind the
              technology.
            </p>
            <Link
              href="/speakers"
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-violet transition hover:gap-3"
            >
              Meet the speakers <ArrowUpRightIcon />
            </Link>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[1.35] overflow-hidden rounded-3xl bg-paper">
              <Image
                src="/assets/event-networking.jpg"
                alt="Attendees having a relaxed conversation at a technology gathering"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <EventCta />
    </main>
  );
}
