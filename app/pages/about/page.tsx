import CardAnimation from 'components/card-scale-animation';
import Image from 'next/image';

// image imports :
import Bg1 from 'public/bg-billeder/bg-6.webp';

export const metadata = {
  title: 'About',
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

        <div className="sticky top-0 h-screen w-full overflow-hidden lg:w-1/2">
          <CardAnimation>
            <Image
              src={Bg1}
              alt="background image showing model with Blue Eyes product"
              className="object-cover"
              fill
              placeholder="blur"
            />
          </CardAnimation>
        </div>
      </section>
    </>
  );
};

export default page;
