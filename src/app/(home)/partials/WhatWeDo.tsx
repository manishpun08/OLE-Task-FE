import Image from "next/image";
import { services } from "@/data/serviceData";

const WhatWeDo = () => {
  return (
    <div>
      <h2 className="typography-h3 mb-10 text-center leading-[178%] font-semibold tracking-[1%] text-gray-500">
        What we do
      </h2>

      <div className="padding-x mb-20 flex flex-col items-center text-center md:flex-row md:gap-[72px]">
        {services.map((service) => (
          <div
            key={service?.id}
            className="mb-10 flex flex-col items-center text-center md:mb-0"
          >
            <div
              className="flex h-[90px] w-[91px] items-center justify-center rounded-[20px]"
              style={{ backgroundColor: service?.bg }}
            >
              <Image
                src={service?.icon}
                alt={service?.title}
                width={41}
                height={41}
                className="object-cover"
              />
            </div>

            <div className="mt-6 w-full max-w-[285px]">
              <p className="typography-h5 pb-2 font-medium tracking-[1%] text-gray-500">
                {service?.title}
              </p>
              <p className="typography-paragraph-medium leading-[150%] tracking-[1%] text-gray-500">
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
