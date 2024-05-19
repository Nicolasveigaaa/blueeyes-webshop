import Price from 'components/price';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function HoleShop() {
  const products = await getCollectionProducts({ collection: 'hole-shop' });

  if (!products.length) return notFound();

  return (
    <>
      <ul className="grid grid-cols-2 gap-[1px] overflow-x-auto md:grid-cols-3 lg:grid-cols-4">
        {products.map((products) => (
          <li key={products.handle} className="">
            <Link className="relative h-full w-full" href={`/product/${products.handle}`}>
              <div className="relative h-[200px] min-[400px]:h-[230px] min-[480px]:h-[260px] min-[570px]:h-[290px] sm:h-[320px] 2xl:h-[450px]">
                <Image
                  src={products.featuredImage.url}
                  alt={`product picture showing ${products.title}`}
                  sizes=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bottom-0 px-6 py-2 text-sm">
                <h3 className="font-regular">{products.title}</h3>
                <Price
                  amount={products.priceRange.maxVariantPrice.amount}
                  currencyCode={products.priceRange.maxVariantPrice.currencyCode}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
