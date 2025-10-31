import BlogHero from "./partials/BlogHero";
import BlogSection from "./partials/BlogSection";
import FeaturedCategories from "./partials/FeaturedCategories";
import FindDreamJob from "./partials/FindDreamJob";

const BlogPage = () => {
  return (
    <div>
      <BlogHero />
      <FindDreamJob />
      <BlogSection />
      <FeaturedCategories />
    </div>
  );
};

export default BlogPage;
