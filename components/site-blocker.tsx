'use client';

// pages/index.tsx
import { useEffect, useState } from 'react';
import Login from './auth/login-autg';
import SiteBuild from './site-construction';

const SiteBlocker = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    if (storedLogin === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <></> : <SiteBuild />}
      {!isLoggedIn && <Login onLogin={handleLogin} />}
    </div>
  );
};

export default SiteBlocker;
