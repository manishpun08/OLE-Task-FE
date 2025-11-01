"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { staticNavbar } from "@/data/staticNavbar";
import { useModal } from "@/core/context/ModalContext";

const Navbar = () => {
  const { openModal } = useModal();

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <ul className="hidden items-center gap-12 md:flex">
        {staticNavbar?.map((item) => {
          const isActive = pathname === item.url;
          return (
            <li key={item?.name}>
              <Link
                href={item?.url}
                className={`group typography-paragraph-medium relative font-normal transition-colors duration-200 ${isActive ? "text-primary-500 font-semibold" : "text-grey-500 hover:text-primary-500"}`}
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
        className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center space-y-1 rounded-md bg-white transition-colors duration-200 md:hidden"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span
          className={`bg-grey-600 block h-0.5 w-5 transition-all duration-300 ${
            isMenuOpen ? "translate-y-1.5 rotate-45" : ""
          }`}
        />
        <span
          className={`bg-grey-600 block h-0.5 w-5 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`bg-grey-600 block h-0.5 w-5 transition-all duration-300 ${
            isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <>
          {/* Background overlay */}
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={closeMenu}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                closeMenu();
              }
            }}
            aria-label="Close menu overlay"
          />

          {/* Menu content */}
          <div className="fixed top-0 left-0 z-50 h-screen w-full overflow-hidden bg-white md:hidden">
            {/* Navigation items centered */}
            <div className="flex h-full flex-col items-center justify-center pb-20">
              <ul className="flex flex-col space-y-8 text-center">
                {staticNavbar.map((item) => {
                  const isActive = pathname === item?.url;
                  return (
                    <li key={item?.name}>
                      <Link
                        href={item?.url}
                        onClick={closeMenu}
                        className={`typography-paragraph-large block rounded-lg px-6 py-4 font-normal transition-all duration-300 ${
                          isActive
                            ? "text-primary-500 font-semibold"
                            : "text-grey-600 hover:text-primary-500"
                        }`}
                      >
                        {item?.name}
                      </Link>
                    </li>
                  );
                })}

                <li className="pt-4">
                  <button
                    type="button"
                    className="bg-primary-500 typography-paragraph-medium hover:bg-primary-700 cursor-pointer items-center rounded-[4px] px-7.5 py-4 font-semibold text-white transition duration-300 ease-in-out"
                    onClick={() => {
                      openModal("login");
                      closeMenu();
                    }}
                  >
                    Log In
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
