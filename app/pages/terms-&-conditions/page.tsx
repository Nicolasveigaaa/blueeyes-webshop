import CardAnimation from 'components/card-scale-animation';
import Image from 'next/image';
import Link from 'next/link';

// image imports :
import Bg1 from 'public/bg-billeder/bg-1.webp';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

const page = () => {
  return (
    <>
      <section className="flex w-full flex-col lg:flex-row">
        <div className="w-full py-28 lg:w-1/2 lg:pt-28">
          <div className="flex flex-col gap-4 px-8 lg:px-28">
            <h1>Terms & Conditions</h1>
            <p className="text-base font-light leading-10">
              Welcome to Blueeyes.iCu. These Terms and Conditions govern your use of our website and
              services provided through it. By accessing or using our website, you agree to comply
              with these Terms and Conditions.
            </p>

            <ul className="flex list-decimal flex-col gap-4 pl-5 leading-10">
              <li>
                <h2>Use of Website</h2>
                <ul className="list-disc pl-5 font-light">
                  <li>
                    <p>
                      You are granted a limited license to access and use the materials contained on
                      this website for personal, non-commercial use only.
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <h2>Products</h2>
                <ul className="list-disc pl-5 font-light">
                  <li>
                    <p>All products displayed on our website are subject to availability.</p>
                  </li>

                  <li>
                    <p>
                      We make every effort to display as accurately as possible the colors and
                      images of our products. However, we cannot guarantee that your computer
                      monitor&apos;s display of any color will be accurate.
                    </p>
                  </li>

                  <li>
                    <p>
                      Our shipping and delivery terms are outlined in our{' '}
                      <Link className="font-semibold" href="/pages/policies">
                        Shipping Policy
                      </Link>
                      .
                    </p>
                  </li>

                  <li>
                    <p>
                      We aim to dispatch online orders within 7 business days. Delivery times may
                      vary depending on your location and selected shipping method.
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <h2>Returns and Exchanges</h2>
                <ul className="list-disc pl-5 font-light">
                  <li>
                    <p>Our Return and Exchange Policy is detailed in our dedicated policy page.</p>
                  </li>

                  <li>
                    <p>
                      To initiate a return or exchange, please follow the instructions on our{' '}
                      <Link className="font-semibold" href="/pages/policies">
                        Returns policy
                      </Link>
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <h2>Intellectual Property</h2>
                <ul className="list-disc pl-5 font-light">
                  <li>
                    <p>
                      The content on this website, including but not limited to text, graphics,
                      logos, images, and software, is the property of Blueeyes.iCu and is protected
                      by copyright and other intellectual property laws.
                    </p>
                  </li>

                  <li>
                    <p>
                      You may not reproduce, distribute, modify, display, perform, transmit, or
                      otherwise use any content from this website without our prior written consent.
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <h2>Privacy</h2>
                <ul className="list-disc pl-5 font-light">
                  <li>
                    <p>
                      Your use of our website is also governed by our{' '}
                      <Link className="font-semibold" href="/pages/privacy">
                        Privacy Policy
                      </Link>
                      , which outlines how we collect, use, and disclose your personal information.
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <h2>Limitation of Liability</h2>
                <ul className="list-disc pl-5 font-light">
                  <li>
                    <p>
                      In no event shall Blueeyes.iCu, its directors, officers, employees,
                      affiliates, agents, contractors, interns, suppliers, service providers, or
                      licensors be liable for any injury, loss, claim, or any direct, indirect,
                      incidental, punitive, special, or consequential damages of any kind,
                      including, without limitation lost profits, lost revenue, lost savings, loss
                      of data, replacement costs, or any similar damages, whether based in contract,
                      tort (including negligence), strict liability or otherwise, arising from your
                      use of any of the service or any products procured using the service, or for
                      any other claim related in any way to your use of the service or any product,
                      including, but not limited to, any errors or omissions in any content, or any
                      loss or damage of any kind incurred as a result of the use of the service or
                      any content (or product) posted, transmitted, or otherwise made available via
                      the service, even if advised of their possibility. Claims against Blueeyes.iCu
                      can in no event exceed the purchase price of the product.
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <h2>Governing Law</h2>
                <ul className="list-disc pl-5 font-light">
                  <li>
                    <p>
                      These Terms and Conditions shall be governed by and construed in accordance
                      with the laws of Denmark, without regard to its conflict of law provisions.
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <h2>Changes to Terms and Conditions</h2>
                <ul className="list-disc pl-5 font-light">
                  <li>
                    <p>
                      We reserve the right, at our sole discretion, to update, change, or replace
                      any part of these Terms and Conditions by posting updates and changes to our
                      website. It is your responsibility to check our website periodically for
                      changes. Your continued use of or access to our website following the posting
                      of any changes to these Terms and Conditions constitutes acceptance of those
                      changes.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative top-0 h-[100dvh] w-full overflow-hidden lg:sticky lg:w-1/2">
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
      </section>
    </>
  );
};

export default page;
