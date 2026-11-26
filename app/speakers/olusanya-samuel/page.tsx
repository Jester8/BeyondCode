import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import {
  ButtonLink,
  Container,
  EventCta,
  FeatureCard,
} from '@/components/site';

export const metadata = {
  title: 'Olusanya Samuel A.',
  description: 'Meet Beyond Code convener and full-stack developer Olusanya Samuel A.',
};

export default function OlusanyaSamuelPage() {
  return (
    <main id="main-content">
      <section className="bg-paper pb-14 pt-36 sm:pb-20 sm:pt-44">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Link
              href="/speakers"
              className="inline-flex min-h-10 items-center text-sm font-bold text-violet transition hover:text-tangerine"
            >
              ← All speakers
            </Link>
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-tangerine">
              Convener and host
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-ink sm:text-7xl">
              Olusanya
              <br />
              Samuel A.
            </h1>
            <p className="mt-5 text-lg font-semibold text-black/55">
              Full-stack Developer · 5+ years of experience
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-black/65 sm:text-lg">
              Based in Ibadan, Nigeria, Olusanya builds responsive, scalable
              web and mobile products. He focuses on clean architecture,
              thoughtful user experience, visual quality and performance.
            </p>
            <div className="mt-7">
              <ButtonLink href="/register">Join us at Beyond Code</ButtonLink>
            </div>
          </div>
          <Reveal className="relative mx-auto aspect-[0.8] w-full max-w-sm overflow-hidden rounded-[2rem] bg-white shadow-card">
            <Image
              src="/assets/speaker_1_full.jpg"
              alt="Olusanya Samuel A."
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 34vw"
              className="object-cover object-top"
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet">
              At a glance
            </p>
          </Reveal>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Role', 'Full-stack Developer'],
              ['Experience', '5+ years'],
              ['Location', 'Ibadan, Nigeria'],
              ['Focus', 'Web & mobile apps'],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={index * 60}>
                <FeatureCard number={title} title={copy}>
                  Olusanya brings practical product experience to Beyond Code.
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <Container className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet">
              About Olusanya
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
              From the first idea to production.
            </h2>
          </Reveal>
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-black/65 sm:text-lg">
              <p>
                Olusanya Samuel A. is a full-stack software developer based in
                Ibadan, Nigeria, with more than five years of professional
                experience. He builds responsive, scalable web and mobile
                applications and enjoys carrying a product from an early idea
                through implementation and into production.
              </p>
              <p>
                His approach brings together clean architecture, maintainable
                code and careful attention to user experience, visual detail
                and performance. He has worked with different teams and
                organizations to build and ship software, and is especially
                interested in the decisions that make a product useful,
                reliable and ready to grow.
              </p>
              <p>
                Olusanya has a background in Computer Engineering and is
                pursuing postgraduate studies in Software Engineering. Through
                Beyond Code, he hosts conversations about the full product
                journey: understanding a market, building and selling a
                product, finding investment and turning technical work into
                practical value.
              </p>
              <p>
                His public project work has included Agrochain, an agri-tech
                initiative exploring secure digital records for farmers and
                better access to markets, credit, insurance and export
                opportunities.
              </p>
            </div>
          </Reveal>
        </Container>
        <Container className="mt-8 flex flex-wrap gap-2">
          {[
            'Full-stack product engineering',
            'Web and mobile apps',
            'Clean architecture',
            'UI/UX and performance',
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/65"
            >
              {tag}
            </span>
          ))}
        </Container>
      </section>
      <EventCta />
    </main>
  );
}
