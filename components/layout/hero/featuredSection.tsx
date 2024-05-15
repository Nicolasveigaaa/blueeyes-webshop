import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function FeaturedSection() {
  const featuredProducts = await getCollectionProducts({ collection: 'frontpage' });

  if (!featuredProducts[0] || !featuredProducts[1]) return notFound();

  const [firstProduct, secondProduct] = featuredProducts;

  return (
    <>
      {/* HERO / Featured Section 1 */}
      <section className="flex h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-1/2">
          <Image
            src="/bg-billeder/bg-3.JPG"
            alt="background image showing model with Blue Eyes product"
            className="object-cover"
            quality={100}
            fill
          />
        </div>

        <div className="flex w-1/2 flex-col justify-between">
          <div className="h-screen bg-[#3E54A4] px-10 py-20 text-white">
            <h1 className="flex h-full items-center justify-between text-4xl font-bold uppercase xl:px-20 xl:text-6xl">
              <span>Feeling</span> <span>Blue?</span>
            </h1>

            <Link href="/" className="inline-flex w-full flex-col items-center">
              <p className="uppercase">Shop Now</p>
              <span className="h-[1px] w-24 bg-white"></span>
            </Link>
          </div>

          <div className="h-screen bg-white p-20">
            <div className="relative h-full w-full">
              <Image
                src="/shop/shop-1.JPG"
                alt={`image of model wearing ${firstProduct.title}`}
                className="object-cover"
                quality={100}
                fill
              />

              <div className="absolute bottom-20 left-1/2 flex h-20 w-[80%] -translate-x-1/2 transform flex-col justify-center bg-gray-900">
                <Link href={`/product/${firstProduct.handle}`}>
                  <p className="text-center text-sm text-white">
                    BLUE EYES ® / {firstProduct.title} <br /> SHOP NOW
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section 2 */}
      <section className="relative flex h-screen w-full">
        <div className="h-screen w-1/2 bg-[#E2E8FF] p-20">
          <div className="relative h-full w-full">
            <Image
              src="/shop/shop-1.JPG"
              alt={`image of model wearing ${firstProduct.title}`}
              className="object-cover"
              quality={100}
              fill
            />

            <div className="absolute bottom-20 left-1/2 flex h-20 w-[80%] -translate-x-1/2 transform flex-col justify-center bg-gray-900">
              <Link href={`/product/${firstProduct.handle}`}>
                <p className="text-center text-sm text-white">
                  BLUE EYES ® / {secondProduct.title} <br /> SHOP NOW
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative h-screen w-1/2">
          <Image
            src="/bg-billeder/bg-4.JPG"
            alt="background image of blue eyes products"
            className="object-cover"
            quality={100}
            fill
          />
        </div>
      </section>
    </>
  );
}
