'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { ReactNode, useState } from 'react';

interface DrawerProps {
  title: string;
  isOpen: boolean;
  toggleDrawer: () => void;
  children: ReactNode;
}

const Drawer = ({ title, isOpen, toggleDrawer, children }: DrawerProps) => (
  <div className="border-t border-gray-800">
    <button className="w-full py-4 text-left focus:outline-none" onClick={toggleDrawer}>
      <div className="flex items-center justify-between">
        <span>{title}</span>
        <span>{isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}</span>
      </div>
    </button>
    {isOpen && <div className="py-4">{children}</div>}
  </div>
);

export function Accordion({ titles, contents }: { titles: string[]; contents: ReactNode[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDrawer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {titles.map((title, index) => (
        <Drawer
          key={index}
          title={title}
          isOpen={openIndex === index}
          toggleDrawer={() => toggleDrawer(index)}
        >
          {contents[index]}
        </Drawer>
      ))}
    </div>
  );
}
