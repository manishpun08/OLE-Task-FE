import { Minus } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  {
    category: "Core",
    items: [
      {
        name: "Resume Builds",
        basic: "1 Resume",
        pro: "5 Resume",
        premium: "Unlimited Resumes",
      },
      {
        name: "Templates",
        basic: "2 Basic Templates",
        pro: "10+ Professional Template",
        premium: "15+Premium + Creative Templates",
      },
      {
        name: "Export Options",
        basic: "Pdf only",
        pro: "PDF + Word",
        premium: "PDF + World + Online Link",
      },
      {
        name: "Customization",
        basic: "Limited",
        pro: "Fonts + Colors",
        premium: "Full Customization (Fonts, Colors, Layouts)",
      },
    ],
  },
  {
    category: "",
    items: [
      {
        name: "Cover Letter Builder",
        basic: false,
        pro: true,
        premium: true,
      },
      {
        name: "AI Writing Suggestions",
        basic: false,
        pro: true,
        premium: true,
      },
      {
        name: "ATS-Friendly Format",
        basic: true,
        pro: true,
        premium: true,
      },
      {
        name: "Version History",
        basic: false,
        pro: true,
        premium: true,
      },
    ],
  },
];
const CompareFeatures = () => {
  return (
    <div className="padding-x my-[2rem] lg:my-[4rem]">
      <h2 className="text-secondary-500 typography-sub-h1 mb-4 pb-4 text-center font-medium">
        <span className="text-primary-500">Compare </span> All Features
      </h2>

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="border-border-500 grid grid-cols-4 border-b-[0.4px]">
          <p className="typography-paragraph-extra-large text-primary-500 p-6 font-semibold">
            Features
          </p>

          <p className="typography-paragraph-extra-large text-primary-500 p-6 text-center font-semibold">
            Basic
          </p>

          <p className="typography-paragraph-extra-large text-primary-500 p-6 text-center font-semibold">
            Pro
          </p>

          <p className="typography-paragraph-extra-large text-primary-500 p-6 text-center font-semibold">
            Premium
          </p>
        </div>

        {/* Features */}
        {features.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.category && (
              <div className="">
                <p className="border-border-500 typography-paragraph-extra-large text-grey-800 col-span-4 grid grid-cols-4 border-b-[0.4px] p-6 font-semibold">
                  {section.category}
                </p>
              </div>
            )}
            {section.items.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="border-border-500 grid grid-cols-4 border-b-[0.4px]"
              >
                <p className="text-grey-700 typography-paragraph-large p-6 font-normal">
                  {feature.name}
                </p>

                <div className="p-6 text-center">
                  {typeof feature.basic === "boolean" ? (
                    feature.basic ? (
                      <FaCheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    ) : (
                      <Minus className="mx-auto h-5 w-5 rounded-full bg-[#EFEFEF] p-1 text-[#9E9E9E]" />
                    )
                  ) : (
                    <span className="text-grey-400 typography-paragraph-medium font-normal">
                      {feature.basic}
                    </span>
                  )}
                </div>
                <div className="p-6 text-center">
                  {typeof feature.pro === "boolean" ? (
                    feature.pro ? (
                      <FaCheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    ) : (
                      <Minus className="mx-auto h-5 w-5 rounded-full bg-[#EFEFEF] p-1 text-[#9E9E9E]" />
                    )
                  ) : (
                    <p className="text-grey-400 typography-paragraph-medium font-normal">
                      {feature.pro}
                    </p>
                  )}
                </div>
                <div className="p-6 text-center">
                  {typeof feature.premium === "boolean" ? (
                    feature.premium ? (
                      <FaCheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    ) : (
                      <Minus className="mx-auto h-5 w-5 rounded-full bg-[#EFEFEF] p-1 text-[#9E9E9E]" />
                    )
                  ) : (
                    <span className="text-grey-400 typography-paragraph-medium font-normal">
                      {feature.premium}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareFeatures;
