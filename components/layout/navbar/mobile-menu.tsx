'use client';

import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// menu link import
import { menuLinksMobile, socialLinks } from 'lib/menuLinks';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex items-center justify-center text-black transition-colors"
      >
        <Bars3Icon className="h-6" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white bg-opacity-95 pb-6 backdrop-blur-xl">
              <div className="p-4">
                <button
                  className="relative z-10 flex items-center justify-center text-black transition-colors"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6 transition-all ease-in-out hover:rotate-45 hover:scale-110" />
                </button>

                <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-center">
                  {menuLinksMobile.length ? (
                    <ul className="flex w-full flex-col items-center">
                      {menuLinksMobile.map((link, index) => (
                        <li
                          className="py-2 text-4xl text-black transition-colors hover:underline"
                          key={index}
                        >
                          <Link
                            href={link.url}
                            onClick={closeMobileMenu}
                            target={link.openNewSite ? '_blank' : ''}
                            rel={link.openNewSite ? 'noreferrer noopener' : ''}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {/* Socials */}
                  <div className="mt-10 flex w-full justify-center">
                    {socialLinks.length ? (
                      <ul className="mx-auto flex items-center gap-6">
                        {socialLinks.map((socials, index) => (
                          <li className="py-2 text-4xl text-black" key={index}>
                            <Link
                              href={socials.url}
                              onClick={closeMobileMenu}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
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
                          <Link
                            href="/"
                            onClick={closeMobileMenu}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src="/icons/Tiktok.svg"
                              alt="Tiktok link"
                              width={20}
                              height={20}
                            />
                          </Link>
                        </li>
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
