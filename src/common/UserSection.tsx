"use client";

import { useModal } from "@/core/context/ModalContext";
import { useAuth } from "@/hooks/useAuth";

const UserSection = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { openModal } = useModal();

  return (
    <div className="hidden ml-auto lg:block">
      <div className="flex flex-col items-center flex-shrink-0 space-x-0 space-y-2 md:flex-row md:space-y-0 ">
        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Welcome, {user?.email}
            </span>
            <button
              type="button"
              className="bg-red-500 typography-paragraph-medium hover:bg-red-700 cursor-pointer items-center rounded-[4px] px-4 py-2 font-semibold text-white transition duration-300 ease-in-out"
              onClick={logout}
            >
              Logout
            </button>
          </div>
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
