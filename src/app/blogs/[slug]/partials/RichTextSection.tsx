import Image from "next/image";
import hero from "@/assets/blog/bloghero.png";

const RichTextSection = () => {
  return (
    <div className="padding-x my-[2rem]">
      <div className="h-[29.5rem] w-full rounded-[12px]">
        <Image
          src={hero}
          alt="hero"
          width={800}
          height={800}
          className="h-full w-full rounded-[12px] object-cover"
        />
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html:
            "<p>In today's rapidly evolving job market, the traditional methods of finding employment can be frustrating, time-consuming, and often unrewarding. From sifting through endless job listings to crafting countless resumes, the search for the perfect career opportunity can feel like a full-time job in itself.</p>",
        }}
      />
    </div>
  );
};

export default RichTextSection;
