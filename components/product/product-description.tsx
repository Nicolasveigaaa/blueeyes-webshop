import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { Product } from 'lib/shopify/types';
import { Suspense } from 'react';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="flex flex-col pt-6 md:pt-32">
        <h1 className="mb-2">{product.title}</h1>
        <Price
          amount={product.priceRange.maxVariantPrice.amount}
          currencyCode={product.priceRange.maxVariantPrice.currencyCode}
        />
      </div>

      <p>{product.description}</p>

      <Suspense fallback={null}>
        <VariantSelector options={product.options} variants={product.variants} />
      </Suspense>

      <Suspense fallback={null}>
        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </Suspense>

      <div className="my-10">
        <ul className="text-sm">
          <li>Free shipping in Denmark</li>
          <li>Free shipping in EU over €100</li>
          <li>Free shipping in Europe over €150</li>
          <li>Free shipping to North America over €200</li>
          <li>Free shipping to the rest of the world over €250</li>
          <li>Free exchanges - Easy returns</li>
        </ul>
      </div>
    </>
  );
}
