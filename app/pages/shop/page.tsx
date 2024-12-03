import CardAnimation from 'components/card-scale-animation';
import Price from 'components/price';
import { fetchMainCollectionProducts } from 'lib/shopify/fetch-main-collection';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Shop',
  openGraph: {
    type: 'website'
  }
};

const Shop = async () => {
  try {
    const products = await fetchMainCollectionProducts();

    if (!products || products.length === 0) {
      return <p className="mt-20 text-center">No products available at the moment.</p>;
    }

    return (
      <section className="mx-auto mt-20 h-full w-full max-w-[1280px] md:mt-24">
        <div className="grid w-full grid-cols-1 gap-2 bg-white p-2 md:grid-cols-2 md:gap-12 md:p-0">
          {products.map((product, index) => (
            <div
              className="relative h-[500px] overflow-hidden lg:h-[700px] 2xl:h-[800px]"
              key={index}
            >
              <Link href={`/product/${product.handle}`} aria-description="Button" className="group">
                <CardAnimation>
                  <Image
                    src={product.featuredImage?.url || '/placeholder.jpg'}
                    alt={`Image of model wearing ${product.title}`}
                    className={`object-cover ${product.availableForSale ? '' : 'grayscale'}`}
                    fill
                  />
                  {product.images[1] && (
                    <Image
                      src={product.images[1]?.url}
                      alt={`Image of model wearing ${product.title}`}
                      fill
                      className={`product-image-back absolute left-0 top-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                        product.availableForSale ? '' : 'grayscale'
                      }`}
                    />
                  )}
                </CardAnimation>
                <div className="absolute bottom-0 right-0 z-10 flex h-20 w-full flex-col justify-center bg-[#3E54A4] text-center text-white">
                  <p className="text-base">{product.title}</p>
                  {product.availableForSale ? (
                    <Price
                      className="text-sm font-light"
                      amount={product.priceRange.maxVariantPrice.amount}
                      currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                    />
                  ) : (
                    <p className="text-sm font-light">Sold Out</p>
                  )}
                </div>
                <div className="absolute bottom-10 right-0 z-[8] flex h-10 w-full translate-y-0 flex-col justify-center bg-white bg-opacity-80 text-center backdrop-blur-xl transition-all duration-300 group-hover:translate-y-[-100%]">
                  <p className="text-[12px] font-light uppercase">View Product</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return <p className="mt-20 text-center">Something went wrong. Please try again later.</p>;
  }
};

export default Shop;
