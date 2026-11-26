import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { InteractiveCard } from '@/components/interactive-card';
import {
  Container,
  EventCta,
  FeatureCard,
  PageIntro,
  SectionHeading,
} from '@/components/site';

const speakers = [
  {
    name: 'Olusanya Samuel A.',
    role: 'Full-stack Developer · 5+ years experience',
    label: 'Convener, Beyond Code',
    image: '/assets/sam-web.jpg',
    profile: true,
  },
  {
    name: 'Abigail Akenawe',
    role: 'CEO, Nexspire Solutions',
    label: 'Guest Speaker',
    image: '/assets/Abigail.jpg',
  },
];

export const metadata = {
  title: 'Speakers',
  description: 'Meet the Beyond Code 2027 speakers and event convener.',
};

export default function SpeakersPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Guest speakers"
        title="People who have done the work."
        description="Meet the people bringing practical experience and honest perspectives to Beyond Code 2027."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Guest speakers">
              Meet the people behind the ideas.
            </SectionHeading>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            {speakers.map((speaker, index) => {
              const content = (
                <InteractiveCard>
                  <article className="group h-full overflow-hidden rounded-3xl border border-black/[0.07] bg-white transition-shadow duration-300 hover:shadow-card">
                    <div className="relative aspect-[0.84] overflow-hidden bg-paper">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                      />
                      <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-violet backdrop-blur">
                        {speaker.profile ? 'Convener' : 'Speaker'}
                      </span>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-extrabold text-ink">
                        {speaker.name}
                      </h2>
                      <p className="mt-1 text-sm font-semibold text-black/55">
                        {speaker.role}
                      </p>
                      <p className="mt-5 text-xs font-extrabold uppercase tracking-wider text-tangerine">
                        {speaker.label}
                      </p>
                      {speaker.profile && (
                        <span className="mt-5 inline-block text-sm font-bold text-violet">
                          View profile →
                        </span>
                      )}
                    </div>
                  </article>
                </InteractiveCard>
              );

              return (
                <Reveal key={speaker.name} delay={index * 80}>
                  {speaker.profile ? (
                    <Link
                      href="/speakers/olusanya-samuel"
                      aria-label={`View profile of ${speaker.name}`}
                      className="block h-full"
                    >
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="What to expect">
              Four perspectives, one honest conversation.
            </SectionHeading>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              ['Perception Marketing', 'A brand and growth strategist on positioning, naira pricing, brand signals and social proof, with a live audit of attendee products.'],
              ['The Build: Shipping Faster with AI', 'A senior engineer builds a working feature live with AI tools, and shows where AI saves hours and where it gets things wrong.'],
              ['Communication and Ethics', 'A founder or operator on proposals that get replies, honest expectations, and the hard calls on data and money.'],
              ['The Honest Panel', 'Four practitioners on building, selling and surviving in Nigerian tech, moderated by Sam.'],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={(index % 2) * 80}>
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
