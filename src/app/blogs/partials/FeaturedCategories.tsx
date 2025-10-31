"use client";

import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import user from "@/assets/blog/user.png";
import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const categories = [
  {
    id: 1,
    name: "Ritima Kumari",
    description:
      "Job Hunting Made Easy: Discover the Benefits of Our Job Portal",
    avatar: user,
  },
  {
    id: 2,
    name: "Elina Devi",
    description: "Transform Your Career Path with Our Job Portal App",
    avatar: user,
  },
  {
    id: 3,
    name: "Pooja Kumari",
    description:
      "Job Hunting Made Easy: Discover the Benefits of Our Job Portal",
    avatar: user,
  },
  {
    id: 4,
    name: "Anita Sharma",
    description:
      "Unlock New Opportunities with Our Advanced Job Search Platform",
    avatar: user,
  },
  {
    id: 5,
    name: "Priya Singh",
    description: "Career Growth Simplified: Experience Our Job Portal Benefits",
    avatar: user,
  },
];

const FeaturedCategories = () => {
  return (
    <div className="padding-x mb-[2rem] lg:mb-[4rem]">
      <h2 className="text-primary-500 typography-sub-h1 mb-2 font-medium">
        Featured Categories
      </h2>

      <div className="relative px-14">
        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="swiper-button-prev absolute top-1/2 left-0 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-gray-50"
        >
          <BiChevronLeft className="text-[#206C89]" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="swiper-button-next absolute top-1/2 right-0 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-gray-50"
        >
          <BiChevronRight className="text-[#206C89]" />
        </Button>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="rounded-lg border border-[#F5F5F5] bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 shrink-0 rounded-full bg-[#F4FAFF] p-2">
                    <Image
                      src={category.avatar || "/placeholder.svg"}
                      alt={category.name}
                      width={400}
                      height={400}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-primary-500 typography-paragraph-large font-semibold">
                      {category.name}
                    </h3>
                    <p className="text-grey-400 typography-paragraph-medium font-normal">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedCategories;
