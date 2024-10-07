import CardAnimation from 'components/card-scale-animation';
import Image from 'next/image';

// Image imports :
import Bg1 from 'public/bg-billeder/bg-3.webp';

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
        <div className="relative top-0 order-2 h-[100dvh] w-full overflow-hidden lg:sticky lg:order-1 lg:w-1/2">
          <CardAnimation>
            <Image
              src={Bg1}
              alt="background image showing model with Blue Eyes product"
              className="object-cover "
              fill
              placeholder="blur"
            />
          </CardAnimation>
        </div>
        <div className="order-1 w-full py-28 lg:order-2 lg:w-1/2 lg:pt-28">
          <div className="flex flex-col gap-6 px-8 lg:px-28">
            <h1>Contact</h1>

            <div className="flex flex-col gap-6">
              <p className="text-base font-light leading-10">
                If you have any collaboration ideas or general inquiries, we encourage you to reach
                out to us at general@blueeyes-icu.com. Whether you&#39;re looking to explore
                partnership opportunities or simply have questions about our company, we are here to
                assist you.
              </p>
              <p className="text-base font-light leading-10">
                For specific inquiries related to our products, orders, or returns, we’re happy to
                provide comprehensive assistance. You can contact us directly through the general
                email address above
              </p>
              <p className="text-base font-light leading-10">
                At Blueeyes.iCu, we value clear communication and aim to provide prompt and helpful
                responses to all inquiries. Whether you&#39;re a potential collaborator, customer,
                or retailer, we look forward to hearing from you and assisting in any way we can.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <h2 className="text-lg">General Contact</h2>

              <div>
                <div className="inline-flex flex-col gap-1">
                  <a
                    href="mailto:general@blueeyes-icu.com"
                    className="text-base transition-all hover:text-gray-600"
                  >
                    general@blueeyes-icu.com
                  </a>
                  <div className="w-fullrounded-full inset-0 h-[2px] bg-[#3E54A4]"></div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4">
              <h2 className="text-lg">For Personal Contact</h2>

              <div className="flex flex-col gap-8 md:flex-row md:gap-20 lg:flex-col lg:gap-8 2xl:flex-row 2xl:gap-20">
                <div className="flex flex-col gap-3">
                  <div>
                    <h3>Albert Heiberg</h3>
                    <p className="text-gray-600">Chief executive officer</p>
                  </div>

                  <div>
                    <div className="inline-flex flex-col gap-1">
                      <a href="tel:+4528992287" className="transition-all hover:text-gray-600">
                        +45 28 99 22 87
                      </a>

                      <a
                        href="mailto:albertheiberglarsen@gmail.com"
                        className="text-base transition-all hover:text-gray-600"
                      >
                        albertheiberglarsen@gmail.com
                      </a>
                      <div className="w-fullrounded-full inset-0 h-[2px] bg-[#3E54A4]"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div>
                    <h3>Silas Thomsen</h3>
                    <p className="text-gray-600">Chief financial officer</p>
                  </div>

                  <div>
                    <div className="inline-flex flex-col gap-1">
                      <a href="tel:+4561314292" className="transition-all hover:text-gray-600">
                        +45 61 31 42 92
                      </a>

                      <a
                        href="mailto:Silastb@live.dk"
                        className="text-base transition-all hover:text-gray-600"
                      >
                        Silastb@live.dk
                      </a>

                      <div className="w-fullrounded-full inset-0 h-[2px] bg-[#3E54A4]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
