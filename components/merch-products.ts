export type MerchGalleryImage = {
  src: string;
  color: string;
  alt: string;
  cropPosition?: string;
};

export type MerchColor = {
  name: string;
  imageIndex: number;
  swatch: string;
};

export type MerchProduct = {
  slug: string;
  name: string;
  image: string;
  description: string;
  price: string;
  imageFit?: 'contain' | 'cover';
  images: readonly MerchGalleryImage[];
  colors: readonly MerchColor[];
};

export const merchProducts: MerchProduct[] = [
  {
    slug: 'bucket-hat',
    name: 'Bucket hats',
    image: '/assets/merch/bucket-hat.png',
    description: 'A clean everyday bucket hat in classic black and white.',
    price: '₦5,000',
    images: [
      {
        src: '/assets/merch/bucket-hat.png',
        color: 'White',
        alt: 'White Beyond Code bucket hat',
        cropPosition: '0%',
      },
      {
        src: '/assets/merch/bucket-hat.png',
        color: 'Black',
        alt: 'Black Beyond Code bucket hat',
        cropPosition: '-102%',
      },
    ],
    colors: [
      { name: 'White', imageIndex: 0, swatch: 'bg-white' },
      { name: 'Black', imageIndex: 1, swatch: 'bg-ink' },
    ],
  },
  {
    slug: 't-shirt',
    name: 'T-shirts',
    image: '/assets/merch/tshirt-navy-logo.png',
    description: 'Six logo tee mockups in navy, black, and white.',
    price: '₦8,000',
    imageFit: 'contain',
    images: [
      {
        src: '/assets/merch/tshirt-navy-logo.png',
        color: 'Navy',
        alt: 'Navy Beyond Code T-shirt with the colorful logo',
      },
      {
        src: '/assets/merch/tshirt-navy-logo-alt.png',
        color: 'Navy',
        alt: 'Alternate navy Beyond Code T-shirt mockup',
      },
      {
        src: '/assets/merch/tshirt-black-logo.png',
        color: 'Black',
        alt: 'Black Beyond Code T-shirt with the colorful logo',
      },
      {
        src: '/assets/merch/tshirt-black-graphic.png',
        color: 'Black',
        alt: 'Black Beyond Code graphic T-shirt',
      },
      {
        src: '/assets/merch/tshirt-white-geometric.png',
        color: 'White',
        alt: 'White Beyond Code geometric-logo T-shirt',
      },
      {
        src: '/assets/merch/tshirt-white-geometric-alt.png',
        color: 'White',
        alt: 'Alternate white Beyond Code geometric-logo T-shirt',
      },
    ],
    colors: [
      { name: 'Navy', imageIndex: 0, swatch: 'bg-[#101C35]' },
      { name: 'Black', imageIndex: 2, swatch: 'bg-ink' },
      { name: 'White', imageIndex: 4, swatch: 'bg-white' },
    ],
  },
  {
    slug: 'tote-bag',
    name: 'Tote bags',
    image: '/assets/merch/tote-navy.png',
    description: 'Five Beyond Code tote mockups in navy, black, white, and natural canvas.',
    price: '₦4,000',
    images: [
      {
        src: '/assets/merch/tote-navy.png',
        color: 'Navy',
        alt: 'Navy Beyond Code tote bag',
      },
      {
        src: '/assets/merch/tote-black-white-logo.png',
        color: 'Black',
        alt: 'Black Beyond Code tote bag with a white logo',
      },
      {
        src: '/assets/merch/tote-black-color-logo.png',
        color: 'Black',
        alt: 'Black Beyond Code tote bag with the colorful logo',
      },
      {
        src: '/assets/merch/tote-white-studio.png',
        color: 'White',
        alt: 'White Beyond Code tote bag in a modern studio',
      },
      {
        src: '/assets/merch/tote-natural-canvas.png',
        color: 'Natural',
        alt: 'Natural canvas Beyond Code tote bag',
      },
    ],
    colors: [
      { name: 'Navy', imageIndex: 0, swatch: 'bg-[#101C35]' },
      { name: 'Black', imageIndex: 1, swatch: 'bg-ink' },
      { name: 'White', imageIndex: 3, swatch: 'bg-white' },
      { name: 'Natural', imageIndex: 4, swatch: 'bg-[#E8DCC7]' },
    ],
  },
  {
    slug: 'bottle',
    name: 'Bottles',
    image: '/assets/merch/bottles.png',
    description: 'Branded reusable bottles in two understated finishes.',
    price: '₦10,000',
    imageFit: 'contain',
    images: [
      {
        src: '/assets/merch/bottles.png',
        color: 'White',
        alt: 'White Beyond Code bottle',
      },
      {
        src: '/assets/merch/bottles.png',
        color: 'Black',
        alt: 'Black Beyond Code bottle',
      },
    ],
    colors: [
      { name: 'White', imageIndex: 0, swatch: 'bg-white' },
      { name: 'Black', imageIndex: 1, swatch: 'bg-ink' },
    ],
  },
];

export const merchBundle = {
  name: 'All-in bundle',
  price: '₦25,000',
  saving: 'Save ₦2,000',
  description:
    'Get one bucket hat, T-shirt, tote bag, and bottle together for one bundle price.',
} as const;

export function getMerchOrderUrl(
  name: string,
  price: string,
  color?: string,
) {
  const message = [
    `Hi, I would like to order the Beyond Code ${name}.`,
    color ? `Color: ${color}.` : '',
    `Price: ${price}.`,
  ]
    .filter(Boolean)
    .join(' ');

  return `https://wa.me/2348059674789?text=${encodeURIComponent(message)}`;
}
