"use client";

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import image3 from "@/assets/home/ForAgencies.svg";
import image2 from "@/assets/home/ForHRTeams.svg";
import image1 from "@/assets/home/ForMarketingTeams.svg";

const TurnFeedbackAction = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="padding-x mb-10 lg:mb-21">
        <h2 className="text-grey-800 typography-h2 font-bold text-center pt-10 pb-4">
          Turn Feedback into Action
        </h2>
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 pb-10">
          <div className="h-[28.9375rem] w-[31.875rem]">
            <Image
              src={image1}
              alt="image"
              width={800}
              height={800}
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <p className="typography-paragraph-extra-small text-secondary-500 pb-1.5 font-normal">
              Gain Real Insights
            </p>
            <h2 className="typography-h2 text-grey-800 pb-2 font-bold">
              Turn Customer Feedback into Smarter Campaigns
            </h2>
            <p className="text-grey-800 typography-paragraph-medium pb-4 font-light">
              Quickly understand what resonates with your audience and make
              data-driven decisions to boost engagement and conversions.
            </p>
            <ul className="pb-6 space-y-2">
              <li className="flex items-center gap-1.5 ">
                <IoMdCheckmarkCircle className="size-4 text-secondary-500" />
                Launch targeted customer surveys
              </li>
              <li className="flex items-center gap-1.5 ">
                <IoMdCheckmarkCircle className="size-4 text-secondary-500" />
                Launch targeted customer surveys
              </li>
              <li className="flex items-center gap-1.5 ">
                <IoMdCheckmarkCircle className="size-4 text-secondary-500" />
                Launch targeted customer surveys
              </li>
            </ul>

            <button
              type="button"
              className="typography-paragraph-small inline-flex gap-2 text-primary-500 hover:text-primary-700 cursor-pointer items-center font-medium  transition duration-300 ease-in-out"
            >
              View More <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center lg:grid-cols-2 pb-10">
          <div>
            <p className="typography-paragraph-extra-small text-secondary-500 pb-1.5 font-normal">
              For HR Teams
            </p>
            <h2 className="typography-h2 text-grey-800 pb-2 font-bold">
              Boost employee engagement effortlessly.
            </h2>
            <p className="text-grey-800 typography-paragraph-medium pb-4 font-light">
              Improve employee engagement and satisfaction with pulse and
              feedback surveys. Identify trends, monitor the impact of
              initiatives, and generate actionable reports to make informed HR
              decisions.
            </p>
            <ul className="pb-6 space-y-2">
              <li className="flex items-center gap-1.5 ">
                <IoMdCheckmarkCircle className="size-4 text-secondary-500" />
                Launch targeted customer surveys
              </li>
              <li className="flex items-center gap-1.5 ">
                <IoMdCheckmarkCircle className="size-4 text-secondary-500" />
                Launch targeted customer surveys
              </li>
              <li className="flex items-center gap-1.5 ">
                <IoMdCheckmarkCircle className="size-4 text-secondary-500" />
                Launch targeted customer surveys
              </li>
            </ul>

            <button
              type="button"
              className="typography-paragraph-small inline-flex gap-2 text-primary-500 hover:text-primary-700 cursor-pointer items-center font-medium  transition duration-300 ease-in-out"
            >
              View More <FaChevronRight />
            </button>
          </div>

          <div className="h-[28.9375rem] w-full shrink-0">
            <Image
              src={image2}
              alt="image"
              width={800}
              height={800}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 items-center lg:grid-cols-2 pb-10">
          <div className="h-[28.9375rem] w-[31.875rem]">
            <Image
              src={image3}
              alt="image"
              width={800}
              height={800}
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <p className="typography-paragraph-extra-small text-secondary-500 pb-1.5 font-normal">
              For Agencies
            </p>
            <h2 className="typography-h2 text-grey-800 pb-2 font-bold">
              Manage client surveys in one place.
            </h2>
            <p className="text-grey-800 typography-paragraph-medium pb-4 font-light">
              Manage multiple client surveys seamlessly in one dashboard. Track
              responses, generate professional reports, and collaborate
              efficiently with your team to deliver actionable insights for
              every client.
            </p>
            <ul className="pb-6 space-y-2">
              <li className="flex items-center gap-1.5 ">
                <IoMdCheckmarkCircle className="size-4 text-secondary-500" />
                Launch targeted customer surveys
              </li>
              <li className="flex items-center gap-1.5 ">
                <IoMdCheckmarkCircle className="size-4 text-secondary-500" />
                Launch targeted customer surveys
              </li>
              <li className="flex items-center gap-1.5 ">
                <IoMdCheckmarkCircle className="size-4 text-secondary-500" />
                Launch targeted customer surveys
              </li>
            </ul>

            <button
              type="button"
              className="typography-paragraph-small inline-flex gap-2 text-primary-500 hover:text-primary-700 cursor-pointer items-center font-medium  transition duration-300 ease-in-out"
            >
              View More <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnFeedbackAction;
