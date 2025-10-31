"use client";

import Image from "next/image";
import hero from "@/assets/home/hero.svg";

const HomeHero = () => {
  return (
    <div className="my-12 mb-[5rem]">
      {/* text section */}
      <div className="text-center">
        <h1 className="typography-h4 text-grey-700 font-semibold">
          Turn Feedback into Actionable Insights Instantly.
        </h1>
        <p className="typography-sub-h1 mt-5 mb-9 font-light text-[#90A3BF]">
          Your survey game-changer. <br />
          Collect, track, and analyze feedback in real time — effortlessly.
        </p>

        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            className="bg-primary-500 typography-paragraph-small hover:bg-primary-700 cursor-pointer items-center rounded-[1.97125rem] px-6 py-3 font-medium text-white transition duration-300 ease-in-out"
            // onClick={() => openModal("register")}
          >
            Get Started Free
          </button>
          <button
            type="button"
            className="typography-paragraph-small cursor-pointer items-center px-6 py-3 font-medium text-[#757575] transition duration-300 ease-in-out"
          >
            See Pricing
          </button>
        </div>
      </div>

      {/* image section */}
      <div className="mx-auto h-[20rem] w-[20rem] lg:h-[36.72rem] lg:w-[50.25rem]">
        <Image
          src={hero}
          alt="hero"
          width={800}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default HomeHero;
