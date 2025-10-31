"use client";

import Image from "next/image";
import image from "@/assets/home/StartBuilding.svg";
import { useModal } from "@/core/context/ModalContext";

const StartBuilding = () => {
  const { openModal } = useModal();

  return (
    <div className="padding-x mb-10 lg:mb-21">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="h-[28.9375rem] w-[31.875rem]">
          <Image
            src={image}
            alt="image"
            width={800}
            height={800}
            className="h-full w-full object-contain"
          />
        </div>

        <div>
          <p className="typography-paragraph-extra-small text-primary-500 pb-1.5 font-normal">
            Start Building
          </p>
          <h2 className="typography-h2 text-grey-800 pb-2 font-bold">
            Create Surveys Quickly, Easily, and Exactly the Way You Want or
            Fully Customized
          </h2>
          <p className="text-grey-800 typography-paragraph-medium pb-8 font-light">
            Design surveys in minutes with complete flexibility. Choose from
            ready-made templates or build fully custom surveys, add your
            questions easily, & have them ready to share in no time.
          </p>

          <button
            type="button"
            className="bg-primary-500 typography-paragraph-small hover:bg-primary-700 cursor-pointer items-center rounded-[1.97125rem] px-6 py-3 font-medium text-white transition duration-300 ease-in-out"
            onClick={() => openModal("register")}
          >
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartBuilding;
