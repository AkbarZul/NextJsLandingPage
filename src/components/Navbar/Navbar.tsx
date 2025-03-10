'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <div className="mx-auto">
        <div className="flex justify-between mt-[67px]">
          <div className="flex">
            {/* Primary Nav - hidden on mobile */}
            <div className="hidden md:flex">
              <Link href="/" className="pr-3 text-[#2E266F] font-medium hover:font-bold hover:border-b-[#2E266F]">Home</Link>
              <Link href="/about" className="px-3 text-[#2E266F] font-medium hover:font-bold hover:border-b-[#2E266F]">Add Recipe</Link>
              <Link href="/services" className="px-3 text-[#2E266F] font-medium hover:font-bold hover:border-b-[#2E266F]">Profile</Link>
            </div>
          </div>
          
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/login" className="py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300">Login</Link>
          </div>
          
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button 
              className="mobile-menu-button p-2 focus:outline-none focus:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-700 text-gray-200 hover:text-white">Home</Link>
        <Link href="/about" className="block py-2 px-4 text-sm hover:bg-gray-700 text-gray-200 hover:text-white">About</Link>
        <Link href="/services" className="block py-2 px-4 text-sm hover:bg-gray-700 text-gray-200 hover:text-white">Services</Link>
        <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-700 text-gray-200 hover:text-white">Contact</Link>
        <Link href="/login" className="block py-2 px-4 text-sm bg-blue-500 text-white m-4 rounded-md text-center">Login</Link>
      </div>
    </nav>
  )
}