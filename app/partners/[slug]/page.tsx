import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from '@/components/icons';
import { PartnerLogoPlaceholder } from '@/components/partner-opportunity-cards';
import { partnerOpportunities } from '@/components/partner-opportunities';
import { Container, PageIntro } from '@/components/site';

type PartnerPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return partnerOpportunities.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PartnerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const opportunity = partnerOpportunities.find((item) => item.slug === slug);

  if (!opportunity) {
    return { title: 'Partnership opportunity not found' };
  }

  return {
    title: opportunity.title,
    description: opportunity.summary,
  };
}

export default async function PartnerOpportunityPage({
  params,
}: PartnerPageProps) {
  const { slug } = await params;
  const opportunity = partnerOpportunities.find((item) => item.slug === slug);

  if (!opportunity) notFound();

  const sections = [
    { title: 'What this partner could support', items: opportunity.contributions },
    { title: 'How they could show up on the day', items: opportunity.eventDay },
    { title: 'Potential recognition', items: opportunity.recognition },
  ];

  return (
    <main id="main-content">
      <PageIntro
        eyebrow={`${opportunity.category} · Open opportunity`}
        title={opportunity.title}
        description={opportunity.role}
      />

      <section className="py-12 sm:py-20">
        <Container>
          <Link
            href="/partners"
            className="mb-8 inline-flex min-h-10 items-center gap-2 text-sm font-extrabold text-violet transition hover:text-tangerine"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5 shrink-0" />
            All partner opportunities
          </Link>

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
            <aside className="self-start overflow-hidden rounded-3xl border border-black/[0.07] bg-white">
              <PartnerLogoPlaceholder opportunity={opportunity} />
              <div className="p-6 sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-tangerine">
                  Proposed role
                </p>
                <h2 className="mt-3 text-2xl font-extrabold text-ink">
                  {opportunity.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-black/60">
                  {opportunity.summary}
                </p>
              </div>
            </aside>

            <div>
              <div className="mb-8 rounded-3xl bg-paper p-6 sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-violet">
                  Partnership outline
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink sm:text-xl">
                  {opportunity.role} The outline below is a starting point;
                  final responsibilities and benefits will be agreed together.
                </p>
              </div>

              <div className="space-y-5">
                {sections.map((section, index) => (
                  <section
                    key={section.title}
                    className="rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-8"
                  >
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-violet">
                      0{index + 1}
                    </p>
                    <h2 className="mt-3 text-2xl font-extrabold text-ink">
                      {section.title}
                    </h2>
                    <ul className="mt-5 space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-black/65 sm:text-base"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <a
                href={`mailto:samuelolu407@gmail.com?subject=${encodeURIComponent(`Beyond Code ${opportunity.title}`)}`}
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-violet"
              >
                Discuss this opportunity
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
