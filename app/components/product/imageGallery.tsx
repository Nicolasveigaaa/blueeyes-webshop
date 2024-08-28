'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

type ImageProps = {
  url: string;
  altText: string;
};

type ImageGalleryProps = {
  images: ImageProps[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imagesContainerRef.current) {
        const { scrollLeft, clientWidth } = imagesContainerRef.current;
        const newIndex = Math.round(scrollLeft / clientWidth);
        setCurrentImageIndex(newIndex);
      }
    };

    const container = imagesContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="flex gap-[1px] overflow-x-auto md:flex-col md:overflow-y-auto lg:grid lg:grid-cols-2"
        ref={imagesContainerRef}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full max-w-full flex-shrink-0  md:w-full"
            style={{ aspectRatio: '1 / 1.2' }}
          >
            <Image src={image.url} alt={image.altText} layout="fill" className="object-cover" />
          </div>
        ))}
      </div>
      {/* Center the image counter below the images */}
      <div className="mt-2 text-center text-sm md:hidden">
        {currentImageIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageGallery;
