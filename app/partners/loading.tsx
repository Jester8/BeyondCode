import { PartnerOpportunityCardsSkeleton } from '@/components/partner-opportunity-cards';
import { Container } from '@/components/site';

export default function PartnersLoading() {
  return (
    <main aria-busy="true">
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div className="w-full max-w-2xl space-y-4">
              <div className="h-3 w-36 animate-pulse rounded bg-black/10 motion-reduce:animate-none" />
              <div className="h-12 w-4/5 animate-pulse rounded bg-black/10 motion-reduce:animate-none" />
            </div>
            <div className="h-12 w-full max-w-md animate-pulse rounded bg-black/10 motion-reduce:animate-none" />
          </div>
          <PartnerOpportunityCardsSkeleton />
        </Container>
      </section>
    </main>
  );
}
