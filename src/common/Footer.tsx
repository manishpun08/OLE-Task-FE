import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

import { footerData } from "@/data/footerData";

import Newsletter from "./Newsletter";

const Footer = async () => {
  return (
    <footer>
      <Newsletter />
      <div className="w-full bg-white">
        <div className="padding-x z-20 pt-[4rem]">
          <div className="mt-[3rem] grid grid-cols-2 gap-6 md:gap-10 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <div className="h-12 w-34">
                <Image
                  // src={organizationSetting?.logo || "/logo.png"}
                  src={"/Logo.svg"}
                  alt="logo"
                  width={800}
                  height={800}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>

              <p className="typography-paragraph-small text-grey-800 py-4 font-normal">
                {/* {organizationSetting?.description} */}
                Transform feedback into actionable insights with the most
                intuitive survey platform.
              </p>

              <div className="typography-sub-h1 text-grey-800 pb-3 font-semibold">
                Company Info
              </div>
              <ul className="space-y-2">
                {/* {organizationSetting?.headquater_address && ( */}
                <li>
                  <Link
                    // href={organizationSetting?.location_url || "#"}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="typography-paragraph-small text-grey-800 flex gap-2 font-light"
                  >
                    <GrLocation className="mt-1 shrink-0" />
                    {/* {organizationSetting?.headquater_address} */}
                    Sifal-7, Kathmandu, Nepal
                  </Link>
                </li>
                {/* )} */}

                {/* {organizationSetting?.phone_number && ( */}
                <li>
                  <Link
                    // href={`tel:${organizationSetting?.phone_number}`}
                    href={`tel:1234567890`}
                    className="typography-paragraph-small text-grey-800 flex gap-2 font-light"
                  >
                    <FiPhone className="mt-1 shrink-0" />
                    {/* {organizationSetting?.phone_number} */}
                    +977-1-4578440
                  </Link>
                </li>
                {/* )} */}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <div className="typography-sub-h1 text-grey-800 pb-3 font-semibold">
                Quick Links
              </div>
              <ul className="typography-paragraph-small text-grey-800 space-y-2 font-light">
                {footerData.quickLinks.map((item, index) => (
                  <li key={index} className="hover:underline">
                    <Link href={item?.link || "#"}>{item?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <div className="typography-sub-h1 text-grey-800 pb-3 font-semibold">
                Important Links
              </div>
              <ul className="typography-paragraph-small text-grey-800 space-y-2 font-light">
                {footerData.importantLinks.map((item, index) => (
                  <li key={index} className="hover:underline">
                    <Link href={item?.link || "#"}>{item?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="">
              <div className="typography-sub-h1 text-grey-800 pb-3 font-semibold">
                Follow Us
              </div>
              {/* Social Media */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-grey-500 flex h-10.5 w-10.5 items-center justify-center rounded-full border-[0.4px] transition-all duration-300 hover:scale-110 hover:border-pink-500 hover:text-pink-500"
                >
                  <BsInstagram className="text-lg" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-grey-500 flex h-10.5 w-10.5 items-center justify-center rounded-full border-[0.4px] transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:text-blue-500"
                >
                  <FaFacebookF className="text-lg" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-grey-500 flex h-10.5 w-10.5 items-center justify-center rounded-full border-[0.4px] transition-all duration-300 hover:scale-110 hover:border-[#ff0050] hover:text-[#ff0050]"
                >
                  <BsTiktok className="text-lg" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-grey-300 mt-8 border-t-[0.25px]"></div>

          {/* Footer Bottom */}
          <div className="pt-[1.6rem] pb-[2rem] text-center">
            <p className="typography-paragraph-extra-small text-grey-800 font-light">
              COPYRIGHT  © {new Date().getFullYear()} ‘SurveyShala’ | All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
