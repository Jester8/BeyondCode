import Image from 'next/image';
import { Reveal } from '@/components/reveal';
import {
  Container,
  EventCta,
  FeatureCard,
  PageIntro,
  SectionHeading,
} from '@/components/site';

const audiences = [
  ['Founders', 'Building a product and hunting for the first customers or the first cheque.'],
  ['Engineers', 'Ready to understand the business that pays for the code.'],
  ['Product people', 'Shaping what gets built and learning what actually sells.'],
  ['Sales and marketing', 'Selling tech in a market that rewards trust and clarity.'],
  ['Students and early careers', 'Seeing what happens after graduation, straight from people doing it.'],
  ['Investors and operators', 'Meeting builders early and sharing what you look for.'],
];

export const metadata = {
  title: 'About',
  description: 'Learn what Beyond Code is and who should be in the room.',
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="About the event"
        title="Everything after the code."
        description="Beyond Code is a focused day for 200 tech professionals. No fluff, no filler. Just practical sessions, real numbers and people who can help."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <figure className="group relative min-h-[280px] overflow-hidden rounded-3xl bg-paper sm:min-h-[410px]">
              <Image
                src="/assets/event-networking.jpg"
                alt="Attendees sharing ideas and making connections at a technology event"
                fill
                sizes="100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20 text-white sm:p-9 sm:pt-28">
                <span className="text-xs font-bold uppercase tracking-widest text-lime">
                  The room matters
                </span>
                <p className="mt-2 max-w-2xl text-2xl font-extrabold leading-tight sm:text-4xl">
                  Built for good questions, honest answers and useful
                  introductions.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <SectionHeading eyebrow="What it is">
              The business side of tech, in one focused day.
            </SectionHeading>
          </Reveal>
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-black/65 sm:text-lg">
              <p>
                Nigerian tech has plenty of events, but too few where people
                trade real value. Beyond Code covers what happens after the
                code across four practical sessions: perception, building with
                AI, communication and ethics, and a closing panel.
              </p>
              <p>
                Between sessions, the Ask Board and role-coloured badges help
                you find the right person fast. Breakout games, a demo corner
                and open networking keep the conversation going.
              </p>
            </div>
          </Reveal>
        </Container>
        <Container className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ['01', 'The theme', 'The Business of Tech: markets, sales, money and everything that comes after the code.'],
            ['02', 'The format', 'Four sessions, a networking break, the Ask Board, breakout games and a demo corner.'],
            ['03', 'The room', '200 seats on Saturday 27 March 2027, 11:00am to 3:00pm in Ibadan.'],
          ].map(([number, title, copy], index) => (
            <Reveal key={title} delay={index * 80}>
              <FeatureCard number={number} title={title} accent={index === 1 ? 'lime' : 'violet'}>
                {copy}
              </FeatureCard>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Who it is for">
              If you work in or near tech, you belong here.
            </SectionHeading>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(([title, copy], index) => (
              <Reveal key={title} delay={(index % 3) * 70}>
                <FeatureCard number={`0${index + 1}`} title={title}>
                  {copy}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="why" className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Why attend">
              Built to get people talking.
            </SectionHeading>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Real numbers', 'Users, naira, weeks and mistakes. Specifics are what you take home.'],
              ['02', 'Honest feedback', 'Live audits, a live build and an honest panel show what works while you watch.'],
              ['03', 'The Ask Board', 'Post one ask and one offer. Find useful matches during the break and after the close.'],
              ['04', 'Games and demos', 'Ship It Sprint, Tech Trivia, The Naira Test and Cracked Bingo, plus a demo corner.'],
            ].map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * 70}>
                <FeatureCard number={number} title={title} accent={index === 2 ? 'lime' : 'tangerine'}>
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
