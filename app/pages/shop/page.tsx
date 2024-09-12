import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

const shop = async () => {
  const products = await getCollectionProducts({ collection: 'shop' });

  if (!products.length) return null;

  return (
    <>
      <section className="grid h-full w-full grid-cols-1 md:grid-cols-2 ">
        <div className="order-2 h-full w-full bg-white p-6 sm:p-10 md:p-16 lg:order-1 lg:mt-0 lg:w-1/2 lg:p-8 xl:p-20">
          {products.map((product, index) => (
            <div className="relative h-[800px]" key={index}>
              <Link href={`/product/${product.handle}`} aria-description="Button" className="group">
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
