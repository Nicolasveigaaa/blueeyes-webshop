import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';

const { SITE_NAME } = process.env;

export default function MobileNav() {
  return (
    <header className="block lg:hidden">
      <nav className="fixed top-0 z-20 flex w-full items-center justify-between bg-white bg-opacity-95 p-6 px-8 py-4 opacity-100 shadow-md backdrop-blur-[.5px]">
        <MobileMenu />

        <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
          <div className="ml-2 flex flex-row items-center gap-2 text-lg font-medium uppercase">
            <Image src="/icons/eye.svg" alt="blue eyes logo" width={30} height={30} />
            {SITE_NAME}
          </div>
        </Link>

        <div className="translate-y-[2px]">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </nav>
    </header>
  );
}
