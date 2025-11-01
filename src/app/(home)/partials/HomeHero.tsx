"use client";

import Image from "next/image";
import hero from "@/assets/home/hero-image.svg";

const HomeHero = () => {
  return (
    <div className="padding-x my-10.5 mb-[5rem] grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
      {/* image section */}
      <div className="order-1 h-[300px] w-full sm:h-[400px] lg:order-2 lg:h-[584px] lg:w-[578px]">
        <Image
          src={hero}
          alt="hero"
          width={800}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>

      {/* text section */}
      <div className="order-2 w-full max-w-[500px] text-left lg:order-1">
        <h1 className="typography-h2 text-grey-700 font-bold [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
          We do the work you stay focused on your customers.
        </h1>
        <p className="typography-paragraph-medium text-grey-500 mt-5 mb-9 leading-[150%] font-normal">
          Awwwsome. is a digital agency passionate about storytelling, visual
          design, and technology. We collaborate with companies small to large
          around the world to help them engage their audiences and build brand
          awareness.
        </p>
        <p className="typography-paragraph-medium text-grey-500 mb-9 leading-[150%] font-normal">
          Our team can create amazing web experiences, beginning with deep
          market research, practical strategies, and professional execution.
        </p>

        <div className="flex flex-row items-center justify-start gap-4">
          <button
            type="button"
            className="bg-primary-500 typography-paragraph-medium hover:bg-primary-700 cursor-pointer rounded-[4px] px-7.5 py-4 font-semibold text-white transition duration-300 ease-in-out"
          >
            Explore Projects
          </button>
          <button
            type="button"
            className="typography-paragraph-medium hover:bg-primary-100 text-primary-500 cursor-pointer rounded-[4px] bg-[#4E42D92E] px-7.5 py-4 font-semibold transition duration-300 ease-in-out"
          >
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
