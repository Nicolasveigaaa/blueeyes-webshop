import CardAnimation from 'components/card-scale-animation';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Shop',
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

const shop = async () => {
  const products = await getCollectionProducts({ collection: 'shop' });

  if (!products.length) return null;

  return (
    <>
      <section className="mx-auto mt-20 h-full w-full max-w-[1280px] md:mt-24">
        <div className=" grid w-full grid-cols-1 gap-2 bg-white p-2 md:grid-cols-2 md:gap-12 md:p-0">
          {products.map((product, index) => (
            <div
              className="md: relative h-[500px] overflow-hidden p-6 lg:h-[700px] 2xl:h-[800px]"
              key={index}
            >
              <Link href={`/product/${product.handle}`} aria-description="Button" className="group">
                <CardAnimation>
                  <Image
                    src={product.featuredImage.url}
                    alt={`image of model wearing ${product.title}`}
                    className="object-cover"
                    fill
                  />

                  {product.images[1] && (
                    <Image
                      src={product.images[1].url}
                      alt={`image of model wearing ${product.title}`}
                      fill
                      className="product-image-back absolute left-0 top-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  )}
                </CardAnimation>

                <div className="absolute bottom-0 right-0 z-10 flex h-20 w-full flex-col justify-center bg-[#3E54A4] text-center text-white">
                  <p className="text-base">{product.title}</p>
                  <p className="text-sm font-light">350kr</p>
                </div>

                <div className="absolute bottom-10 right-0 z-[8] flex h-10 w-full translate-y-0 flex-col justify-center bg-white bg-opacity-80 text-center backdrop-blur-xl transition-all duration-300 group-hover:translate-y-[-100%]">
                  <p className="text-[12px] font-light uppercase">View Product</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default shop;
