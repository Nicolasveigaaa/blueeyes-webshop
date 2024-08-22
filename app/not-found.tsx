import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#3E54A4] text-white">
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <p className="text-center">The page you were looking for was...</p>
        <h1 className="mx-auto flex h-full gap-12  text-center text-3xl font-bold uppercase  sm:text-5xl md:text-6xl lg:text-5xl xl:px-20 2xl:text-6xl">
          <span>Not</span> <span>Found</span>
        </h1>

        <div className="mx-auto inline-flex">
          <Link href="/" aria-label="product redirect button" className="group">
            <div className="flex items-center justify-center gap-2 transition-all group-hover:gap-4">
              <p className="">Return home</p>
              <ArrowRightIcon width={16} height={16} />
            </div>

            <div className="h-[1px] w-full bg-white"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
