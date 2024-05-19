import { Accordion } from 'components/Accordian';
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { Product } from 'lib/shopify/types';
import { Suspense } from 'react';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col md:mt-36">
        <h1 className="mb-2">{product.title}</h1>
        <p>
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </p>
      </div>

      <p>{product.description}</p>

      <div className="my-12">
        <Accordion
          titles={['Size Guide', 'Shipping Information']}
          contents={[
            <p key="1">Here you can add additional information about the product.</p>,
            <p key="2">Here you can add even more details about the product.</p>
          ]}
        />
      </div>

      <Suspense fallback={null}>
        <VariantSelector options={product.options} variants={product.variants} />
      </Suspense>

      <Suspense fallback={null}>
        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </Suspense>
    </>
  );
}
