"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2sm font-bold tracking-wider hover:text-gray-300 transition duration-300">
          카피라이트
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-gray-300 transition duration-300">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-300 transition duration-300">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition duration-300">
            Contact
          </Link>
        </nav>
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
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <nav className="flex flex-col space-y-2 px-4 py-2 bg-gray-700">
          <Link href="/about" className="block py-2 hover:bg-gray-600 transition duration-300" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/services" className="block py-2 hover:bg-gray-600 transition duration-300" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/contact" className="block py-2 hover:bg-gray-600 transition duration-300" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}