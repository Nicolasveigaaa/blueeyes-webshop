'use client';

import Image from 'next/image';
import { useState } from 'react';
import Login from './auth/login-autg';

const SiteBuild = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  if (isLoggedIn) {
    return null; // Nothing is rendered when logged in
  }

  return (
    <div className="fixed inset-0 left-0 top-0 z-[210] flex h-screen w-full items-center justify-center backdrop-blur-xl">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 bg-blue-800 bg-opacity-60 text-white">
        <div className="flex items-center justify-center">
          <Image
            src="/icons/blue-eyes-white.svg"
            alt="blue eyes logo"
            width={280}
            height={280}
            className="object-contain"
          />
        </div>
        <h1 className="m w-10/12 text-center text-3xl font-bold uppercase sm:text-4xl lg:text-6xl">
          Webshop online soon
        </h1>
        <Login onLogin={handleLogin} />
        <p className="w-8/12 text-center">
          Stay tuned for updates by following our{' '}
          <a href="https://www.instagram.com/blueeyes.icu/" className="underline">
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
};

export default SiteBuild;
