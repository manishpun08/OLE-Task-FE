"use client";

import Image from "next/image";
import hero from "@/assets/home/hero-image.svg";

const HomeHero = () => {
  return (
    <div className="my-10.5 padding-x mb-[5rem] grid grid-cols-2 items-center gap-8">
      {/* text section */}
      <div className="w-full max-w-[500px]">
        <h1 className="typography-h2 text-grey-700 font-bold [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
          We do the work you stay focused on your customers.
        </h1>
        <p className="typography-paragraph-medium leading-[150%] mt-5 mb-9 font-normal text-grey-500">
          Awwwsome. is a digital agency passionate about storytelling, visual
          design, and technology. We collaborate with companies small to large
          around the world to help them engage their audiences and build brand
          awareness.
          <p className="mt-6">
            Our team can create amazing web experiences, beginning with deep
            market research, practical strategies, and professional execution.
          </p>
        </p>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="bg-primary-500 typography-paragraph-medium hover:bg-primary-700 cursor-pointer items-center rounded-[4px] px-7.5 py-4 font-semibold text-white transition duration-300 ease-in-out"
          >
            Explore Projects
          </button>
          <button
            type="button"
            className="bg-[#4E42D92E] typography-paragraph-medium hover:bg-primary-100 cursor-pointer items-center rounded-[4px] px-7.5 py-4 font-semibold text-primary-500 transition duration-300 ease-in-out"
          >
            About Us
          </button>
        </div>
      </div>

      {/* image section */}
      <div className=" h-[584px] w-[578px] ">
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
