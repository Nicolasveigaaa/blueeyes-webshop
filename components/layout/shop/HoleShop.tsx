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
        {products.map((product) => (
          <li key={product.handle} className="relative border-b border-r border-t border-white">
            <Link className="relative block w-full" href={`/product/${product.handle}`}>
              <div className="relative w-full" style={{ aspectRatio: '1 / 1.2' }}>
                <Image
                  src={product.featuredImage.url}
                  alt={product.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  layout="fill"
                  className="product-image product-image-front absolute left-0 top-0 h-full w-full object-cover"
                />
              </div>
              <div className="bottom-0 px-6 py-2 text-sm">
                <h3 className="font-regular">{product.title}</h3>
                <Price
                  amount={product.priceRange.maxVariantPrice.amount}
                  currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
