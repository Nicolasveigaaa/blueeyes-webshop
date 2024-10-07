import Image from 'next/image';

export default function Loading() {
  return (
    <main className="absolute inset-0 z-[200] flex h-screen flex-col items-center justify-center gap-12 bg-white transition-opacity duration-500">
      <div className="flex items-center justify-center">
        <Image
          src="/icons/eyes-logo.svg"
          alt="blue eyes logo"
          width={170}
          height={170}
          className="object-contain"
        />
      </div>

      {/* Spinner */}
      <div className="flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-[#3E54A4] border-t-transparent"></div>
      </div>
    </main>
  );
}
