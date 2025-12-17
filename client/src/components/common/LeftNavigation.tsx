"use client";
import { useState } from 'react';
import { FiColumns } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from 'next/link';
import { Input } from '../ui/Input';

export default function LeftNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-700 text-white shadow-md fixed inset-y-0 left-0 w-60 pl-5">
      <div className="container mx-auto px-1 py-3 flex flex-col justify-start gap-5">
        <div className="flex items-center gap-5">
          <Link href="/" className="text-2sm font-bold tracking-wider hover:text-gray-300 transition duration-300">
            로고
          </Link>
          <FiColumns/>
        </div>
        <div className="hidden md:flex space-x-6 flex-col justify-start gap-5 max-h-80">
          <div className='relative'>
            <Input type='search' className=''></Input>
            <FaSearch className='absolute top-2 right-2'/>
          </div>
          <div>
            <p>태그 이름1</p>
            <ul className='pt-2.5'>
              <li className='hover:text-gray-300 transition duration-300 cursor-pointer'>1. 컬렉션</li>
              <li className='hover:text-gray-300 transition duration-300 cursor-pointer'>2. 컬렉션</li>
            </ul>
          </div>
          <div className='border-b-1'></div>
          <div>
            <p>태그 이름2</p>
            <ul className='pt-2.5'>
              <li className='hover:text-gray-300 transition duration-300 cursor-pointer'>1. 컬렉션</li>
              <li className='hover:text-gray-300 transition duration-300 cursor-pointer'>2. 컬렉션</li>
            </ul>
          </div>
          <div className='border-b-1'></div>
          <Link href="/services" className="flex gap-2 items-center hover:text-gray-300 transition duration-300">
            <FaHeart/> 좋아요
          </Link>
          <Link href="/contact" className="flex gap-2 items-center hover:text-gray-300 transition duration-300">
            <FaBookmark/>북마크
          </Link>
        </div>
        <ul className='absolute bottom-20'>
          <li className='flex gap-5 items-center pb-5'><IoSettingsSharp/> 설정</li>
          <li className='flex gap-5 items-center'><FaRegTrashAlt/> 휴지통</li>
        </ul>
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