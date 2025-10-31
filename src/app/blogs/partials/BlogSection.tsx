import Image from "next/image";
import Link from "next/link";
import b1 from "@/assets/blog/blog1.png";
import b2 from "@/assets/blog/blog2.png";
import b3 from "@/assets/blog/blog3.png";
import user from "@/assets/blog/user.png";
import { PATH } from "@/core/constants/path";

const blogs = [
  {
    id: 1,
    image: b1,
    title: "Find Your Dream Job: How Our App Simplifies the Job Hunt",
    author: "Ritima Kumari",
    date: "May 15, 2024",
    slug: "find-your-dream-job-how-our-app-simplifies-the-job-hunt",
  },
  {
    id: 2,
    image: b2,
    title: "The Future of Job Searching: Why Our Job Portal Stands Out",
    author: "Ritima Kumari",
    date: "May 15, 2024",
    slug: "the-future-of-job-searching-why-our-job-portal-stands-out",
  },
  {
    id: 3,
    image: b3,
    title: "Transform Your Career Path with Our Job Portal App",
    author: "Ritima Kumari",
    date: "May 15, 2024",
    slug: "transform-your-career-path-with-our-job-portal-app",
  },
  {
    id: 4,
    image: b1,
    title: "From Search to Success: Navigating Our Job Portal App",
    author: "Ritima Kumari",
    date: "May 15, 2024",
    slug: "from-search-to-success-navigating-our-job-portal-app",
  },
  {
    id: 5,
    image: b2,
    title: "Find Your Dream Job: How Our App Simplifies the Job Hunt",
    author: "Ritima Kumari",
    date: "May 15, 2024",
    slug: "find-your-dream-job-how-our-app-simplifies-the-job-hunt-2",
  },
  {
    id: 6,
    image: b3,
    title: "The Future of Job Searching: Why Our Job Portal Stands Out",
    author: "Ritima Kumari",
    date: "May 15, 2024",
    slug: "the-future-of-job-searching-why-our-job-portal-stands-out-2",
  },
];

const BlogSection = () => {
  return (
    <div className="padding-x mb-[2rem] lg:mb-[4rem]">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-full max-w-[25.3125rem]">
            <Link
              href={`${PATH.BLOG}/${blog.slug}`}
              className="block h-[15rem] w-full rounded-[12px]"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={800}
                className="h-full w-full rounded-[12px] object-cover"
              />
            </Link>

            <Link
              href={`${PATH.BLOG}/${blog.slug}`}
              className="typography-paragraph-extra-large hover:text-primary-500 text-grey-700 block py-1.5 transition-all duration-300 hover:underline"
            >
              {blog.title}
            </Link>

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
                {blog.author}
              </p>
              <span className="text-grey-400 typography-paragraph-small font-normal">
                {blog.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
