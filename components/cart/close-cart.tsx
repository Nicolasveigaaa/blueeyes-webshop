import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function CloseCart({ className }: { className?: string }) {
  return (
    <XMarkIcon
      className={clsx('h-6 transition-all ease-in-out hover:rotate-45 hover:scale-110', className)}
    />
  );
}
