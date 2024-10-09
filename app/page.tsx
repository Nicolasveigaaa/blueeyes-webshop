import CardAnimation from 'components/card-scale-animation';
import FeaturedSection from 'components/layout/hero/featured-section';
import Image from 'next/image';

// image imports :
import Bg1 from 'public/bg-billeder/hav.webp';

export const metadata = {
  title: 'Blueeyes iCu | Home to the simple yet captivating | Blueeyes.iCu',
  description:
    'Founded in the heart of Copenhagen by Albert and his associates, Blue Eyes ICU was established in 2023. Driven by a passion for fashion and quality, the brand embodies a unique perspective of the world - our perspective.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      {/* HERO / Featured Section */}
      <FeaturedSection />

      {/* CTA Section */}
      <section className="relative h-[400px] overflow-hidden sm:h-[600px] md:h-[750px] lg:h-[800px] 2xl:h-[900px]">
        <CardAnimation>
          <Image
            src={Bg1}
            alt="background image of blue eyes products"
            fill
            placeholder="blur"
            className="object-cover"
          />
        </CardAnimation>

        <div className="absolute left-1/2 top-0 inline-flex h-full w-[90%] max-w-[1280px] -translate-x-1/2 transform flex-col justify-between py-4 text-white sm:py-6 md:py-9 lg:py-24 xl:w-[80%] 2xl:w-[80%]">
          <h2 className="mt-6 flex flex-col justify-between gap-2 text-4xl font-bold uppercase sm:text-6xl md:text-7xl lg:flex-row lg:gap-0 lg:text-6xl 2xl:text-7xl">
            <span>Blue</span>
            <span className="flex sm:justify-end">Lifestyle</span>
          </h2>

          <div className="flex gap-2">
            <div className="flex items-center gap-7">
              <Image
                src="/icons/eyes-logo.svg"
                alt="blue eyes logo"
                width={80}
                height={80}
                className="object-fit"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
