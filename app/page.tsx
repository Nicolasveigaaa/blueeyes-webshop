import FeaturedSection from 'components/layout/hero/featuredSection';
import HomepageShop from 'components/layout/shop/HomepageShop';
import Image from 'next/image';

export const metadata = {
  title: 'Blue Eyes | blueeyes-icu.com ',
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      {/* HERO / Featured Section */}
      <FeaturedSection />

      {/* Shop Section */}
      <section className="my-20">
        <HomepageShop />
      </section>

      {/* CTA Section */}
      <section className="relative h-[400px] sm:h-[600px] md:h-[750px] lg:h-[800px] 2xl:h-[900px]">
        <Image
          src="/bg-billeder/hav.JPG"
          alt="background image of blue eyes products"
          fill
          quality={100}
          className="object-cover"
        />

        <div className="absolute left-1/2 top-0 inline-flex h-full w-[90%] max-w-[1280px] -translate-x-1/2 transform flex-col justify-between py-4 text-white sm:py-6 md:py-9 lg:py-24 xl:w-[80%] 2xl:w-[80%]">
          <h2 className="mt-6 flex flex-col justify-between gap-2 text-3xl font-bold uppercase sm:text-5xl md:text-6xl lg:flex-row lg:gap-0 lg:text-5xl 2xl:text-6xl">
            <span>We See Your</span>
            <span className="flex sm:justify-end">Blue Lifestyle</span>
          </h2>

          <p className="text-[12px] sm:text-sm lg:text-base xl:text-lg">Blue Eyes / Quete 2024</p>
        </div>
      </section>
    </>
  );
}
