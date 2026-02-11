'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenuButton from './MobileMenuButton';

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
        
        <MobileMenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

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

        
      </motion.header>
    </AnimatePresence>
  );
}
