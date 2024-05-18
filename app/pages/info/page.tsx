import Image from 'next/image';

export const metadata = {
  title: 'Info | blueeyes-icu.com ',
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

const page = () => {
  return (
    <>
      <section className="flex w-full flex-col lg:flex-row">
        <div className="my-auto w-full py-28 pt-28 lg:w-1/2 lg:py-0 2xl:pt-0">
          <div className="flex flex-col gap-12 px-8 lg:px-28">
            <h1>Info</h1>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg">Shipping</h2>
              <p className="text-base font-light leading-10">
                If you have questions about products, orders, shipping and returns, ask us on:
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg">Return Policy</h2>
              <p className="text-base font-light leading-10">
                If you have questions about products, orders, shipping and returns, ask us on:
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg">Privacy Policy</h2>
              <p className="text-base font-light leading-10">
                If you have questions about products, orders, shipping and returns, ask us on:
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg">Terms of use</h2>
              <p className="text-base font-light leading-10">
                If you have questions about products, orders, shipping and returns, ask us on:
              </p>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen w-full lg:w-1/2">
          <Image
            src="/shop/featured2.JPG"
            alt="background image showing model with Blue Eyes product"
            className="object-cover"
            fill
          />
        </div>
      </section>
    </>
  );
};

export default page;
