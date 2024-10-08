'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      localStorage.setItem('isLoggedIn', 'true'); // Store login state in localStorage
      onLogin(); // Notify parent of successful login
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-white p-4 text-black">
      <form onSubmit={handleSubmit} className="flex h-full items-center">
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-44 border p-2"
        />
        <button
          type="submit"
          className="h-full w-full border border-[#3E54A4] bg-[#3E54A4] px-4 text-white"
        >
          <ArrowRightIcon width={16} height={16} />
        </button>
      </form>
      {error && <p className=" text-red-800">{error}!</p>}
    </div>
  );
};

export default Login;
