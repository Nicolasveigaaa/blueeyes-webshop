import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Price from 'components/price';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export default async function FeaturedSection() {
  const featuredProducts = await getCollectionProducts({ collection: 'frontpage' });

  if (!featuredProducts[0] || !featuredProducts[1]) return null;

  const [firstProduct, secondProduct] = featuredProducts;

  return (
    <>
      {/* HERO / Featured Section 1 */}
      <section className="flex w-full flex-col lg:h-[200vh] lg:flex-row">
        <div className="relative order-2 h-[400px] w-full sm:h-[500px] md:h-[600px] lg:sticky lg:top-0 lg:order-1 lg:h-[100vh] lg:w-1/2">
          <Image
            src="/bg-billeder/bg-3.JPG"
            alt="background image showing model with Blue Eyes product"
            className="object-cover"
            quality={100}
            fill
            priority={true}
          />
        </div>

        <div className="order-1 flex h-[80vh] w-full flex-col justify-between lg:order-2 lg:h-[200vh] lg:w-1/2">
          <div className="h-full w-full bg-[#3E54A4] px-10 py-20 text-white lg:h-1/2">
            <h1 className="flex h-full items-center justify-between text-3xl font-bold uppercase sm:text-5xl md:text-6xl lg:text-5xl xl:px-20 2xl:text-6xl">
              <span>Feeling</span> <span>Blue?</span>
            </h1>

            <div className="flex items-center justify-center">
              <a
                href="https://www.gallery.blueeyes-icu.com/"
                aria-label="gallery redirect button"
                className="group"
                rel="noreferrer noopener"
                target="_blank"
              >
                <div className="flex items-center justify-center gap-2 transition-all group-hover:gap-4">
                  <p className="">View the gallery</p>
                  <ArrowRightIcon width={16} height={16} />
                </div>
                <div className="h-[1px] w-full bg-white"></div>
              </a>
            </div>
          </div>

          <div className="hidden h-screen bg-white p-6 lg:block lg:p-20">
            <div className="relative h-full w-full">
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
                  <p className="text-sm font-light">350kr</p>
                </div>

                <div className="absolute bottom-10 right-0 z-[8] flex h-10 w-full translate-y-0 flex-col justify-center bg-white bg-opacity-80 text-center backdrop-blur-xl transition-all duration-300 group-hover:translate-y-[-100%]">
                  <p className="text-[12px] font-light uppercase">View Product</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section 2 */}
      <section className="relative flex h-full w-full flex-col lg:h-[100dvh] lg:flex-row">
        <div className="h-full bg-white p-6 lg:hidden ">
          {/* Hidden mobile featureProduct */}
          <div className="relative h-[400px] w-full sm:h-[500px] md:h-[600px]">
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

        <div className="order-2 h-full w-full bg-white p-6 lg:order-1 lg:mt-0 lg:w-1/2 lg:p-20 ">
          <div className="relative h-[400px] w-full sm:h-[500px] md:h-[600px] lg:h-full">
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

        <div className="relative order-1 h-[400px] w-full sm:h-[500px] md:h-[600px] lg:order-2 lg:h-full lg:w-1/2">
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
}
