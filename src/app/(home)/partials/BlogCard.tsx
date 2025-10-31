import Image from "next/image";

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

const BlogCard = ({ image, date, title, description }: BlogCardProps) => {
  return (
    <div>
      <div className="w-full max-w-[386.6666564941406px] h-[281px]">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>

      <p className="py-3 text-grey-500 typography-paragraph-small leading-[140%] font-medium">
        {date}
      </p>

      <p className="text-grey-700 typography-paragraph-large leading-[140%] pb-2 font-semibold">
        {title}
      </p>

      <p className="font-normal text-grey-500 typography-paragraph-medium leading-[150%] tracking-[1%]">
        {description}
      </p>
    </div>
  );
};

export default BlogCard;
