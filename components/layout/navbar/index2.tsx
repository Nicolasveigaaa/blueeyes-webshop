import { menuLinks } from 'lib/menu-links';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './mobile-menu';

export default function Navbar2() {
  return (
    <header>
      <div className="fixed top-0 z-20 w-full bg-white bg-opacity-95 p-6 shadow-md backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Section */}
          <div className="flex flex-1 items-center">
            <Link href="/">
              <p className="hidden sm:block">
                Blueeyes.iCu
                <sup>
                  <span className="text-[#3E54A4]">©</span>
                </sup>
              </p>
            </Link>
          </div>

          {/* Center Section */}
          <div className="flex items-center justify-center">
            <Link href="/">
              <div className="flex items-center gap-7">
                <Image
                  src="/icons/eyes-logo.svg"
                  alt="blue eyes logo"
                  width={110}
                  height={110}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex flex-1 items-center justify-end">
            <ul className="hidden gap-8 lg:flex">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="group"
                    target={link.openNewSite ? '_blank' : ''}
                    rel={link.openNewSite ? 'noreferrer noopener' : ''}
                  >
                    <p>{link.name}</p>
                    <div className="inset-0 h-[2px] w-full scale-x-0 rounded-full bg-[#3E54A4] transition-all group-hover:scale-x-100"></div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="block lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
