"use client";

import Image from "next/image";
import { useModal } from "@/core/context/ModalContext";

const Newsletter = () => {
  const { openModal } = useModal();

  return (
    <div
      className="relative h-[500px] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/JoinUs.svg')" }}
    >
      {/* Overlay with flex layout */}
      <div className="absolute inset-0 flex items-center justify-between bg-black/30 text-white">
        {/* Text Section */}
        <div className="max-w-xl pl-[1.5rem] lg:pl-[6.25rem]">
          <p className="typography-paragraph-small pb-2 font-normal text-white">
            Get Started
          </p>
          <h2 className="typography-h2 pb-5 font-bold text-white">
            Start Collecting Smarter Feedback Today
          </h2>
          <p className="text-grey-200 typography-paragraph-large mb-5 font-light">
            Ready to understand your audience better? We’re here to help you get
            started!
          </p>

          <button
            type="button"
            className="bg-primary-blue typography-paragraph-small hover:bg-primary-700 cursor-pointer items-center rounded-[1.97125rem] px-6 py-3 font-medium text-white transition duration-300 ease-in-out"
            onClick={() => openModal("register")}
          >
            Get Started Free
          </button>
        </div>

        {/* Stats Image */}
        <div className="mt-[3.4375rem] w-[44.25rem]">
          <Image
            src="/stats.svg"
            alt="stats-image"
            width={800}
            height={800}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
