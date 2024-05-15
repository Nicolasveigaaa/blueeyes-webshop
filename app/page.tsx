import FeaturedSection from 'components/layout/hero/featuredSection';
import Test from 'components/layout/shop/HomepageShop';
import Image from 'next/image';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      {/* HERO / Featured Section */}
      <FeaturedSection />

      {/* Shop Section */}
      <section className="h-full">
        <Test />
      </section>

      {/* CTA Section */}
      <section className="relative h-screen">
        <Image
          src="/bg-billeder/bg-1.JPG"
          alt="background image of blue eyes products"
          fill
          quality={100}
          className="object-cover"
        />

        <div className="absolute left-1/2 top-0 inline-flex h-full w-[90%] max-w-[1280px] -translate-x-1/2 transform flex-col justify-between py-20 text-white">
          <h2 className="flex flex-col text-6xl font-bold uppercase">
            <span>We See Your</span>
            <span className="flex justify-end">Blue Lifestyle</span>
          </h2>

          <p>Blue Eyes / Quete 2024</p>
        </div>
      </section>
    </>
  );
}
