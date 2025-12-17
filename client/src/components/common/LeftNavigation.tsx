"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function LeftNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md fixed inset-y-0 left-0 w-40 ">
      <div className="container mx-auto px-1 py-3 flex flex-col justify-start">
        <Link href="/" className="text-2sm font-bold tracking-wider hover:text-gray-300 transition duration-300">
          R
        </Link>
        <div className="hidden md:flex space-x-6 flex-col justify-start">
          <Link href="/about" className="hover:text-gray-300 transition duration-300">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-300 transition duration-300">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition duration-300">
            Contact
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}