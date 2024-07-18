import { MapPinIcon } from '@heroicons/react/24/outline';
import Price from 'components/price';
import { Product } from 'lib/shopify/types';

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

      <a
        href="https://www.google.com/maps?f=q&source=s_q&hl=en&q=1200+Pennsylvania+Ave+SE,+Washington,+District+of+Columbia,+20003&sll=37.0625,-95.677068&sspn=44.118686,114.169922&ie=UTF8&cd=1&geocode=FT5MUQIdIDlp-w&split=0&ll=38.882147,-76.99017&spn=0.01064,0.027874&z=16&iwloc=A"
        target="_blank"
        aria-label="adress redirect button"
        rel="noreferrer noopener"
      >
        <div className="flex h-14 w-full items-center justify-center gap-4 bg-[#3E54A4] text-center text-white">
          <p>Pop-up Location</p>
          <MapPinIcon height={20} width={20} />
        </div>
      </a>

      {/*<div className="my-12">
        <Accordion
          titles={['Size guide', 'Fit guide']}
          contents={[
            <div key="1">Here you can add even more details about the product.</div>,
            <p key="2">Here you can add even more details about the product.</p>
          ]}
        />
      </div>
      */}

      {/* SHOP FUNCTION FOR LATER
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
       */}
    </>
  );
}
