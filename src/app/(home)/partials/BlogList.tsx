import { blogData } from "@/data/blogData";
import BlogCard from "./BlogCard";

const BlogList = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="py-[72px] padding-x">
        <div className="text-center w-full max-w-[559px] mx-auto">
          <h2 className="typography-h3 leading-[140%] tracking-[1%] font-semibold text-grey-700">
            Blog
          </h2>
          <p className="font-normal typography-paragraph-medium leading-[150%] tracking-[1%] text-grey-500 pt-2 mb-10">
            Insights, thoughts, industry trends, marketing tips, eDesign news,
            nerdy stuff, it's all here.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
        <div className="flex justify-center mt-18">
          <button
            type="button"
            className="bg-primary-500 typography-paragraph-medium hover:bg-primary-700 cursor-pointer items-center rounded-[4px] px-7.5 py-4 font-semibold text-white transition duration-300 ease-in-out"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
