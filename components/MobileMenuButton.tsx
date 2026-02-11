"use client";

import Link from 'next/link';
import { Fragment } from 'react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function MobileMenuButton({ isOpen, setIsOpen }: MobileMenuButtonProps) {
  return (
    <Fragment>
      <div className="md:hidden order-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-foreground focus:outline-none flex flex-col gap-2.5"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="w-10 flex flex-col gap-1.5">
              <div className="w-full h-[1.5px] bg-foreground"></div>
              <div className="w-full h-[1.5px] bg-foreground"></div>
            </div>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background py-8 flex flex-col items-center gap-6 md:hidden">
          <Link 
            href="/#faq" 
            className="text-xl text-foreground font-medium hover:opacity-70 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            FAQs
          </Link>
          <Link 
            href="/#hero" 
            className="text-xl text-foreground font-medium hover:opacity-70 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </Fragment>
  );
}
