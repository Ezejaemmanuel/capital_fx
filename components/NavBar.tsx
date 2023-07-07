"use client";
import { useState } from 'react';
import Link from 'next/link';
import { IoIosMenu, IoIosClose, IoIosSearch, IoMdSearch } from 'react-icons/io';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-yellow-500">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          {/*Logo section*/}
          <div className="px-2 lg:w-0 lg:flex-1">
            <span className="flex items-center">
              <Link href="/" className="text-lg font-bold text-red-600">C</Link>
              <Link href="/" className="text-lg font-bold text-green-600">a</Link>
              <Link href="/" className="text-lg font-bold">pital FX</Link>
            </span>
          </div>

         {/*Navigation Links*/}
          <div className="hidden px-2 lg:flex lg:space-x-5">
            <Link href="/" className="text-base font-medium">Home</Link>
            <Link href="/about" className="text-base font-medium">About</Link>
            <Link href="/market" className="text-base font-medium">Market</Link>
            <Link href="/contacts" className="text-base font-medium">Contacts</Link>
            <Link href="/blog" className="text-base font-medium">Blog</Link>
          </div>

          {/* Search box (hidden on smaller screens, visible on larger) */}
          <div className="hidden lg:block">
            <div className="flex items-center h-full px-5 space-x-2">
              <input className="block w-60 p-2 bg-white rounded-md" type="text" placeholder="Search..." />
              <IoMdSearch className="h-6 w-6 text-gray-600" />
            </div>
          </div>

          {/*Mobile Navigation*/}
          <div className="-mr-2 -my-2 lg:hidden">
            {/* Search button (visible on smaller screens) */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <IoMdSearch className="text-white h-6 w-6" aria-hidden="true" />
            </button>

            {/* Search box (visible on smaller screens when button clicked) */}
            {isSearchOpen && (
              <div className="absolute top-0 right-0 w-64 mt-15 mr-2">
                <div className="px-2 pt-2 pb-3 bg-white rounded-lg shadow">
                  <div className="flex items-center space-x-2">
                    <input className="w-full p-2 rounded-md" type="text" placeholder="Search..." />
                    <IoMdSearch className="text-gray-600 h-6 w-6" />
                  </div>
                </div>
              </div>
            )}

            {/* This is the updated part: */}
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md">
              {/* Conditional rendering of close icon or menu icon */}
              {isOpen 
                 ? <IoIosClose className="h-6 w-6 text-white" aria-hidden="true" /> 
                 : <IoIosMenu className="h-6 w-6 text-white" aria-hidden="true" />}
            </button>
          </div>

          {/*Responsive Menu*/}
          {isOpen && (
            <div className="px-2 pt-2 pb-3 space-y-1 flex-col">
              <Link href="/" className="text-base font-medium">Home</Link>
              <Link href="/about" className="text-base font-medium">About</Link>
              <Link href="/market" className="text-base font-medium">Market</Link>
              <Link href="/contacts" className="text-base font-medium">Contacts</Link>
              <Link href="/blog" className="text-base font-medium">Blog</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
