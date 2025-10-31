import Image from "next/image";
import hero1 from "@/assets/blog/bloghero.png";

const BlogHero = () => {
  return (
    <div className="padding-x my-[2rem] lg:my-[4rem]">
      <div className="relative h-[26.4375rem] w-full rounded-[12px]">
        <Image
          src={hero1}
          alt="hero"
          width={800}
          height={800}
          className="h-full w-full rounded-[12px] object-cover brightness-75"
        />
        <div className="absolute bottom-10 left-10 z-10 w-full max-w-md text-white">
          <p className="typography-sub-h2 pb-2.5 font-bold">
            Crypto exchange Bybit hacked for $1.4 billion worth of ETH
          </p>
          <p className="typography-paragraph-medium font-medium">
            Following a security breach first spotted by crypto investigator
            ZachXBT, crypto exchange...
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
