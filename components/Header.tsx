"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-dark-slate text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center no-underline">
            <div className="relative w-10 h-10 mr-2">
              <Image 
                src="/pendragon-dragon-network-icon-shield-logo.png"
                alt="Pendragon Networks Logo"
                width={40}
                height={40}
                className="rounded-full"
                priority
              />
            </div>
            <span className="text-xl font-bold text-white">Pendragon Networks</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className="text-white hover:text-dragon-red no-underline transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-white hover:text-dragon-red no-underline transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-dragon-red no-underline transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-dragon-red hover:bg-opacity-90 !text-white font-medium border border-white px-4 py-2 rounded-md no-underline transition-all duration-200 hover:!text-black hover:border-black"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button - only visible on mobile */}
          <button 
            className="block items-center text-white md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden flex flex-col space-y-3 pb-3">
            <Link 
              href="/" 
              className="text-white hover:text-dragon-red no-underline transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-white hover:text-dragon-red no-underline transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-dragon-red no-underline transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-dragon-red hover:bg-opacity-90 !text-white font-medium border border-white px-4 py-2 rounded-md no-underline transition-all duration-200 hover:!text-black hover:border-black inline-block w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
