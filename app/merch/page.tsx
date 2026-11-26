import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@/components/icons';
import { MerchBundleFeature } from '@/components/merch-bundle-feature';
import { merchProducts } from '@/components/merch-products';
import { ButtonLink, Container, PageIntro } from '@/components/site';

export const metadata = {
  title: 'Merch',
  description:
    'Explore the Beyond Code 2027 collection of branded apparel and everyday essentials.',
};

const merchShowcase = [
  {
    src: '/assets/merch/tote-navy.png',
    alt: 'Navy Beyond Code tote bag',
  },
  {
    src: '/assets/merch/tshirt-black-logo.png',
    alt: 'Black Beyond Code T-shirt with the colorful logo',
  },
  {
    src: '/assets/merch/tshirt-white-geometric.png',
    alt: 'White Beyond Code geometric-logo T-shirt',
  },
  {
    src: '/assets/merch/tote-natural-canvas.png',
    alt: 'Natural canvas Beyond Code tote bag',
  },
];

export default function MerchPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Beyond Code essentials"
        title="Take the conversation with you."
        description="A considered collection of Beyond Code pieces, made for the days that go beyond the conference."
      />

      <section className="py-10 sm:py-16">
        <Container>
          <div className="grid gap-3 md:grid-cols-[1.15fr_0.85fr]">
            <div className="relative aspect-[1.3] overflow-hidden rounded-3xl bg-[#E8E8E8] sm:rounded-[2rem]">
              <Image
                src="/assets/merch/tshirt-navy-logo.png"
                alt="Navy Beyond Code T-shirt with the colorful logo"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {merchShowcase.map((item) => (
                <div
                  key={item.src}
                  className="relative aspect-[1.15] overflow-hidden rounded-2xl bg-[#E8E8E8] sm:rounded-3xl"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 45vw, 20vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="collection"
        className="bg-paper py-16 sm:py-24"
      >
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink">
                The collection
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.02] tracking-[-0.045em] text-ink sm:text-5xl">
                Made to move with you.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-black/60 sm:text-lg">
                Explore the Beyond Code collection. All prices are in Nigerian
                naira, and you can choose a color before ordering.
              </p>
            </div>
            <a
              href="mailto:samuelolu407@gmail.com?subject=Beyond%20Code%20merch"
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-ink transition hover:text-black/60"
            >
              Ask about the collection
              <ArrowUpRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {merchProducts.map((product) => (
              <Link
                key={product.name}
                href={`/merch/${product.slug}`}
                aria-label={`Order Beyond Code ${product.name}; choose a color`}
                className="group overflow-hidden rounded-3xl border border-black/[0.07] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-[1.47] overflow-hidden bg-paper">
                  <Image
                    src={product.image}
                    alt={`Beyond Code ${product.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={
                      product.imageFit === 'contain'
                        ? 'object-contain p-2 sm:p-3'
                        : 'object-cover transition-transform duration-700 group-hover:scale-[1.03]'
                    }
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink">
                    {product.price}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/55">
                    {product.description}
                  </p>
                  <span className="mt-5 inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full bg-ink px-4 text-xs font-extrabold text-white transition group-hover:bg-black">
                    Order now
                    <ArrowUpRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <MerchBundleFeature className="mt-6" />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="stage-panel relative overflow-hidden rounded-[2rem] px-7 py-12 text-center text-white sm:px-14 sm:py-16">
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime">
              Beyond Code 2027
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
              Good things are worth looking forward to.
            </h2>
            <p className="mt-4 leading-relaxed text-white/75">
              Choose a color on any product page, then place your order directly
              with the Beyond Code team on WhatsApp.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ButtonLink href="mailto:samuelolu407@gmail.com?subject=Beyond%20Code%20merch">
                Ask about merch
              </ButtonLink>
              <ButtonLink href="/" secondary>
                Back to home
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
