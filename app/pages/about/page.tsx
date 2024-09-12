import Image from 'next/image';

export const metadata = {
  title: 'About',
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

const page = () => {
  return (
    <>
      <section className="flex w-full flex-col lg:flex-row">
        <div className="my-auto w-full py-28 lg:w-1/2">
          <div className="flex flex-col gap-12 px-8 lg:px-28">
            <h1>About</h1>

            <p className="text-lg font-light leading-10">
              Founded in the heart of Copenhagen by Albert and his associates, Blue Eyes ICU was
              established in 2023. Driven by a passion for fashion and quality, the brand embodies a
              unique perspective of the world - our perspective.
            </p>

            <p className="text-lg font-light leading-10 text-gray-600">
              The blue eyes symbolize the beauty we aspire to see in the simple and ordinary, while
              creating a community around the brand with everyone wishing to share the perspective
              of the blue eyes. Blue Eyes ICU represents our commitment to creating a simple yet
              captivating brand that catches the eye while embracing the community.
            </p>
          </div>
        </div>

        <div className="sticky top-0 h-screen w-full lg:w-1/2">
          <Image
            src="/bg-billeder/bg-6.webp"
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
