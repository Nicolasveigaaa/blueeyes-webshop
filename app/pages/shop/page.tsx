import HoleShop from 'components/layout/shop/HoleShop';

export const metadata = {
  title: 'Shop | blueeyes-icu.com ',
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

const page = () => {
  return (
    <div className="h-full w-full bg-white">
      <div className="] h-28 w-full">
        <HoleShop />
      </div>
    </div>
  );
};

export default page;
