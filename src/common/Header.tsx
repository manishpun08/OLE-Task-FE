import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import UserSection from "./UserSection";

const Header = () => {
  return (
    <header className="border-b-grey-100 sticky top-0 left-0 z-40 w-full border-b-[0.35px] bg-white py-7">
      <div className="padding-x relative flex items-center">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Homepage"
          className="h-12 w-36 cursor-pointer"
        >
          <Image
            src={"/Logo.svg"}
            alt="logo"
            width={600}
            height={600}
            className="h-full w-full object-contain"
            priority
          />
        </Link>

        <div className="flex flex-1 justify-end py-2 lg:pr-12">
          <Navbar />
        </div>

        {/* User Section */}
        <UserSection />
      </div>
    </header>
  );
};

export default Header;
