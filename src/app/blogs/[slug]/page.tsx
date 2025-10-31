import BlogShareSection from "./partials/BlogShareSection";
import BlogTitle from "./partials/BlogTitle";
import CommentForm from "./partials/CommentForm";
import RichTextSection from "./partials/RichTextSection";

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

const BlogDetailPage = async ({ params }: BlogDetailProps) => {
  const { slug } = await params;
  console.warn("Slug:", slug);

  return (
    <div>
      <BlogTitle />
      <RichTextSection />
      <BlogShareSection />
      <CommentForm slug={slug} />
    </div>
  );
};

export default BlogDetailPage;
