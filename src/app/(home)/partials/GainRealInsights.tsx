"use client";

import Image from "next/image";
import image from "@/assets/home/GainRealInsights.svg";
import { useModal } from "@/core/context/ModalContext";

const GainRealInsights = () => {
  const { openModal } = useModal();

  return (
    <div className="padding-x mb-10 lg:mb-21">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2">
        <div>
          <p className="typography-paragraph-extra-small text-primary-500 pb-1.5 font-normal">
            Gain Real Insights
          </p>
          <h2 className="typography-h2 text-grey-800 pb-2 font-bold">
            UNDERSTAND YOUR AUDIENCE
          </h2>
          <p className="text-grey-800 typography-paragraph-medium pb-8 font-light">
            Easily collect opinions from the people who matter most. Send
            surveys anywhere and turn feedback into insights that guide smarter
            choices.
          </p>

          <button
            type="button"
            className="bg-primary-500 typography-paragraph-small hover:bg-primary-700 cursor-pointer items-center rounded-[1.97125rem] px-6 py-3 font-medium text-white transition duration-300 ease-in-out"
            onClick={() => openModal("register")}
          >
            Get Started Free
          </button>
        </div>

        <div className="h-[28.9375rem] w-full shrink-0">
          <Image
            src={image}
            alt="image"
            width={800}
            height={800}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default GainRealInsights;
