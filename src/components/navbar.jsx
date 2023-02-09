import Link from "next/link";
import React from "react";

const Navbar = () => {
  const propss =
    "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white";
  return (
    <>
      <nav className="flex items-center flex-wrap bg-green-900 p-3 m-4 font-bold">
        <Link href="/" className="inline-flex items-center p-2 mr-4">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-white h-8 w-8 mr-2"
          >
            <path />
          </svg>
          <span className="text-xl text-white font-bold uppercase tracking-wide">
            Event Calendar
          </span>
        </Link>
        <button className="inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <Link href="/" className={propss}>
              Home
            </Link>
            <Link href="/" className={propss}>
              Services
            </Link>
            <Link href="/" className={propss}>
              About
            </Link>
            <Link href="/" className={propss}>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
