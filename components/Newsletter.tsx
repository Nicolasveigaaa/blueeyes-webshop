'use client';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic, e.g., API call
    setEmail('');
  };

  return (
    <div className="flex justify-center gap-2">
      <form onSubmit={handleFormSubmit} className="w-full max-w-sm">
        <div className="flex h-10 border">
          <label htmlFor="newsletter" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="newsletter"
            value={email}
            onChange={handleInputChange}
            className="mb-4 h-full w-full pl-2 text-sm"
            placeholder="email"
            required
          />
          <button type="submit" className="h-full w-12 hover:bg-gray-200">
            <ArrowRightIcon width={20} height={20} className="mx-auto" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
