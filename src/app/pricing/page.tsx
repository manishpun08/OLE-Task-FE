import CompaniesSection from "./partials/CompaniesSection";
import CompareFeatures from "./partials/CompareFeatures";
import FaqSection from "./partials/FaqSection";
import PricingModel from "./partials/PricingModel";
import ResumeMakerHero from "./partials/ResumeMakerHero";
import ResumeTemplate from "./partials/ResumeTemplate";
import TestimonialSection from "./partials/TestimonialSection";

const ResumeMakerPage = () => {
  return (
    <div>
      <ResumeMakerHero />
      <CompaniesSection />
      <ResumeTemplate />
      <PricingModel />
      <CompareFeatures />
      <TestimonialSection />
      <FaqSection />
    </div>
  );
};

export default ResumeMakerPage;
