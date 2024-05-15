import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function HoleShop() {
  const products = await getCollectionProducts({ collection: 'hole-shop' });

  if (!products.length) return notFound();

  return (
    <>
      <ul className="grid grid-cols-4 gap-[1px] overflow-x-auto">
        {products.map((products) => (
          <li key={products.handle} className="">
            <Link className="relative h-full w-full" href={`/product/${products.handle}`}>
              <div className="relative h-[400px]">
                <Image
                  src={products.featuredImage.url}
                  alt={`product picture showing ${products.title}`}
                  sizes=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bottom-0 px-4 py-2 text-sm">
                <h3 className="font-regular">{products.title}</h3>
                <p className="font-light">
                  {products.priceRange.maxVariantPrice.amount}{' '}
                  {products.priceRange.maxVariantPrice.currencyCode}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
