"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="mx-auto my-2 w-full border-b border-[#006A8A] bg-white px-4 py-2 shadow-sm md:w-[95%] md:rounded-full lg:w-[80%] xl:w-[69%]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={100}
              height={60}
              className="h-8 w-auto md:h-10"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop NavLinks */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link href="" className="px-2 hover:text-[#006A8A]">
            HOME
          </Link>
          <Link href="" className="px-2 hover:text-[#006A8A]">
            ABOUT US
          </Link>
          <Link href="" className="px-2 hover:text-[#006A8A]">
            SERVICES
          </Link>
          <Link href="" className="px-2 hover:text-[#006A8A]">
            CONTACT US
          </Link>
        </div>

        {/* Desktop AuthButtons */}
        <div className="hidden items-center space-x-2 md:flex">
          <Link
            href="/auth/SignIn"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Sign In
          </Link>
          <Link
            href="/auth/SignUp"
            className="rounded-full bg-gradient-to-b from-teal-400 to-[#006A8A] px-4 py-2 text-sm font-medium text-white hover:from-teal-500 hover:to-[#005A7A]"
          >
            SIGN UP HERE
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mt-2 md:hidden">
          <div className="flex flex-col space-y-2">
            <Link href="" className="px-2 py-1 hover:bg-gray-100">
              HOME
            </Link>
            <Link href="" className="px-2 py-1 hover:bg-gray-100">
              ABOUT US
            </Link>
            <Link href="" className="px-2 py-1 hover:bg-gray-100">
              SERVICES
            </Link>
            <Link href="" className="px-2 py-1 hover:bg-gray-100">
              CONTACT US
            </Link>
          </div>
          <div className="mt-4 space-y-2">
            <Link
              href="/auth/SignIn"
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Sign In
            </Link>
            <Link
              href="/auth/SignUp"
              className="block rounded-full bg-gradient-to-b from-teal-400 to-[#006A8A] px-4 py-2 text-sm font-medium text-white hover:from-teal-500 hover:to-[#005A7A]"
            >
              SIGN UP HERE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
