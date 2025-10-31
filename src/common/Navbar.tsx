"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { staticNavbar } from "@/data/staticNavbar";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <ul className="hidden gap-10.5 md:flex">
        {staticNavbar?.map((item) => {
          const isActive = pathname === item.url;
          return (
            <li key={item?.name}>
              <Link
                href={item?.url}
                className={`group typography-paragraph-small relative font-normal transition-colors duration-200 ${isActive ? "text-primary-500" : "text-grey-800 hover:text-primary-500"}`}
              >
                {item?.name}
                <span
                  className={`absolute -bottom-2 left-1/2 h-[2px] w-0 origin-center -translate-x-1/2 bg-current transition-all duration-300 ${isActive ? "w-full" : "group-hover:w-full"}`}
                ></span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="flex h-8 w-8 flex-col items-center justify-center space-y-1 md:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`bg-grey-400 block h-0.5 w-6 transition-transform duration-200 ${
            isMenuOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`bg-grey-400 block h-0.5 w-6 transition-opacity duration-200 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`bg-grey-400 block h-0.5 w-6 transition-transform duration-200 ${
            isMenuOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={closeMenu}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              closeMenu();
            }
          }}
          aria-label="Close menu overlay"
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            type="button"
            onClick={closeMenu}
            className="text-grey-400 hover:text-primary-500 flex h-8 w-8 items-center justify-center"
            aria-label="Close menu"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>

        <ul className="flex flex-col space-y-2 px-6">
          {staticNavbar.map((item) => {
            const isActive = pathname === item?.url;
            return (
              <li key={item?.name}>
                <Link
                  href={item?.url}
                  onClick={closeMenu}
                  className={`typography-paragraph-large block border-l-4 px-2 py-3 font-normal transition-colors duration-200 ${
                    isActive
                      ? "text-primary-500 border-primary-500 bg-primary-50"
                      : "text-grey-400 hover:text-primary-500 hover:border-primary-500 hover:bg-grey-50 border-transparent"
                  }`}
                >
                  {item?.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
