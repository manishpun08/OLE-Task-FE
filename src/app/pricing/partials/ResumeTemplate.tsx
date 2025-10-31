"use client";

import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PATH } from "@/core/constants/path";
import { templateData } from "@/data/templateData";
import { useSlider } from "@/hooks/useSlider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const ResumeTemplate = () => {
  const { swiperRef, activeIndex, goToSlide, handleSlideChange } = useSlider();

  return (
    <div className="padding-x my-[2rem] lg:my-[4rem]">
      <p className="typography-paragraph-large text-grey-400 mx-auto mb-8 max-w-[68.375rem] text-center font-normal">
        You can quickly and easily create a professional resume using our online
        resume builder, which comes with over 30 design templates. Use our
        AI-powered online resume wizard to create a CV, and benefit from
        customizable modern and professional resume templates and professional
        advice from experts. TXT file downloads and our user-friendly tool are
        available to free users.
      </p>

      <div className="mx-auto mb-15 flex flex-col items-center justify-center text-center">
        <h2 className="text-primary-500 typography-sub-h1 pb-4 font-medium">
          Polished Resumes,{" "}
          <span className="text-secondary-500">Better Opportunities</span>
        </h2>
        <p className="typography-paragraph-medium text-grey-500 w-full max-w-sm">
          Tested by hiring managers. Trusted by job seekers. These templates
          work.
        </p>
      </div>

      <Swiper
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        spaceBetween={16}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {templateData.map((template) => (
          <SwiperSlide key={template.id}>
            <div className="group mx-auto w-[16.375rem] lg:mx-0">
              {/* Resume Card */}
              <div className="group-hover:border-primary-500 relative h-[22.25rem] overflow-hidden rounded-2xl border-[0.4px] border-transparent bg-[#F3FBFF] p-4 transition-all duration-300 ease-in-out">
                <Image
                  src={template.image}
                  alt={template.name}
                  width={800}
                  height={800}
                  className="h-full w-full rounded-2xl object-contain lg:object-cover"
                />

                {/* Hover Button */}
                <div className="absolute bottom-30 left-1/2 -translate-x-1/2 translate-y-full opacity-100 transition-all duration-500 ease-in-out lg:bottom-0 lg:opacity-0 lg:group-hover:translate-y-[-400%] lg:group-hover:opacity-100">
                  <Link
                    href={`${PATH.PRICING}/${template.slug}`}
                    className="bg-primary-500 typography-paragraph-small hover:bg-primary-700 cursor-pointer items-center rounded-[1.97125rem] px-4 py-2 font-medium text-white transition duration-800 ease-in-out"
                  >
                    Use Template
                  </Link>
                </div>
              </div>

              {/* Highlight Card */}
              <div className="hidden rounded-2xl border border-[#00B9FF] bg-[#E8F8FF] px-4 py-3 opacity-0 transition-opacity duration-800 ease-in-out group-hover:opacity-100 lg:mt-4 lg:block">
                <p className="text-grey-700 typography-paragraph-medium pb-3 font-normal">
                  Feature Highlights
                </p>
                <div className="flex items-start gap-1.5">
                  <CircleCheckBig className="text-primary-500 h-5 w-5 flex-shrink-0" />
                  <p className="text-grey-700 typography-paragraph-small font-normal">
                    A better resume in minutes
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots  */}
      <div className="flex justify-center gap-2 pt-3 md:hidden">
        {templateData?.map((template, index: number) => (
          <button
            type="button"
            key={template.id}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-primary-500 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplate;
