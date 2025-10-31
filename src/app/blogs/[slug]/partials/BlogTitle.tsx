import Image from "next/image";
import user from "@/assets/blog/user.png";

const BlogTitle = () => {
  return (
    <div className="padding-x mt-[2rem] lg:mt-[4rem]">
      <h1 className="text-grey-800 typography-h6 mb-3 font-medium">
        Revolutionizing Job Searches: Introducing Our Innovative Job Portal App
      </h1>

      <div className="flex items-center gap-3">
        <div className="w-h-9 h-9 rounded-full">
          <Image
            src={user}
            alt="user"
            width={400}
            height={400}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <p className="typography-paragraph-medium text-grey-700 font-normal">
          Ritima Kumari
        </p>
        <span className="text-grey-400 typography-paragraph-small font-normal">
          May 15, 2024
        </span>
      </div>
    </div>
  );
};

export default BlogTitle;
