import Image from 'next/image';

export const metadata = {
  title: 'About | blueeyes-icu.com ',
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

const page = () => {
  return (
    <>
      <section className="flex w-full">
        <div className="my-auto w-1/2">
          <div className="flex flex-col gap-12 px-28">
            <h1>About</h1>

            <p className="text-lg font-light leading-10">
              Born out of Copenhagen in 2020, Parel Studios began with the simple mission of
              amplifying the essence of functional design in products - striking the balance between
              functionality and aesthetics in the space of traditional workwear, lifestyle and
              activewear.
            </p>

            <p className="text-lg font-light leading-10 text-gray-600">
              The name Parel comes from the word apparel, and signifies the brands ethos of clothing
              that works for all ranges of activity. Parel aims to easily offer comfort and
              confidence in people's daily routines by creating practical, functional apparel with
              an all-day usability. The name Parel comes from the word apparel, and signifies the
              brands ethos of clothing that works for all ranges of activity. Parel aims to easily
              offer comfort and confidence in people's daily routines by creating practical,
              functional apparel with an all-day usability.
            </p>
          </div>
        </div>

        <div className="sticky top-0 h-screen w-1/2">
          <Image
            src="/bg-billeder/hest.JPG"
            alt="background image showing model with Blue Eyes product"
            className="object-cover"
            quality={100}
            fill
          />
        </div>
      </section>
    </>
  );
};

export default page;
