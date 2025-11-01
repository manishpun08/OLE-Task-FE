"use client";

import { useModal } from "@/core/context/ModalContext";

const UserSection = () => {
  const { openModal } = useModal();

  return (
    <div className="ml-auto hidden lg:block">
      <button
        type="button"
        className="bg-primary-500 typography-paragraph-medium hover:bg-primary-700 cursor-pointer items-center rounded-[4px] px-7.5 py-4 font-semibold text-white transition duration-300 ease-in-out"
        onClick={() => openModal("login")}
      >
        Log In
      </button>
    </div>
  );
};

export default UserSection;
