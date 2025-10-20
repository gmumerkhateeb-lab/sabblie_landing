"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex flex-wrap justify-between items-center mx-auto mt-[20px] px-4">
      
      <div className="flex-shrink-0">
        <Image src="/icons/Logo.png" alt="logo" width={42} height={42} />
      </div>

      {/* Menu (Desktop) */}
      <div className="hidden md:block">
        <ul className="flex flex-row justify-between items-center gap-[40px] lg:gap-[82px] text-sm">
          <li>
            <Link href="#">AI & Security Expert Podcast</Link>
          </li>
          <li>
            <Link href="#">AI Readiness Assessment</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
        </ul>
      </div>

      {/* Contact Us Button */}
      <div className="mt-4 md:mt-0">
        <button
          className="cursor-pointer  text-white text-[11px] font-normal leading-[15px] rounded-[9px] 
          px-[13px] py-[10px] bg-[#39B1BE] w-full md:w-auto"
        >
          Contact Us
        </button>
      </div>

      {/*  Button (Mobile) */}
      <div className="md:hidden ml-3">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-between w-6 h-5 focus:outline-none"
        >
          <span className="block w-full h-[2px] bg-black rounded"></span>
          <span className="block w-full h-[2px] bg-black rounded"></span>
          <span className="block w-full h-[2px] bg-black rounded"></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed top-[70px] right-4 bg-white shadow-lg rounded-lg p-4 w-[220px] z-[9999] md:hidden">
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link href="#">AI & Security Expert Podcast</Link>
            </li>
            <li>
              <Link href="#">AI Readiness Assessment</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
