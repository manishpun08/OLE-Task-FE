"use client";

import { Share2 } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import SocialMediaShareModal from "@/components/modals/SocialMediaShareModal";
import { handleShareLink } from "@/helper/share.helper";

interface ShareButtonProps {
  title: string;
  text: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, text }) => {
  const [openModal, setOpenModal] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [isSupported, setIsSupported] = useState(false);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof navigator?.share !== "undefined"
    ) {
      setIsSupported(true);
    }
  }, []);

  const handleShare = async () => {
    handleShareLink({
      title: title,
      text: text,
      url: window.location.href,
    });
  };

  if (!isSupported) {
    return (
      <div>
        <button
          type="button"
          className="group cursor-pointer rounded-full bg-white p-2 shadow-sm"
          title="Share"
        >
          <Share2
            className="text-grey-400 group-hover:text-primary-500 transition-colors duration-200"
            size={20}
            onClick={() => {
              setOpenModal(true);
              setShareLink(currentUrl);
            }}
          />
        </button>
        <SocialMediaShareModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          shareLink={shareLink}
        />
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleShare}
        aria-label="Share this page"
        title="Share"
        className="cursor-pointer"
      >
        <Share2
          size={20}
          className="text-grey-400 group-hover:text-primary-500 transition-colors duration-200"
        />
      </button>
    </div>
  );
};

export default ShareButton;
