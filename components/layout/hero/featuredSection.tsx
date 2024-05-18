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
          <div className="h-full bg-[#3E54A4] px-10 py-20 text-white lg:h-1/2">
            <h1 className="flex h-full items-center justify-between text-3xl font-bold uppercase sm:text-5xl md:text-6xl lg:text-5xl xl:px-20 2xl:text-6xl">
              <span>Feeling</span> <span>Blue?</span>
            </h1>

            <Link href="/pages/shop" className="inline-flex w-full flex-col items-center">
              <p className="uppercase">Shop Now</p>
              <span className="h-[1px] w-24 bg-white"></span>
            </Link>
          </div>

          <div className="hidden h-1/2 bg-white p-6 lg:block lg:p-20">
            <div className="relative h-full w-full">
              <Image
                src="/shop/featured.JPG"
                alt={`image of model wearing ${firstProduct.title}`}
                className="object-cover"
                fill
              />

              <Link href={`/product/${firstProduct.handle}`}>
                <div className="absolute bottom-[10%] left-1/2 flex h-20 w-[80%] -translate-x-1/2 transform flex-col justify-center bg-[#3E54A4]  hover:bg-blue-400 xl:w-[60%]">
                  <div className="text-center text-sm text-white  ">
                    <p>BLUE EYES ® / {firstProduct.title}</p>
                    <p className="mt-[1px] inline-block uppercase underline">Shop Now</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section 2 */}
      <section className="relative hidden h-[100dvh] w-full flex-col lg:flex lg:flex-row">
        <div className="mt-[-24px] h-full w-full bg-white p-6 lg:mt-0 lg:w-1/2 lg:p-20">
          <div className="relative h-full w-full">
            <Image
              src="/shop/featured3.JPG"
              alt={`image of model wearing ${secondProduct.title}`}
              className="object-cover"
              fill
            />

            <Link href={`/product/${secondProduct.handle}`}>
              <div className="absolute bottom-[10%] left-1/2 flex h-20 w-[80%] -translate-x-1/2 transform flex-col justify-center bg-[#3E54A4] hover:bg-blue-400  xl:w-[60%]">
                <div className="text-center text-sm text-white  ">
                  <p>BLUE EYES ® / {secondProduct.title}</p>
                  <p className="mt-[1px] inline-block uppercase underline">Shop Now</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="relative h-full w-1/2">
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
