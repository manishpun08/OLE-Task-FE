import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "Rs. 1,000",
    duration: "Build",
    highlight: false,
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur",
    ],
  },
  {
    name: "Pro",
    price: "Rs. 2,000",
    duration: "Month",
    highlight: true,
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur",
    ],
  },
  {
    name: "Premium",
    price: "Rs. 25,000",
    duration: "Year",
    highlight: false,
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur",
    ],
  },
];

const PricingModel = () => {
  return (
    <div className="padding-x my-[2rem] lg:my-[4rem]">
      <div className="mx-auto mb-15 w-full max-w-lg text-center">
        <h2 className="text-primary-500 typography-sub-h1 pb-4 font-medium">
          <span className="text-secondary-500">Pick a Plan,</span> Set up your
          Site
        </h2>
        <p className="typography-paragraph-medium text-grey-500">
          Choose the plan that’s right for your business. Whether you’re just
          getting started with email marketing.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative transform rounded-3xl bg-white transition-all duration-300 ${
              plan.highlight
                ? "border-primary-500 hover:border-primary-500 border-4 p-8 shadow-[0px_4px_16px_5px_#206C890D] hover:scale-110 md:scale-105"
                : "border-grey-50 hover:border-primary-500 border p-6 shadow-[0px_4px_16px_5px_#206C890D] hover:scale-105"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                <div className="bg-primary-500 typography-paragraph-small rounded-full px-6 py-2 font-semibold text-white shadow-md">
                  RECOMMENDED
                </div>
              </div>
            )}

            <div className="mb-4 text-center">
              <h3 className="text-grey-900 typography-sub-h2 mb-1 font-semibold">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-secondary-500 typography-sub-h2 font-semibold">
                  {plan.price}
                </span>
                <span className="text-grey-200 typography-paragraph-medium font-normal">
                  <span className="mx-1 text-lg">/</span> {plan.duration}
                </span>
              </div>

              {/* Static buttons */}
              {plan.name === "Basic" ? (
                <Button className="bg-primary-500 typography-paragraph-large hover:bg-primary-700 w-full cursor-pointer items-center rounded-full py-5 font-medium text-white transition duration-300 ease-in-out">
                  Purchase Now
                </Button>
              ) : (
                <div className="space-y-3">
                  <Button className="bg-primary-500 typography-paragraph-large hover:bg-primary-700 w-full cursor-pointer items-center rounded-full py-5 font-medium text-white transition duration-300 ease-in-out">
                    Try for Free
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary-500 text-primary-500 hover:bg-primary-50 typography-paragraph-large w-full cursor-pointer rounded-full border bg-transparent py-4 font-medium transition duration-300 ease-in-out"
                  >
                    Purchase Now
                  </Button>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="space-y-4">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="text-primary-500 mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-grey-700 typography-paragraph-small font-normal">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingModel;
