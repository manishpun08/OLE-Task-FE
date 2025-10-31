"use client";

import { useSession } from "next-auth/react";
import { useModal } from "@/core/context/ModalContext";
import type { ISessionRoot } from "@/interface/dto/user.session";
import UserDropdown from "./UserDropdown";

const UserSection = () => {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";
  const { openModal } = useModal();

  return (
    <div className="ml-auto hidden lg:block">
      <div className="flex flex-shrink-0 flex-col items-center space-y-2 space-x-0 md:flex-row md:space-y-0 md:space-x-6">
        {isLoggedIn ? (
          <UserDropdown sessionData={session as ISessionRoot} />
        ) : (
          <div className="hidden items-center space-x-6 md:flex">
            <button
              type="button"
              onClick={() => openModal("login")}
              className="group text-grey-800 typography-paragraph-small hover:text-primary-500 relative cursor-pointer font-normal outline-none focus:outline-none focus-visible:ring-0"
            >
              Log In
              <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 origin-center -translate-x-1/2 bg-current transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              type="button"
              className="bg-primary-500 typography-paragraph-small hover:bg-primary-700 cursor-pointer items-center rounded-[1.97125rem] px-4 py-2 font-medium text-white transition duration-300 ease-in-out"
              onClick={() => openModal("register")}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSection;
