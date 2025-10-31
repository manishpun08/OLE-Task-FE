import Image from "next/image";
import b1 from "@/assets/blog/b1.png";
import b2 from "@/assets/blog/b2.png";
import b3 from "@/assets/blog/b3.png";
import b4 from "@/assets/blog/b4.png";
import user from "@/assets/blog/user.png";

const blogs = [
  {
    id: 1,
    image: b1,
    title: "Find Your Dream Job: How Our App Simplifies the Job Hunt",
    author: "Ritima Kumari",
    date: "May 15, 2024",
    featured: true,
  },
  {
    id: 2,
    image: b2,
    title: "The Future of Job Searching: Why Our Job Portal Stands Out",
    author: "Ritima Kumari",
    date: "May 15, 2024",
    featured: false,
  },
  {
    id: 3,
    image: b3,
    title: "Transform Your Career Path with Our Job Portal App",
    author: "Ritima Kumari",
    date: "May 15, 2024",
    featured: false,
  },
  {
    id: 4,
    image: b4,
    title: "From Search to Success: Navigating Our Job Portal App",
    author: "Ritima Kumari",
    date: "May 15, 2024",
    featured: false,
  },
];

const FindDreamJob = () => {
  const featuredBlog = blogs.find((b) => b.featured);
  const otherBlogs = blogs.filter((b) => !b.featured);

  return (
    <div className="padding-x mb-[2rem] lg:mb-[4rem]">
      <div className="flex items-center gap-9">
        {/* Featured Blog */}
        {featuredBlog && (
          <div className="w-full max-w-[39.0625rem]">
            <div className="h-[25rem] w-full rounded-[12px] border border-[#D9D9D9]">
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                width={800}
                height={800}
                className="h-full w-full rounded-[12px] object-cover"
              />
            </div>
            <p className="typography-h6 my-2">{featuredBlog.title}</p>

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
              <p className="typography-paragraph-large text-grey-700 font-normal">
                {featuredBlog.author}
              </p>
              <span className="text-grey-400 typography-paragraph-medium font-normal">
                {featuredBlog.date}
              </span>
            </div>
          </div>
        )}

        {/* Other Blogs */}
        <div className="w-full max-w-[39.0625rem] flex-col items-center space-y-8">
          {otherBlogs.map((blog) => (
            <div key={blog.id} className="flex gap-4">
              <div className="h-[10.125rem] w-full max-w-[18.75rem] rounded-[12px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={800}
                  height={800}
                  className="h-full w-full rounded-[12px] object-cover"
                />
              </div>
              <div>
                <p className="typography-paragraph-extra-large pb-2 font-medium">
                  {blog.title}
                </p>

                <div className="flex items-center gap-3">
                  <p className="typography-paragraph-large text-grey-700 font-normal">
                    {blog.author}
                  </p>
                  <span className="text-grey-200 typography-paragraph-small font-normal">
                    {blog.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindDreamJob;
