import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function OpenCart({ quantity }: { quantity?: number }) {
  return (
    <div className="flex items-center gap-2">
      <ShoppingBagIcon className="h-5 text-black" />
      <div className="translate-y-[1px]">
        {quantity ? <span className="">({quantity})</span> : ''}
      </div>
    </div>
  );
}
