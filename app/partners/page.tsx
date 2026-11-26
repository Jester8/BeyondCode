import Link from 'next/link';
import { ArrowUpRightIcon } from '@/components/icons';
import { PartnerOpportunityCards } from '@/components/partner-opportunity-cards';
import { partnerOpportunities } from '@/components/partner-opportunities';
import { Container, PageIntro } from '@/components/site';

export const metadata = {
  title: 'Partners & Sponsors',
  description:
    'Explore ways to support and shape Beyond Code 2027 as a sponsor or event partner.',
};

export default function PartnersPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Sponsors & partners"
        title="Good work gets built together."
        description="Explore open ways to help create a useful, welcoming day for Nigeria’s technology community."
      />

      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet">
                Open opportunities
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.02] tracking-[-0.045em] text-ink sm:text-5xl">
                Find a role that fits your work.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-black/60 sm:text-base">
              These are partnership opportunities, not confirmed sponsors.
              Select a role to see its proposed contribution and recognition.
            </p>
          </div>

          <PartnerOpportunityCards opportunities={partnerOpportunities} />

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-3xl bg-ink p-6 text-white sm:p-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-lime">
                Have another idea?
              </p>
              <h3 className="mt-2 text-2xl font-extrabold">
                Let’s shape a partnership around it.
              </h3>
            </div>
            <Link
              href="mailto:samuelolu407@gmail.com?subject=Beyond%20Code%20partnership"
              className="group inline-flex min-h-11 items-center gap-1.5 rounded-full bg-white px-5 text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-lime"
            >
              Talk to the team
              <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
