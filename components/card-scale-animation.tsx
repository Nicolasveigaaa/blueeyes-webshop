'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CardAnimation = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 1.2 }}
      animate={{ scale: isInView ? 1 : 1.2 }}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      className="flex h-full w-full "
    >
      {children}
    </motion.div>
  );
};

export default CardAnimation;
