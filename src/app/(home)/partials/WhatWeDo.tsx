import { services } from "@/data/serviceData";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div>
      <h2 className="text-center text-gray-500 font-semibold typography-h3 leading-[178%] tracking-[1%] mb-10">
        What we do
      </h2>

      <div className="flex flex-col items-center mb-20 text-center md:flex-row md:justify-center md:gap-[72px]">
        {services.map((service) => (
          <div
            key={service?.id}
            className="flex flex-col items-center mb-10 text-center md:mb-0"
          >
            <div
              className={`bg-[${service?.bg}] w-[91px] h-[90px] rounded-[20px] flex items-center justify-center`}
            >
              <Image
                src={service?.icon}
                alt={service?.title}
                width={41}
                height={41}
                className="object-cover"
              />
            </div>

            <div className="w-full max-w-[285px] mt-6">
              <p className="typography-h5 tracking-[1%] text-gray-500 font-medium pb-2">
                {service?.title}
              </p>
              <p className="text-gray-500 typography-paragraph-medium leading-[150%] tracking-[1%]">
                {service?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
