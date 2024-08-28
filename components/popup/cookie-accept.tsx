'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const CookiePopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('hasAcceptedCookies');
    if (!hasAcceptedCookies) {
      setIsPopupVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      localStorage.setItem('hasAcceptedCookies', 'true');
      setIsPopupVisible(false);
    }, 300); // Match this duration with the Tailwind duration
  };

  if (!isPopupVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[200] p-4 transition-opacity duration-300 md:p-12 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="container mx-auto items-center justify-between rounded-lg bg-white bg-opacity-95  px-10 py-6 shadow-md backdrop-blur-xl md:flex">
        <p className="pb-6 text-center text-black md:pb-0">
          By using our site, you accept our{' '}
          <Link href="/pages/privacy" className="underline">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms-&-conditions" className="underline">
            Terms & Conditions
          </Link>
          .
        </p>
        <button
          onClick={handleAccept}
          className="mx-auto flex items-center bg-[#3E54A4] px-4 py-2 text-white hover:bg-[#29337f] md:mx-0"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
