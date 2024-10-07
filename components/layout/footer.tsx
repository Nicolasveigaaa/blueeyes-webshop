import Newsletter from 'components/Newsletter';
import { footerEkstra, menuLinks, socialLinks } from 'lib/menu-links';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex h-[550px] w-full flex-col justify-between bg-white">
      <div className="container mx-auto mt-10 grid h-full grid-cols-1 px-6 text-lg md:grid-cols-2 lg:grid-cols-3">
        <div className="hidden flex-col gap-4 border-y lg:flex lg:pt-16">
          <h4 className="text-center">
            Blueeyes.iCu
            <sup>
              <span className="text-[#3E54A4]">©</span>
            </sup>
          </h4>
          <p className="mx-auto w-8/12 text-center text-sm font-light">
            Since 2023, Blueeyes.iCu has been dedicated to blending fashion and exceptional quality
            with a vision of unity, simplicity, and quality.
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t py-8 md:border-b md:border-r md:py-0 md:pt-16 lg:border">
          <h4 className="text-center">Socials</h4>
          <ul className="flex items-center justify-center gap-4 text-sm font-light">
            {socialLinks.map((socials, id) => (
              <li key={id}>
                <Link
                  href={socials.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Image
                    src={`/icons/${socials.icon}`}
                    alt={`${socials.name} link`}
                    width={30}
                    height={30}
                    className="object-fit transition-all group-hover:scale-90"
                  />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://www.tiktok.com/@blueeyes_icu?_t=8pJ6aguJ35s&_r=1"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/Tiktok.svg"
                  alt="Tiktok link"
                  width={25}
                  height={25}
                  className="object-fit transition-all group-hover:scale-90"
                />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex w-full flex-col gap-4 border-y py-8 md:py-0 md:pt-16">
          <h4 className="text-center">Newsletter</h4>

          <div className="mx-auto flex w-[80%] justify-center gap-2">
            <div>
              <Newsletter />
              <p className="mt-2 text-center text-sm font-light">
                Get notified before a drop so you dont miss out!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-10 w-10/12 ">
        <div className="my-16 grid grid-cols-1 items-center gap-8 text-sm md:grid-cols-3 md:gap-0">
          <Link href="/" className="inline-flex w-fit">
            <div className="flex items-center justify-center">
              <Image
                src="/icons/eyes-logo.svg"
                alt="blue eyes logo"
                width={110}
                height={110}
                className="object-fit h-full"
              />
            </div>
          </Link>

          <div className="flex items-center justify-center md:w-auto">
            <ul className="flex gap-8">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="group underline-offset-2"
                    target={link.openNewSite ? '_blank' : ''}
                    rel={link.openNewSite ? 'noreferrer noopener' : ''}
                  >
                    <p>{link.name}</p>
                    <div className="inset-0 h-[2px] w-full scale-x-0 rounded-full bg-[#3E54A4] transition-all group-hover:scale-x-100"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center md:w-auto md:justify-end">
            <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {footerEkstra.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="group">
                    <p>{link.name}</p>
                    <div className="inset-0 h-[2px] w-full scale-x-0 rounded-full bg-[#3E54A4] transition-all group-hover:scale-x-100"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <p className="pb-10 text-[12px] font-light md:pb-0">
            @{currentYear} <span className="font-medium">Blueeyes.iCu</span>, all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
