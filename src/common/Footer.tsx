import Link from "next/link";
import { footerData } from "@/data/footerData";

const Footer = async () => {
  return (
    <footer>
      <div className="w-full bg-[#292838]">
        <div className="padding-x z-20 py-[4rem]">
          <div className="grid grid-cols-2 gap-6 mt-4 md:gap-25 lg:grid-cols-5">
            {/* Company Info */}
            <div className="col-span-2">
              <p className="text-white font-bold text-[30px] leading-[100%]">
                Awwwsome.
              </p>

              <p className="typography-paragraph-small text-[#FFFFFFCC] py-4 font-normal">
                Our team can create amazing web experiences, beginning with deep
                market research, practical strategies, and professional
                execution.
              </p>
            </div>

            {/* ABOUT US */}
            <div>
              <div className="pb-6 font-semibold text-white typography-paragraph-large">
                ABOUT US
              </div>
              <ul className="typography-paragraph-medium leading-[110.00000000000001%] text-[#FFFFFFCC] space-y-4 font-normal">
                {footerData.quickLinks.map((item, index) => (
                  <li key={index} className="hover:underline">
                    <Link href={item?.link || "#"}>{item?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customers */}
            <div>
              <div className="pb-6 font-semibold text-white typography-paragraph-large">
                Customers
              </div>
              <ul className="typography-paragraph-medium leading-[110.00000000000001%] text-[#FFFFFFCC] space-y-4 font-normal">
                {footerData.importantLinks.map((item, index) => (
                  <li key={index} className="hover:underline">
                    <Link href={item?.link || "#"}>{item?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="">
              <div className="pb-6 font-semibold text-white typography-paragraph-large">
                Support
              </div>
              <ul className="typography-paragraph-medium leading-[110.00000000000001%] text-[#FFFFFFCC] space-y-4 font-normal">
                {footerData.importantLinks.map((item, index) => (
                  <li key={index} className="hover:underline">
                    <Link href={item?.link || "#"}>{item?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="pt-[1.6rem] pb-[2rem] text-center bg-[#23222F]">
          <p className="typography-paragraph-small leading-[140%] text-[#FFFFFFCC] font-medium">
            {new Date().getFullYear()} ©. Awwwsome Designers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
