import Image from 'next/image';

const phoneNumber = 'tel:+4561728989';

export const metadata = {
  title: 'Contact',
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

const page = () => {
  return (
    <>
      <section className="flex w-full flex-col lg:flex-row">
        <div className="relative top-0 order-2 h-[100dvh] w-full lg:sticky lg:order-1 lg:w-1/2">
          <Image
            src="/bg-billeder/bil.JPG"
            alt="background image showing model with Blue Eyes product"
            className="object-cover "
            fill
          />
        </div>

        <div className="order-1 my-auto w-full py-28 lg:order-2 lg:w-1/2 lg:pt-28 2xl:pt-0">
          <div className="flex flex-col gap-12 px-8 lg:px-28">
            <h1>Contact</h1>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg">Support</h2>
              <p className="text-base font-light leading-10">
                If you have questions about products, orders, shipping and returns, ask us on:
              </p>

              <div className="flex gap-1">
                <a href={phoneNumber} className="text-base underline hover:text-gray-600">
                  nicogalvei@gmail.com
                </a>

                <p>or</p>
              </div>

              <div className="mt-3 flex gap-1">
                <a href={phoneNumber} className="text-base underline hover:text-gray-600">
                  +45 61 72 89 89
                </a>
                <p className="font-light">from monday - friday, 10am - 2pm</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg">General</h2>
              <p className="text-base font-light leading-10">
                If you have questions about products, orders, shipping and returns, ask us on:
              </p>

              <div className="flex gap-1">
                <a
                  href="mailto:nicogalvei@gmail.com"
                  className="text-base underline hover:text-gray-600"
                >
                  nicogalvei@gmail.com
                </a>

                <p>or</p>
              </div>

              <div className="mt-3 flex gap-1">
                <a href={phoneNumber} className="text-base underline hover:text-gray-600">
                  +45 61 72 89 89
                </a>
                <p className="font-light">from monday - friday, 10am - 2pm</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg">Sales</h2>
              <p className="text-base font-light leading-10">
                If you have questions about products, orders, shipping and returns, ask us on:
              </p>

              <div className="flex gap-1">
                <a
                  href="mailto:nicogalvei@gmail.com"
                  className="text-base underline hover:text-gray-600"
                >
                  nicogalvei@gmail.com
                </a>

                <p>or</p>
              </div>

              <div className="mt-3 flex gap-1">
                <a href={phoneNumber} className="text-base underline hover:text-gray-600">
                  +45 61 72 89 89
                </a>
                <p className="font-light">from monday - friday, 10am - 2pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
