import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function OpenCart({ quantity }: { quantity?: number }) {
  return (
    <div className="flex gap-2">
      <ShoppingBagIcon className="h-5" />
      {quantity ? <div>({quantity})</div> : ''}
    </div>
  );
}
