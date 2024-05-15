import { AddToCart } from 'components/cart/add-to-cart';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { Suspense } from 'react';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 mt-32 flex flex-col border-b border-gray-800 pb-6">
        <h1 className="mb-2">{product.title}</h1>
        <p>{product.priceRange.maxVariantPrice.amount} kr</p>
      </div>

      {product.descriptionHtml ? (
        <Prose className="mb-6 text-sm leading-tight " html={product.descriptionHtml} />
      ) : null}

      <Suspense fallback={null}>
        <VariantSelector options={product.options} variants={product.variants} />
      </Suspense>

      <Suspense fallback={null}>
        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </Suspense>
    </>
  );
}
