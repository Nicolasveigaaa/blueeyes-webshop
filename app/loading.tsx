'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loading() {
  return (
    <main
      className={`absolute inset-0 z-[200] flex h-screen items-center justify-center bg-white transition-opacity duration-500`}
    >
      <motion.div
        className="flex items-center gap-7"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 0.3, loop: Infinity, ease: 'linear' }}
      >
        <Image
          src="/icons/eyes-logo.svg"
          alt="blue eyes logo"
          width={110}
          height={110}
          className="object-contain"
        />
      </motion.div>
    </main>
  );
}
