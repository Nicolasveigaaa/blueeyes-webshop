'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="mt-16 flex min-h-screen items-center justify-center bg-[#3E54A4] py-16">
      <div className="mx-auto my-4 flex max-w-xl flex-col border border-neutral-200 bg-white p-8 md:p-12">
        <h2 className="text-xl font-bold">Oh no!</h2>
        <p className="my-2">
          There was an issue with our storefront. This could be a temporary issue, please try your
          action again.
        </p>
        <button
          className="mx-auto mt-4 flex w-full items-center justify-center  bg-[#3E54A4] p-4 tracking-wide text-white hover:opacity-90"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
