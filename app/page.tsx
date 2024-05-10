import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      {/* HERO / Featured Section 1 */}
      <section className="flex h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-1/2">
          <Image
            src="/bg-billeder/bg-2.JPG"
            alt="background image of blue eyes products"
            className="object-cover"
            quality={100}
            fill
          />
        </div>

        <div className="flex w-1/2 flex-col justify-between">
          <div className="h-screen bg-[#3E54A4] px-10 py-20 text-white">
            <h1 className="flex h-full items-center justify-between text-4xl font-bold uppercase xl:px-20 xl:text-6xl">
              <span>Feeling</span> <span>Blue?</span>
            </h1>

            <Link href="/" className="inline-flex w-full flex-col items-center">
              <p className="uppercase">Shop Now</p>
              <span className="h-[1px] w-24 bg-white"></span>
            </Link>
          </div>

          <div className="h-screen bg-white p-20">
            <div className="inset-0 flex h-full w-full flex-col justify-end bg-blue-400">
              <div className="mx-auto mb-24 flex h-20 w-[80%] flex-col justify-center bg-gray-900">
                <Link href="/">
                  <p className="text-center text-sm text-white">
                    BLUE EYES ® / T-SHIRT <br /> SHOP NOW
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section 2 */}
      <section className="flex h-screen w-full">
        <div className="h-screen w-1/2 bg-[#E2E8FF] p-20">
          <div className="inset-0 flex h-full w-full flex-col justify-end bg-blue-400">
            <div className="mx-auto mb-24 flex h-20 w-[80%] flex-col justify-center bg-gray-900">
              <Link href="/">
                <p className="text-center text-sm text-white">
                  BLUE EYES ® / T-SHIRT <br /> SHOP NOW
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen w-1/2">
          <Image
            src="/bg-billeder/bg-1.JPG"
            alt="background image of blue eyes products"
            className="object-cover"
            quality={100}
            fill
          />
        </div>
      </section>

      {/* Shop Section */}
      <section className="h-full"></section>

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
