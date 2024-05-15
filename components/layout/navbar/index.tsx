import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  return (
    <nav className="fixed top-0 z-20 flex w-full items-center justify-between  p-4 lg:px-6">
      <div className="block flex-none md:hidden">{/* mobile nav */}</div>

      <div className="flex w-full items-center justify-between">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <div className="ml-2 flex flex-row items-center gap-2 text-lg font-medium uppercase">
              <Image
                src="/icons/eye.svg"
                alt="blue eyes logo"
                width={30}
                height={30}
                className="
                mix-blend-difference"
              />
              {SITE_NAME}
            </div>
          </Link>
        </div>

        <div className="flex justify-between bg-white p-4 shadow-md md:w-1/3">
          <ul className="flex gap-8">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/">Gallery</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>

          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
