"use client";

import { AiOutlineLink } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { showSuccessMessage } from "@/utils/toast";

const BlogShareSection = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl || "");
    showSuccessMessage("Link copied to clipboard!");
  };

  return (
    <div className="padding-x mb-[2rem] flex justify-end">
      {/* social media icons  */}
      <div className="flex gap-4">
        <div className="text-primary-500 flex flex-col items-center justify-center">
          <p className="typography-paragraph-large font-medium">34</p>
          <span className="typography-paragraph-extra-small font-normal">
            Shares
          </span>
        </div>
        <div className="bg-primary-50 flex items-center justify-center rounded-full px-4 py-2">
          <button
            type="button"
            className="typography-paragraph-medium text-primary-500 flex cursor-pointer items-center gap-1 font-medium"
            onClick={handleCopyLink}
          >
            <AiOutlineLink className="size-6" />
            Copy Links
          </button>
        </div>
        <FacebookShareButton url={currentUrl}>
          <div className="bg-primary-50 flex h-10 w-10 items-center justify-center rounded-full">
            <FaFacebook className="text-primary-500 cursor-pointer" size={22} />
          </div>
        </FacebookShareButton>
        <TwitterShareButton url={currentUrl}>
          <div className="bg-primary-50 flex h-10 w-10 items-center justify-center rounded-full">
            <FaTwitter className="text-primary-500 cursor-pointer" size={22} />
          </div>
        </TwitterShareButton>
        <EmailShareButton url={currentUrl}>
          <div className="bg-primary-50 flex h-10 w-10 items-center justify-center rounded-full">
            <BsEnvelope className="text-primary-500 cursor-pointer" size={22} />
          </div>
        </EmailShareButton>
      </div>
    </div>
  );
};

export default BlogShareSection;
