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
      <div className="fixed top-0 z-20 flex h-14 w-full items-center justify-between bg-white bg-opacity-95 p-6 shadow-md backdrop-blur-[.5px]">
        <div className="block lg:hidden">
          <MobileMenu />
        </div>

        <div className="items-center">
          <Link href="/" className="mr-2 inline-flex items-center justify-center lg:mr-6 lg:w-auto">
            <div className="flex h-full flex-row items-center gap-2 text-lg font-medium uppercase">
              <Image src="/icons/eye.svg" alt="blue eyes logo" width={30} height={30} />
              {SITE_NAME}
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-between py-4 lg:w-[45%] lg:px-8 lg:py-0 xl:w-[35%] 2xl:w-[30%]">
          <ul className="hidden gap-8 lg:flex">
            {menuLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="underline-offset-2 hover:underline"
                  target={link.openNewSite ? '_blank' : ''}
                  rel={link.openNewSite ? 'noreferrer noopener' : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center justify-center">
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}
