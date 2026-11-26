import Link from 'next/link';
import { ArrowUpRightIcon } from '@/components/icons';
import {
  partnerOpportunities,
  type PartnerOpportunity,
} from '@/components/partner-opportunities';

export function PartnerLogoPlaceholder({
  opportunity,
  compact = false,
}: {
  opportunity: PartnerOpportunity;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative grid min-h-44 w-full shrink-0 place-items-center overflow-hidden bg-ink md:min-h-52 md:w-60 ${
        compact ? 'aspect-[1.25] md:aspect-auto' : 'aspect-[1.4] md:aspect-auto'
      }`}
    >
      <div className="relative grid h-20 w-20 place-items-center rounded-2xl border border-white/20 bg-white/[0.04] text-center text-white">
        <span className="text-[10px] font-extrabold uppercase leading-tight tracking-[0.14em]">
          Your
          <br />
          logo
          <br />
          here
        </span>
      </div>
      <span className="absolute bottom-5 left-5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/80">
        {opportunity.category}
      </span>
      <span className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-ink">
        Open
      </span>
    </div>
  );
}

export function PartnerOpportunityCards({
  opportunities = partnerOpportunities,
  compact = false,
}: {
  opportunities?: PartnerOpportunity[];
  compact?: boolean;
}) {
  return (
    <div className="space-y-4">
      {opportunities.map((opportunity, index) => (
        <Link
          key={opportunity.slug}
          href={`/partners/${opportunity.slug}`}
          className="group block rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-ink text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-card md:flex-row">
            <PartnerLogoPlaceholder
              opportunity={opportunity}
              compact={compact}
            />
            <div className="flex flex-1 flex-col justify-center p-5 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-lime">
                    Opportunity {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                    {opportunity.title}
                  </h3>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 text-white transition-colors group-hover:border-lime group-hover:text-lime">
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
              <div className="mt-4">
                <p className="max-w-3xl text-sm leading-relaxed text-white/65">
                  {opportunity.summary}
                </p>
                <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.12em] text-lime">
                  See what this partner could do
                </p>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

export function PartnerOpportunityCardsSkeleton({
  count = 6,
}: {
  count?: number;
}) {
  return (
    <div
      className="space-y-4"
      role="status"
      aria-label="Loading partner opportunities"
    >
      <span className="sr-only">Loading partner opportunities</span>
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          aria-hidden="true"
          className="flex flex-col overflow-hidden rounded-3xl bg-ink md:flex-row"
        >
          <div className="aspect-[1.4] w-full animate-pulse bg-white/10 motion-reduce:animate-none md:aspect-auto md:min-h-52 md:w-60" />
          <div className="flex-1 space-y-4 p-5 sm:p-7">
            <div className="h-3 w-28 animate-pulse rounded bg-lime/25 motion-reduce:animate-none" />
            <div className="h-7 w-2/3 animate-pulse rounded bg-white/15 motion-reduce:animate-none" />
            <div className="h-4 w-full animate-pulse rounded bg-white/10 motion-reduce:animate-none" />
            <div className="h-4 w-4/5 animate-pulse rounded bg-white/10 motion-reduce:animate-none" />
          </div>
        </div>
      ))}
    </div>
  );
}
