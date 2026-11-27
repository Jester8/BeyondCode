import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@/components/icons';
import { Container, PageIntro } from '@/components/site';

export const metadata = {
  title: 'Abimbola Babatunde | Meet the Team',
  description:
    'Meet Abimbola Babatunde, Operations Lead at Beyond Code and a Nigerian communications professional.',
};

export default function AbimbolaBabatundePage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Operations Lead"
        title="Abimbola Babatunde."
        description="Communications professional, partnerships manager and founder helping people find their next opportunity."
      />

      <section className="py-10 sm:py-16">
        <Container>
          <Link
            href="/team"
            className="mb-7 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-ink transition hover:text-black/60"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5 shrink-0" />
            Back to the team
          </Link>
          <div className="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
            <div className="relative mx-auto aspect-[0.84] w-full max-w-sm overflow-hidden rounded-3xl bg-[#FFB7D5]">
              <Image
                src="/assets/abimbola-babatunde.png"
                alt="Abimbola Babatunde"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 35vw"
                className="object-contain object-bottom"
              />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet">
                Beyond Code team
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
                Communications, partnerships and operations.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-black/65">
                <p>
                  Abimbola Babatunde is a Nigerian communications professional
                  with a BA in History from Ahmadu Bello University.
                </p>
                <p>
                  She is the Communications &amp; Partnerships Manager at the
                  Association of African Podcasters and Voice Artists (APVA), a
                  pan-African nonprofit supporting audio creatives across
                  podcasting, voiceover, and spoken word. She leads social media
                  content, editorial production, partnership documentation,
                  newsletter strategy, and opportunity curation.
                </p>
                <p>
                  She is also the founder of The Sterling Nexus, a training and
                  placement programme that prepares young Africans for remote
                  work.
                </p>
                <p>
                  At Beyond Code, she is Operations Lead.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
