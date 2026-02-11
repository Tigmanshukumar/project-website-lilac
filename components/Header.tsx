'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { // scrolling down
          setIsVisible(false);
        } else { // scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      <motion.header 
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full py-6 md:py-4 px-9 md:px-13 flex justify-between items-center bg-background fixed top-0 left-0 right-0 z-[100] md:shadow-none"
      >
        
        {/* Mobile Menu Toggle - Order 1 on mobile, hidden on desktop */}
        <div className="md:hidden order-1">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground focus:outline-none flex flex-col gap-2.5"
          >
            {isMenuOpen ? (
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

        <div className="header-title order-2 md:order-1">
          <Link href="/" className="text-xl md:text-3xl font-medium tracking-tight text-foreground hover:text-primary transition-colors">
            Dr. Maya Reynolds
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-9 items-center md:order-2">
          <Link href="/#faq" className="text-xl font-medium text-foreground hover:text-primary transition-colors">
            FAQs
          </Link>
          <Link href="/#hero" className="text-xl font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background  py-8 flex flex-col items-center gap-6 md:hidden">
            <Link 
              href="/#faq" 
              className="text-xl text-foreground font-medium hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link 
              href="/#hero" 
              className="text-xl text-foreground font-medium hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </motion.header>
    </AnimatePresence>
  );
}
