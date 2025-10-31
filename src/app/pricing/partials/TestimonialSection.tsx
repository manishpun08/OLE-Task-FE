import Image from "next/image";
import Marquee from "react-fast-marquee";
import user from "@/assets/blog/user.png";
import quote from "@/assets/resume-maker/QuotationIcon.svg";

const testimonialData = [
  {
    id: 1,
    name: "Prasanna Joshi",
    role: "Lead Manager",
    feedback:
      "I had been struggling to find a safe and verified job abroad. This platform changed everything. Within a month, I secured a job in Qatar with proper documentation and guidance.",
    image: user,
  },
  {
    id: 2,
    name: "Ananya Sharma",
    role: "Software Engineer",
    feedback:
      "Creating my resume was so easy with Jobscater. The templates are professional, and I landed multiple interviews within weeks.",
    image: user,
  },
  {
    id: 3,
    name: "Ravi Kumar",
    role: "Marketing Specialist",
    feedback:
      "The entire process felt seamless. Applying for jobs was transparent, and I appreciated the constant support from the platform.",
    image: user,
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "HR Executive",
    feedback:
      "Hiring became effortless with Jobscater. We found talented candidates faster than ever before.",
    image: user,
  },
];

const TestimonialSection = () => {
  return (
    <div className="padding-x my-[2rem] lg:my-[4rem]">
      <div className="mx-auto mb-4 w-full max-w-lg text-center">
        <h2 className="text-primary-500 typography-sub-h1 pb-4 font-medium">
          Hear from <span className="text-secondary-500">Our Happy Users</span>
        </h2>
        <p className="typography-paragraph-medium text-grey-500">
          Discover how job seekers built standout resumes and how employers
          found top talent — all with the help of Jobscater.
        </p>
      </div>

      <Marquee pauseOnHover pauseOnClick speed={60} autoFill>
        {testimonialData.map((item) => {
          return (
            <div
              key={item.id}
              className="mx-3 flex h-[22rem] w-full max-w-[26.125rem] flex-col justify-between rounded-4xl bg-white px-13 py-10.5 shadow-[0px_0px_16px_1px_#00000003]"
            >
              {/* Quote Icon */}
              <div className="h-9 w-14">
                <Image
                  src={quote}
                  alt="quote icon"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Feedback */}
              <p className="typography-paragraph-medium text-grey-700 font-poppins flex-1 overflow-hidden py-6.5 font-normal text-ellipsis italic">
                {item.feedback}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3.5">
                <div className="h-10.5 w-10.5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={600}
                    height={600}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="typography-paragraph-large text-grey-900 pb-0.5 font-semibold">
                    {item.name}
                  </p>
                  <p className="typography-paragraph-extra-small text-grey-300 font-normal">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default TestimonialSection;
