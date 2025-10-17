'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#212529] text-white z-50">
      <div className="container mx-auto px-9">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="text-xl font-bold font-mono">
            <span className="text-white">Cyber</span>
            <span className="brand-dot-white">.</span>
            <span className="text-white">Board</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}


            {/* this is the links and the icon for links i use tailwind css for and to add ne w link just 
            use this  block by copy and paste and cahge the parammetes and classes */}
          <div className="hidden md:flex items-center space-x-9">
          <Link href="/learn" className="text-white hover:text-gray-300 transition no-underline">
              <i className="fa-solid fa-book-open m-1"></i>
              <span>Learn</span>
            </Link>



            <Link href="/practice" className="text-white hover:text-gray-300 transition">
              <i className="fa-solid fa-laptop-code mr-1"></i>
              <span>Practice</span>
            </Link>

          
            <Link href="/challenges" className="text-white hover:text-gray-300 transition no-underline">
              <i className="fa-solid fa-flag mr-1"></i>
              <span>Challenges</span>
            </Link>
            
            
           
           
            <div className="flex items-right space-x-4 ml-40 ">
              <Link href="/register" className="text-white hover:text-gray-300 transition">
                <i className="fa-solid fa-user-plus mr-1"></i>
                <span>Register</span>
              </Link>
              <Link href="/login" className="text-white hover:text-gray-300 transition">
                <i className="fa-solid fa-right-to-bracket mr-1"></i>
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/challenges" className="text-white hover:text-gray-300 transition">
                <i className="fa-solid fa-flag mr-1"></i>
                <span>Challenges</span>
              </Link>
              <Link href="/learn" className="text-white hover:text-gray-300 transition">
                <i className="fa-solid fa-book-open mr-1"></i>
                <span>Learn</span>
              </Link>
              <Link href="/practice" className="text-white hover:text-gray-300 transition">
                <i className="fa-solid fa-laptop-code mr-1"></i>
                <span>Practice</span>
              </Link>
              <Link href="/register" className="text-white hover:text-gray-300 transition">
                <i className="fa-solid fa-user-plus mr-1"></i>
                <span>Register</span>
              </Link>
              <Link href="/login" className="text-white hover:text-gray-300 transition">
                <i className="fa-solid fa-right-to-bracket mr-1"></i>
                <span>Login</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}