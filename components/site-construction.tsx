import Image from 'next/image';

const SiteBuild = () => {
  return (
    <div className="fixed inset-0 left-0 top-0 z-[210] flex h-screen w-full items-center justify-center backdrop-blur-xl">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 bg-blue-800 bg-opacity-60 text-white">
        <div className="flex items-center justify-center">
          <Image
            src="/icons/blue-eyes-white.svg"
            alt="blue eyes logo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold uppercase md:text-6xl">Webshop online soon</h1>
        <p className="text-center">
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
