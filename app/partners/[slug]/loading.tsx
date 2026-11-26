import { Container } from '@/components/site';

export default function PartnerOpportunityLoading() {
  return (
    <main aria-busy="true">
      <section className="py-12 sm:py-20">
        <Container>
          <div className="mb-8 h-5 w-48 animate-pulse rounded bg-black/10 motion-reduce:animate-none" />
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
            <div className="min-h-80 animate-pulse rounded-3xl bg-ink/10 motion-reduce:animate-none" />
            <div className="space-y-5">
              <div className="h-40 animate-pulse rounded-3xl bg-black/10 motion-reduce:animate-none" />
              <div className="h-56 animate-pulse rounded-3xl bg-black/10 motion-reduce:animate-none" />
              <div className="h-56 animate-pulse rounded-3xl bg-black/10 motion-reduce:animate-none" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
