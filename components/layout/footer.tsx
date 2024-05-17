import Newsletter from 'components/Newsletter';
import { footerEkstra, menuLinks } from 'lib/menuLinks';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col justify-between bg-white lg:h-[70vh] 2xl:h-[55vh]">
      <div className="mx-auto mt-20 grid h-full w-10/12 grid-cols-3 text-lg">
        <div className="flex flex-col gap-4 border-y pt-16">
          <h4 className="text-center">Blue Eyes</h4>
          <p className="mx-auto w-8/12 text-center text-sm font-light">
            lorem sdasjd ffsjf jasf jf fasjf aasfja sfjf sj fsj fa lorem sdasjd ffsjf jasf jf fasjf
            aasfja sfjf sj fsj fa
          </p>
        </div>

        <div className="flex flex-col gap-4 border pt-16">
          <h4 className="text-center">Socials</h4>
          <div className="flex justify-center gap-4 text-sm font-light">
            <Link href="/">
              <Image src="/icons/Facebook.svg" alt="Facebook link" width={25} height={25} />
            </Link>
            <Link href="/">
              <Image src="/icons/Instagram.svg" alt="Instagram link" width={25} height={25} />
            </Link>
            <Link href="/">
              <Image src="/icons/Linkedin.svg" alt="Linkedin link" width={25} height={25} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-y pt-16">
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
        <div className="my-16 flex flex-col items-center justify-between md:flex-row">
          <Link href="/" className="flex w-full items-center justify-center md:w-auto">
            <div className="flex items-center gap-6">
              <Image src="/icons/eye.svg" alt="blue eyes logo" width={30} height={30} />
              <Image src="/icons/eye.svg" alt="blue eyes logo" width={30} height={30} />
            </div>
          </Link>

          <div className="flex  md:w-auto">
            <ul className="flex gap-8">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <Link href={`/${link.url}`} className="underline-offset-2 hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex  md:w-auto">
            <ul className="flex gap-8">
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
          <p className="text-sm font-light">
            @{currentYear} <span className="font-medium">blue eyes icu</span>, all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
