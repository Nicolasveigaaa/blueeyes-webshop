import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function HomepageShop() {
  const products = await getCollectionProducts({ collection: 'frontpage' });

  if (!products.length) return notFound();

  if (products.length < 4) return null;

  return (
    <>
      <ul className="grid grid-cols-4 gap-[1px] overflow-x-auto">
        {products.map((products) => (
          <li key={products.handle} className="">
            <Link className="relative h-full w-full" href={`/product/${products.handle}`}>
              <div className="relative h-[400px] 2xl:h-[600px]">
                <Image
                  src={products.featuredImage.url}
                  alt={`product picture showing ${products.title}`}
                  sizes=""
                  fill
                  className="object-cover"
                />

                <p>{}</p>
              </div>

              <div className="bottom-0 px-6 py-2 text-[12px]">
                <h3 className="font-regular">{products.title}</h3>
                <p className="font-light">{products.priceRange.minVariantPrice.amount} kr</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
