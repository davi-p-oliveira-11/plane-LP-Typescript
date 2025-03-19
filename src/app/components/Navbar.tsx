"use client";

import Image from "next/image";
import Link from "next/link";
import { navbarData } from "../constants/Navbar";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-6  ">
      {/* Logo Image*/}

      <div className="flex-shrink-0 cursor-pointer">
        <Image
          src={navbarData.logo.src}
          alt={navbarData.logo.alt}
          width={130}
          height={22}
        />
      </div>

      {/* Navigation Links */}

      <ul className="hidden md:flex space-x-12">
        {navbarData.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className=" hover:gray-white1 transition">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu and Close Buttons (lucide react ones not the one from design system)  */}
      <button
        className="md:hidden block cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-22 right-0 bg-blue-gray shadow-lg p-4 w-48 rounded-md md:hidden">
          <ul className="flex flex-col gap-4">
            {navbarData.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
