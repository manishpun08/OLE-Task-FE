"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is Jobscater?",
    answer:
      "Jobscater is a platform that helps job seekers build standout resumes and connect with verified employers worldwide.",
  },
  {
    question: "Is Jobscater free to use?",
    answer:
      "Yes, creating a profile and building your resume is free. We also offer premium features for advanced templates and career services.",
  },
  {
    question: "How long does it take to get a job abroad?",
    answer:
      "The timeline depends on the employer and role. Many of our users secure interviews within a few weeks of applying.",
  },
  {
    question: "Can employers post jobs on Jobscater?",
    answer:
      "Yes, employers can post verified job opportunities and connect directly with qualified candidates.",
  },
];

const FaqSection = () => {
  return (
    <div className="padding-x my-[2rem] lg:my-[6rem]">
      <h2 className="text-secondary-500 typography-sub-h1 mb-4 pb-8 text-center font-medium">
        <span className="text-primary-500">Frequently </span> Asked Questions
      </h2>

      <div className="mx-auto max-w-5xl">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border-500 border-b-[0.4px] py-2 last:border-b-[0.4px]"
            >
              <AccordionTrigger className="hover:text-secondary-500 typography-paragraph-large text-grey-800 cursor-pointer font-medium transition-colors hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="typography-paragraph-medium text-grey-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden font-normal">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqSection;
