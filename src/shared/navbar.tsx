"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const menus = [
  { label: "home", goto: "" },
  { label: "about us", goto: "" },
  { label: "services", goto: "" },
  { label: "projects", goto: "" },
  { label: "contact us", goto: "" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="shadow">
      <nav className="py-8 sm: p-4 flex items-center justify-between bg-secondary">
        <div className="logo flex items-center gap-2">
          <img src="/logo.png" alt="" className="h-10 w-auto" />
          <h2 className="hidden sm:block text-4xl font-extrabold text-purple-600">
            Core
          </h2>
        </div>
        <div className="menus hidden md:flex items-center gap-4">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.goto}
              className="text-base font-semibold capitalize"
            >
              {menu.label}
            </Link>
          ))}
          <button className="bg-purple-600 text-white text-base capitalize px-4 py-2 rounded-lg">
            hire us
          </button>
        </div>
        <button
          className="md:hidden block duration-1000 transition-transform ease-linear"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Menu size={30} />
        </button>
        {showMenu && (
          <div className="responsive-menus md:hidden fixed right-0 top-0 bg-secondary h-screen w-[70vw] sm:w-[50vw] p-4 border-l-2  flex flex-col items-start gap-4">
            <button className="mb-12" onClick={() => setShowMenu(!showMenu)}>
              <X />
            </button>
            {menus.map((menu, index) => (
              <Link
                key={index}
                href={menu.goto}
                className="text-base font-semibold capitalize"
              >
                {menu.label}
              </Link>
            ))}
            <button className="bg-purple-600 text-white text-base capitalize px-4 py-2 rounded-lg">
              hire us
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
