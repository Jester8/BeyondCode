import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowUpRightIcon } from '@/components/icons';
import { Container, EventCta, PageIntro } from '@/components/site';

export const metadata = {
  title: 'Meet the Team',
  description: 'Meet the people bringing Beyond Code 2027 together.',
};

export default function TeamPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="The people behind Beyond Code"
        title="Meet the team."
        description="Bringing the tech community together takes a team who care about what happens beyond the code."
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <Reveal>
              <Link
                href="/speakers/olusanya-samuel"
                aria-label="Meet Olusanya Samuel A., convener of Beyond Code"
                className="group relative block aspect-[0.88] overflow-hidden rounded-[2rem] bg-ink"
              >
                <Image
                  src="/assets/sam-web.jpg"
                  alt="Olusanya Samuel A."
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:p-8">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-lime">
                    Convener & host
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Olusanya Samuel A.
                  </h2>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={90}>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet">
                The convener
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
                Bringing the business side of tech into the room.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-black/65 sm:text-lg">
                Olusanya Samuel A. is a full-stack developer based in Ibadan
                with more than five years of experience building web and
                mobile products. He convenes Beyond Code to bring builders,
                founders and operators together for practical conversations
                about the work around the code.
              </p>
              <Link
                href="/speakers/olusanya-samuel"
                className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-violet transition hover:gap-3"
              >
                More about Samuel <ArrowUpRightIcon />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <Container className="max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet">
            Growing the team
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
            More people behind the day, soon.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-black/60 sm:text-lg">
            We’ll introduce additional Beyond Code team members here as their
            roles and details are confirmed.
          </p>
        </Container>
      </section>

      <EventCta />
    </main>
  );
}
