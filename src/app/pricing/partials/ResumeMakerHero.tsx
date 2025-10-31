import Image from "next/image";
import Link from "next/link";
import bg2 from "@/assets/jobs/jobbg.svg";
import hero2 from "@/assets/jobs/jobhero.png";
import { PATH } from "@/core/constants/path";

const ResumeMakerHero = () => {
  return (
    <div className="padding-x grid grid-cols-1 items-center overflow-hidden lg:grid-cols-2">
      {/* text section */}
      <div className="mt-10 pr-[1.5rem] lg:mt-0 lg:pr-0">
        <h1 className="typography-h4 text-grey-700 font-semibold">
          Easy Step To{" "}
          <span className="text-secondary-500">Build Your Resume</span> Online
          and Apply Your <span className="text-primary-500">Dream Job</span>
          <br />
        </h1>
        <p className="text-grey-300 typography-paragraph-large mt-5 mb-9 font-normal">
          We will help you to find your dream job easily, let us help you manage
          everything you need
        </p>

        <Link
          href={PATH.PRICING}
          className="bg-primary-500 typography-paragraph-large hover:bg-primary-700 cursor-pointer items-center rounded-[1.97125rem] px-4 py-3 font-medium text-white transition duration-300 ease-in-out"
        >
          Create Resume
        </Link>
      </div>

      {/* image section */}
      <div className="relative h-[25rem] w-full lg:h-[40rem]">
        <Image
          src={bg2}
          alt="Background"
          width={800}
          height={800}
          className="h-full w-full object-cover"
        />

        <div className="bg-primary-500 absolute top-[31%] right-[25%] h-46 w-46 rounded-full lg:h-82 lg:w-82" />

        <div className="absolute top-25 left-0 h-[14rem] w-full lg:h-[27rem]">
          <Image
            src={hero2}
            alt="Hero"
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeMakerHero;
