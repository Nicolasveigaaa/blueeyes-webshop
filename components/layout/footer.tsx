import Newsletter from 'components/Newsletter';
import { footerEkstra, menuLinks, socialLinks } from 'lib/menuLinks';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex h-[550px] w-full flex-col justify-between bg-white">
      <div className="mx-auto mt-10 grid h-full w-10/12 grid-cols-1 text-lg sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="hidden flex-col gap-4 border-y lg:flex lg:pt-16">
          <h4 className="text-center">Blue Eyes</h4>
          <p className="mx-auto w-8/12 text-center text-sm font-light">
            lorem sdasjd ffsjf jasf jf fasjf aasfja sfjf sj fsj fa lorem sdasjd ffsjf jasf jf fasjf
            aasfja sfjf sj fsj fa
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t py-8 md:border-b md:border-r md:py-0 md:pt-16 lg:border">
          <h4 className="text-center">Socials</h4>
          <ul className="flex items-center justify-center gap-4 text-sm font-light">
            {socialLinks.map((socials) => (
              <li>
                <Link href={socials.url} className="underline-offset-2 hover:underline">
                  <Image
                    src={`/icons/${socials.icon}`}
                    alt={`${socials.name} link`}
                    width={25}
                    height={25}
                  />
                </Link>
              </li>
            ))}
            <li>
              <Link href="/" className="underline-offset-2 hover:underline">
                <Image src="/icons/Tiktok.svg" alt="Tiktok link" width={20} height={20} />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-y py-8 md:py-0 md:pt-16">
          <h4 className="text-center">Newsletter</h4>

          <div className="flex justify-center gap-2">
            <div>
              <Newsletter />
              <p className="mt-2 text-center text-sm font-light">
                Sign up and get 10% off your next order
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-10 w-10/12 ">
        <div className="my-16 grid grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-0">
          <Link
            href="/"
            className="flex w-full items-center justify-center md:w-auto md:justify-start"
          >
            <div className="flex items-center gap-6">
              <Image src="/icons/eye.svg" alt="blue eyes logo" width={30} height={30} />
              <Image src="/icons/eye.svg" alt="blue eyes logo" width={30} height={30} />
            </div>
          </Link>

          <div className="flex justify-center md:w-auto">
            <ul className="flex gap-6 md:gap-8">
              {menuLinks.map((link) => (
                <li>
                  <Link href={`/${link.url}`} className="underline-offset-2 hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center md:w-auto md:justify-end">
            <ul className="flex gap-6 md:gap-8">
              {footerEkstra.map((link, index) => (
                <li key={index}>
                  <Link href={`/${link.url}`} className="underline-offset-2 hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="pb-10 text-sm font-light md:pb-0">
            @{currentYear} <span className="font-medium">blue eyes icu</span>, all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
