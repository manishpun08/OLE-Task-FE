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
    <div className="hidden ml-auto lg:block">
      <div className="flex flex-col items-center flex-shrink-0 space-x-0 space-y-2 md:flex-row md:space-y-0 ">
        {isLoggedIn ? (
          <UserDropdown sessionData={session as ISessionRoot} />
        ) : (
          <div className="items-center hidden space-x-6 md:flex">
            <button
              type="button"
              className="bg-primary-500 typography-paragraph-medium hover:bg-primary-700 cursor-pointer items-center rounded-[4px] px-7.5 py-4 font-semibold text-white transition duration-300 ease-in-out"
              onClick={() => openModal("login")}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSection;
