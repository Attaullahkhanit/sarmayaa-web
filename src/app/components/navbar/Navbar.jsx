"use client";
import Link from "next/link";
import { React, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const navigationItems = [
    "Electronics",
    "Men's Fashion",
    "Women's Fashion",
    "Jewelry",
  ];

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <>
      <nav className="bg-white px-10 py-8 flex flex-row justify-around items-center">
        <div className="text-lg font-bold">Ecommerece</div>
        <div>
          <ul className="flex space-x-4">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  onClick={() => handleLinkClick(index)}
                  className={`text-black ${
                    activeLink === index ? "border-b-2 border-red-500" : ""
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-10 pr-12 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
            <CiSearch className="w-6 h-6" />
          </div>
        </div>
        <div>
        <button className="flex w-28 py-4 items-center justify-center bg-black text-white rounded-md hover:bg-black">
                0 <RiShoppingCartLine className="ml-2" />
              </button>
        </div>
      </nav>
    </>
  );
}
