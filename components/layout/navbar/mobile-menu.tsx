'use client';

import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

import { ArrowRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// menu link import
import { menuLinksMobile } from 'lib/menu-links';

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
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white bg-opacity-95 pb-6 backdrop-blur-xl md:w-[390px]">
              <div className="p-6">
                <div className="flex justify-between">
                  <button
                    className="relative z-10 flex items-center justify-center text-black transition-colors"
                    onClick={closeMobileMenu}
                    aria-label="Close mobile menu"
                  >
                    <XMarkIcon className="h-6 transition-all ease-in-out hover:rotate-45 hover:scale-110" />
                  </button>
                  <p className="">Menu</p>
                </div>

                <div className="mt-24">
                  <p className="mb-10 text-lg">Navigation</p>

                  {menuLinksMobile.length ? (
                    <ul className="flex flex-col gap-6 text-2xl">
                      {menuLinksMobile.map((link, index) => (
                        <li className="" key={index}>
                          <Link
                            href={link.url}
                            onClick={closeMobileMenu}
                            target={link.openNewSite ? '_blank' : ''}
                            rel={link.openNewSite ? 'noreferrer noopener' : ''}
                            className="group flex items-center justify-between border-b border-[#3E54A4]"
                          >
                            <p className="transition-all duration-150 group-hover:translate-x-4 group-hover:text-gray-400">
                              {link.name}
                            </p>
                            <ArrowRightIcon className="h-5 w-5 transition-all duration-150 group-hover:-translate-x-4" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
