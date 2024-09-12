import Image from 'next/image';

export const metadata = {
  title: 'Policies',
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

const page = () => {
  return (
    <>
      <section className="flex w-full flex-col lg:flex-row">
        <div className="w-full py-28 lg:w-1/2">
          <div className="flex flex-col gap-4 px-8 lg:px-28">
            <h1>Policies</h1>

            <div className="mt-8 flex flex-col gap-4">
              <h2 className="text-lg">General Policy for Blueeyes.iCu</h2>

              <p className="text-base font-light leading-10">
                At Blueeyes.iCu, we are committed to providing our customers with high-quality
                products and exceptional service. Our policies are designed to ensure a positive
                shopping experience for every customer. Please review the following guidelines
                beneath.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <h2 className="text-lg">Quality Assurance</h2>

              <p className="text-base font-light leading-10">
                We strive to deliver clothing items that meet stringent quality standards. Each
                product is meticulously inspected to ensure durability, comfort, and style.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <h2 className="text-lg">Returns and Exchanges</h2>

              <p className="text-base font-light leading-10">
                We offer a hassle-free return and exchange policy within 14 days of purchase. Items
                must be in unused condition with tags attached. Customers are responsible for return
                shipping costs unless the item received is defective or incorrect. We will hold back
                the payment until we have received the item.
              </p>

              <p className="text-base font-light leading-10">
                If you wish to exchange your item(s) for a different size or color, please initiate
                the exchange process within 14 days of receiving your order. The item(s) must be
                unused and in its original packaging. Once we receive the returned item, we will
                promptly process the exchange based on availability. Please note that any price
                differences will be adjusted accordingly using the original payment method.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <h2 className="text-lg">Shipping</h2>

              <p className="text-base font-light leading-10">
                Currently, at Blueeyes.iCu, our focus is on empowering our local community through
                pop-up shops. As such, we do not offer standard shipping options at this time,
                except for special deals where exceptions may apply.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <h2 className="text-lg">Privacy and Security</h2>

              <p className="text-base font-light leading-10">
                We value your privacy and ensure that all personal information provided to us is
                handled securely and in accordance with our privacy policy.
              </p>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen w-full lg:w-1/2">
          <Image
            src="/bg-billeder/bg-5.webp"
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
