import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';

const { SITE_NAME } = process.env;

// menu link import
import { menuLinks } from 'lib/menuLinks';

export default function Navbar() {
  return (
    <header>
      <div className="fixed top-0 z-20 hidden w-full items-center justify-between p-6 lg:flex">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-1/3">
            <Link href="/" className="mr-6 flex w-full items-center justify-center md:w-auto">
              <div className="ml-2 flex flex-row items-center gap-2 text-lg font-medium uppercase">
                <Image src="/icons/eye.svg" alt="blue eyes logo" width={30} height={30} />
                {SITE_NAME}
              </div>
            </Link>
          </div>

          <div className="flex w-[45%] items-center justify-between bg-white bg-opacity-95 px-8 py-4 opacity-100 shadow-md backdrop-blur-[.5px] xl:w-[35%] 2xl:w-[30%]">
            <ul className="flex gap-8">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <Link href={`/${link.url}`} className="underline-offset-2 hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden translate-y-[2px] lg:block">
              <Suspense fallback={<OpenCart />}>
                <Cart />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-0 z-20 flex w-full items-center justify-between bg-white bg-opacity-95 p-6 px-8 py-4 opacity-100 shadow-md backdrop-blur-[.5px] lg:hidden">
        <MobileMenu />

        <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
          <div className="ml-2 flex flex-row items-center gap-2 text-lg font-medium uppercase">
            <Image src="/icons/eye.svg" alt="blue eyes logo" width={30} height={30} />
            {SITE_NAME}
          </div>
        </Link>

        <div className="block translate-y-[2px] lg:hidden">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
