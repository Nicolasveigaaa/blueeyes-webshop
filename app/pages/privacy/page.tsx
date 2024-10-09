import CardAnimation from 'components/card-scale-animation';
import Image from 'next/image';

// image imports :
import Bg1 from 'public/bg-billeder/bg-8.webp';

export const metadata = {
  title: 'Privacy Policy',
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
          <div className="flex flex-col gap-4 px-8 lg:px-28">
            <h1>Privacy</h1>
            <p className="text-base font-light leading-10">
              This Privacy Policy outlines how Blueeyes.iCu collects, uses, and discloses your
              Personal Information when you visit or make a purchase from the site.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <h2 className="text-lg">Collecting Personal Information</h2>

              <p className="text-base font-light leading-10">
                When you visit the site, we gather certain information about your device,
                interactions with the site, and details necessary to process your purchases.
                Additional information may be collected if you contact us for customer support. In
                this policy, &quot;Personal Information&quot; refers to any data that uniquely
                identifies an individual. See below for details on what Personal Information we
                collect and why:
              </p>

              <ul className="flex list-decimal flex-col gap-4 pl-5 leading-10">
                <li>
                  <h3>Device Information</h3>
                  <ul className="list-disc pl-5 font-light ">
                    <li>
                      <p>
                        Examples of collected Personal Information: web browser version, IP address,
                        time zone, cookie data, pages viewed, search terms, and site interaction.
                      </p>
                    </li>

                    <li>
                      <p>
                        Purpose: to optimize site functionality and conduct analytics to enhance
                        user experience.
                      </p>
                    </li>

                    <li>
                      <p>
                        Source: automatically collected through cookies, web beacons, tags, or
                        pixels.
                      </p>
                    </li>

                    <li>
                      <p>Disclosure: shared with our processor Google, and Facebook(Instagram).</p>
                    </li>
                  </ul>
                </li>

                <li>
                  <h3>Order Information</h3>
                  <ul className="list-disc pl-5 font-light">
                    <li>
                      <p>
                        Examples of collected Personal Information: name, billing address, shipping
                        address, payment details (including credit card numbers), email address, and
                        phone number.
                      </p>
                    </li>

                    <li>
                      <p>
                        Purpose: to fulfill orders, process payments, arrange shipping, provide
                        invoices/order confirmations, communicate with you, mitigate fraud risks,
                        and send product/service-related communications based on your preferences.
                      </p>
                    </li>

                    <li>
                      <p>Source: directly provided by you.</p>
                    </li>
                  </ul>
                </li>

                <li>
                  <h3>General Support Information</h3>
                  <ul className="list-disc pl-5 font-light">
                    <li>
                      <p>Examples of collected Personal Information: Name and Email address.</p>
                    </li>

                    <li>
                      <p>Purpose: to offer general support services.</p>
                    </li>

                    <li>
                      <p>Source: provided by you.</p>
                    </li>

                    <li>
                      <p>Disclosure: shared with our email service provider Google.</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-4 leading-10">
              <h2 className="text-lg">Sharing Personal Information</h2>

              <p className="text-base font-light ">
                We may share your Personal Information with service providers to facilitate our
                services and fulfill contractual obligations, as outlined above. For instance:
              </p>

              <ul className="list-disc pl-5 font-light">
                <li>
                  <p>
                    We may disclose Personal Information to comply with legal obligations, respond
                    to lawful requests, or protect our rights.
                  </p>
                </li>

                <li>
                  <p>
                    Facebook (Instagram) and Google are used for advertising purposes. Read more
                    about their use of Personal Information: Facebook Policy and Google Policy.
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-4 leading-10">
              <h2 className="text-lg">Your Rights</h2>

              <p className="text-base font-light">
                Under GDPR, if you reside in the EEA, you have rights regarding your Personal
                Information:
              </p>

              <ul className="list-disc pl-5 font-light">
                <li>
                  <p>
                    Access, transfer, correction, update, or erasure of your Personal Information.
                  </p>
                </li>

                <li>
                  <p>Object to automated decision-making.</p>
                </li>

                <li>
                  <p>Data portability.</p>
                </li>

                <li>
                  <p>Lodge a complaint with a data protection authority.</p>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <h2 className="text-lg">Cookies</h2>

              <p className="text-base font-light leading-10">
                Cookies enhance browsing experience and include functional, performance,
                advertising, and social media or content cookies. Manage your cookie settings
                through your browser controls.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <h2 className="text-lg">Changes</h2>

              <p className="text-base font-light leading-10">
                This Privacy Policy may be updated periodically for operational, legal, or
                regulatory reasons.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <h2 className="text-lg">Address</h2>

              <p className="text-base font-light leading-10">
                Blueeyes.iCu: Lykkesholms allé 16b, Frederiksberg C, Denmark, 1902
              </p>
              <p className="text-base font-light leading-10">
                Last updated: 7/17 - 2024 If unsatisfied with our response, contact your local data
                protection authority or Denmark’s Datatilsynet at the address provided.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
