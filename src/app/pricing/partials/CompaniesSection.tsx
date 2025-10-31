import Image from "next/image";
import Marquee from "react-fast-marquee";
import company1 from "@/assets/resume-maker/company1.png";
import company2 from "@/assets/resume-maker/company2.png";
import company3 from "@/assets/resume-maker/company3.png";
import company4 from "@/assets/resume-maker/company4.png";

const companies = [
  { id: 1, image: company1 },
  { id: 2, image: company2 },
  { id: 3, image: company3 },
  { id: 4, image: company4 },
];

const CompaniesSection = () => {
  return (
    <div className="padding-x mb-[2rem] lg:mb-[4rem]">
      <h2 className="text-grey-700 typography-sub-h2 mb-5 w-full font-medium">
        Loved by interviewers at
      </h2>

      <Marquee pauseOnHover pauseOnClick speed={60} autoFill>
        {companies.map((item) => {
          return (
            <div
              key={item?.id}
              className="mr-[1rem] h-[4.375rem] rounded-[1.5rem] bg-white px-[1.5rem] lg:w-45"
            >
              <Image
                src={item?.image}
                alt={`Company ${item?.id}`}
                width={800}
                height={800}
                className="h-full w-full object-contain"
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default CompaniesSection;
