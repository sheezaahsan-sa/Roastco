import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

  return (
    <header className=" sticky top-0 z-50 bg-[#111827]  backdrop-blur-md border-b border-stone-200">
      <div className="h-20 max-w-7xl mx-auto px-3 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/icon.jpg"
            alt="Logo"
            className="w-40 h-40 object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-stone-700">
          <a href="/#menu" className="text-white hover:text-[#d2bab0] transition">
            Menu
          </a>

          <a href="/#story" className="text-white hover:text-[#d2bab0] transition">
            Story
          </a>

          <a href="/#process" className="text-white hover:text-[#d2bab0] transition">
            Process
          </a>

          <Link to="/location" className="text-white hover:text-[#d2bab0] transition">
            Location
          </Link>

          <Link to="/shop" className="text-white hover:text-[#d2bab0] transition">
            Shop
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link
            to="/shop"
            className="bg-[#846358] text-white font-medium px-5 py-2.5 rounded-full transition shadow-sm text-sm"
          >
            Order Online
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
