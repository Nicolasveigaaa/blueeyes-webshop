import HoleShop from 'components/layout/shop/hole-shop';

export const metadata = {
  title: 'Shop',
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

const page = () => {
  return (
    <div className="h-full w-full bg-white">
      <div className="inset-0 h-14 w-full"></div>
      <HoleShop />
    </div>
  );
};

export default page;
