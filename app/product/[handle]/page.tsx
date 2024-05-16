import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct } from 'lib/shopify';
import Image from 'next/image';
import { Suspense } from 'react';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: `${product.title} | blueeyes-icu.com `,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />

      <div className="h-full w-full bg-white">
        <div className="flex flex-col  md:flex-row ">
          <div className="h-full w-full">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              <div className="grid grid-cols-2">
                {product.images.map((images) => (
                  <div className="relative grid h-[600px]">
                    <Image src={images.url} alt={images.altText} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </Suspense>
          </div>

          <div className="relative  w-full lg:w-1/2">
            <div className="sticky right-0 top-0 h-screen w-full p-8 md:p-12 ">
              <ProductDescription product={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
