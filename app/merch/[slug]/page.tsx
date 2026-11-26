import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from '@/components/icons';
import { MerchOrderPanel } from '@/components/merch-order-panel';
import { merchProducts } from '@/components/merch-products';
import { Container, PageIntro } from '@/components/site';

type MerchProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return merchProducts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: MerchProductPageProps) {
  const { slug } = await params;
  const product = merchProducts.find((item) => item.slug === slug);

  return {
    title: product ? `${product.name} | Merch` : 'Merch',
    description: product
      ? `Choose a color and order Beyond Code ${product.name}.`
      : 'Explore the Beyond Code merchandise collection.',
  };
}

export default async function MerchProductPage({
  params,
}: MerchProductPageProps) {
  const { slug } = await params;
  const product = merchProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Beyond Code essentials"
        title={product.name}
        description="Choose your color and place your order directly with the Beyond Code team."
      />
      <section className="py-10 sm:py-16">
        <Container>
          <Link
            href="/merch#collection"
            className="mb-7 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-ink transition hover:text-black/60"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5 shrink-0" />
            Back to the collection
          </Link>
          <MerchOrderPanel key={product.slug} product={product} />
        </Container>
      </section>
    </main>
  );
}
