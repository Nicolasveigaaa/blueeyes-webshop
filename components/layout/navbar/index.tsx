import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

const { SITE_NAME } = process.env;

// menu link import
import { menuLinks } from 'lib/menuLinks';

export default async function Navbar() {
  return (
    <header>
      <nav className="fixed top-0 z-20 flex w-full items-center justify-between p-6 ">
        <div className="block flex-none md:hidden">{/* mobile nav */}</div>

        <div className="flex w-full items-center justify-between">
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
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

          <div className="hidden items-center justify-between bg-white px-8 py-4 shadow-md md:flex md:w-1/4">
            <ul className="flex gap-8">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <Link href={`/${link.url}`} className="hover:text-gray-600">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="translate-y-[2px]">
              <Suspense fallback={<OpenCart />}>
                <Cart />
              </Suspense>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
