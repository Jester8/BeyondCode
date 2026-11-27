'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRightIcon } from '@/components/icons';
import {
  getMerchOrderUrl,
  type MerchProduct,
} from '@/components/merch-products';

export function MerchOrderPanel({ product }: { product: MerchProduct }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(
    product.colors[0].imageIndex,
  );
  const selectedImage = product.images[selectedImageIndex];
  const hasAlternateImages = product.images.some(
    (image, index) => index > 0 && image.src !== product.images[0].src,
  );

  return (
    <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12">
      <div
        className={`relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl bg-paper ${
          selectedImage.cropPosition ? 'aspect-[0.74]' : 'aspect-[1.15]'
        }`}
      >
        {selectedImage.cropPosition ? (
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={1200}
            height={816}
            sizes="(max-width: 768px) 100vw, 52vw"
            className="absolute left-0 top-0 h-full w-[200%] max-w-none object-fill"
            style={{ left: selectedImage.cropPosition }}
            priority
          />
        ) : (
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 52vw"
            className="object-contain p-2"
            priority
          />
        )}
        <span className="absolute bottom-4 left-4 rounded-full bg-ink px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white">
          {selectedImage.color}
        </span>
      </div>

      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-black/45">
          Beyond Code essentials
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
          {product.name}
        </h2>
        <p className="mt-4 max-w-lg leading-relaxed text-black/60">
          {product.description} Choose a color and image below, then place your
          order.
        </p>
        <p className="mt-6 text-3xl font-extrabold tracking-tight text-ink">
          {product.price}
        </p>

        <div className="mt-7">
          <p className="text-sm font-extrabold text-ink">Choose a color</p>
          <div
            className="mt-3 flex flex-wrap gap-3"
            role="group"
            aria-label="Available colors"
          >
            {product.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                aria-pressed={selectedImage.color === color.name}
                onClick={() => setSelectedImageIndex(color.imageIndex)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-bold transition ${
                  selectedImage.color === color.name
                    ? 'border-ink bg-ink text-white'
                    : 'border-black/10 bg-white text-ink hover:border-black/40'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-4 w-4 rounded-full border border-black/15 ${color.swatch}`}
                />
                {color.name}
              </button>
            ))}
          </div>
        </div>

        {hasAlternateImages && (
          <div className="mt-6">
            <p className="text-sm font-extrabold text-ink">More product views</p>
            <div
              className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6"
              role="group"
              aria-label="More product views"
            >
              {product.images.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  aria-label={`${image.color} product view ${index + 1}`}
                  aria-pressed={selectedImageIndex === index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square overflow-hidden rounded-xl border bg-paper transition ${
                    selectedImageIndex === index
                      ? 'border-ink ring-2 ring-ink'
                      : 'border-black/10 hover:border-black/40'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 18vw, 8vw"
                    className={
                      image.cropPosition
                        ? 'object-cover'
                        : 'object-contain p-1'
                    }
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        <a
          href={getMerchOrderUrl(
            product.name,
            product.price,
            selectedImage.color,
          )}
          target="_blank"
          rel="noreferrer"
          className="group mt-6 inline-flex min-h-10 w-fit max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-5 text-xs font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-black sm:mt-8 sm:min-h-11 sm:px-6 sm:text-sm"
        >
          Order now
          <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4" />
        </a>
        <p className="mt-3 text-xs leading-relaxed text-black/45">
          Your selected color and price will be included in a WhatsApp message.
        </p>
      </div>
    </div>
  );
}
