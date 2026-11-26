import { ArrowUpRightIcon } from '@/components/icons';
import {
  getMerchOrderUrl,
  merchBundle,
} from '@/components/merch-products';

export function MerchBundleFeature({ className = '' }: { className?: string }) {
  return (
    <article
      className={`grid gap-7 rounded-3xl bg-ink p-6 text-white sm:p-8 md:grid-cols-[1fr_auto] md:items-end ${className}`}
    >
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-lime">
          Best value · {merchBundle.saving}
        </p>
        <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
          {merchBundle.name}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
          {merchBundle.description}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-5 md:justify-end">
        <p className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {merchBundle.price}
        </p>
        <a
          href={getMerchOrderUrl(merchBundle.name, merchBundle.price)}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-paper"
        >
          Order now
          <ArrowUpRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
