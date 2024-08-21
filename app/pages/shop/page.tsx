import Price from 'components/price';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

const shop = async () => {
  const featuredProducts = await getCollectionProducts({ collection: 'frontpage' });

  if (!featuredProducts[0] || !featuredProducts[1]) return null;

  const [firstProduct, secondProduct] = featuredProducts;

  return (
    <>
      <section className="flex h-full h-screen w-full flex-col lg:flex-row">
        <div className="h-full bg-white p-6 sm:p-10 md:p-16">
          {/* Hidden mobile featureProduct */}
          <div className="relative h-full">
            <Link
              href={`/product/${firstProduct.handle}`}
              aria-description="Button"
              className="group"
            >
              <Image
                src={firstProduct.featuredImage.url}
                alt={`image of model wearing ${firstProduct.title}`}
                className="object-cover"
                fill
              />

              <div className="absolute bottom-0 right-0 z-10 flex h-20 w-full flex-col justify-center bg-[#3E54A4] text-center text-white">
                <p className="text-base">{firstProduct.title}</p>
                <Price
                  className="text-sm font-light"
                  amount={firstProduct.priceRange.maxVariantPrice.amount}
                  currencyCode={firstProduct.priceRange.maxVariantPrice.currencyCode}
                />
              </div>

              <div className="absolute bottom-10 right-0 z-[8] flex h-10 w-full translate-y-0 flex-col justify-center bg-white bg-opacity-80 text-center backdrop-blur-xl transition-all duration-300 group-hover:translate-y-[-100%]">
                <p className="text-[12px] font-light uppercase">View Product</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="order-2 h-full w-full bg-white p-6 sm:p-10 md:p-16 lg:order-1 lg:mt-0 lg:w-1/2 lg:p-8 xl:p-20">
          <div className="relative h-full">
            <Link
              href={`/product/${secondProduct.handle}`}
              aria-description="Button"
              className="group"
            >
              <Image
                src={secondProduct.featuredImage.url}
                alt={`image of model wearing ${secondProduct.title}`}
                className="object-cover"
                fill
              />

              {secondProduct.images[1] && (
                <Image
                  src={secondProduct.images[1].url}
                  alt={`image of model wearing ${secondProduct.title}`}
                  fill
                  className="product-image-back absolute left-0 top-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              )}

              <div className="absolute bottom-0 right-0 z-10 flex h-20 w-full flex-col justify-center bg-[#3E54A4] text-center text-white">
                <p className="text-base">{secondProduct.title}</p>
                <p className="text-sm font-light">350kr</p>
              </div>

              <div className="absolute bottom-10 right-0 z-[8] flex h-10 w-full translate-y-0 flex-col justify-center bg-white bg-opacity-80 text-center backdrop-blur-xl transition-all duration-300 group-hover:translate-y-[-100%]">
                <p className="text-[12px] font-light uppercase">View Product</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="relative order-1 h-[800px] w-full sm:h-[1000px] md:h-[1100px] lg:order-2 lg:h-full lg:w-1/2">
          <Image
            src="/bg-billeder/bg-4.JPG"
            alt="background image of blue eyes products"
            className="object-cover"
            fill
          />
        </div>
      </section>
    </>
  );
};

export default shop;
