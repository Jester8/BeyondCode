import { Reveal } from '@/components/reveal';
import { SpeakerRoster } from '@/components/speaker-roster';
import {
  Container,
  EventCta,
  FeatureCard,
  PageIntro,
  SectionHeading,
} from '@/components/site';

export const metadata = {
  title: 'Speakers',
  description: 'Meet the Beyond Code 2027 convener and upcoming guest speakers.',
};

export default function SpeakersPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Guest speakers"
        title="One confirmed voice. More to come."
        description="Meet our convener and see who else is joining the room at Beyond Code 2027."
      />

      <section className="bg-ink py-16 text-white sm:py-24">
        <Container>
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime">
              01 — Speakers
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl">
              Meet the voices joining the conversation.
            </h2>
          </Reveal>
          <div className="mt-10">
            <SpeakerRoster />
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
