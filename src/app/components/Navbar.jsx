'use client'

import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white w-full bg-[#EAF5F6]">
      <div className=" mx-auto max-w-7xl flex justify-between items-center  py-3 ">

        <div className="text-xl font-bold">
          <Link href="/" className="">
            <Image
              src="/img/fintex.png"
              alt="fintechX"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <button
          className="lg:hidden text-[#1e4a8b] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul
          className={`lg:flex lg:space-x-6 text-sm text-[#111111] lg:static absolute top-16 left-0 w-full lg:w-auto lg:bg-transparent lg:flex-row lg:items-center transition-all duration-300 ease-in-out ${isOpen ? "flex flex-col items-center py-4" : "hidden"
            }`}
        >
          <li><Link href="/" className="hover:text-gray-500 text-gray-700 py-2 lg:py-0">Trade</Link></li>
          <li><Link href="/about" className="hover:text-gray-500 text-gray-700 py-2 lg:py-0">Featured</Link></li>
          <li><Link href="/team" className="hover:text-gray-500 text-gray-700 py-2 lg:py-0">Market</Link></li>
          <li><Link href="/bootcamp" className="hover:text-gray-500 text-gray-700 py-2 lg:py-0">Portfolio</Link></li>
          <li><Link href="/events" className="hover:text-gray-500 text-gray-700 py-2 lg:py-0">Blog</Link></li>
        </ul>

        <div className="hidden lg:flex space-x-4">
          <Link
            href="/apply"
            className="bg-[#028DEE] text-white px-4 py-2 rounded hover:bg-[#028ceeb7] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
