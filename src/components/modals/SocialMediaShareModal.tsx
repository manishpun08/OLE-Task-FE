import { motion } from "framer-motion";
import type React from "react";
import ReactDOM from "react-dom";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaRegCopy,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import useShareClickOutside from "@/hooks/useShareClickOutside";
import { showSuccessMessage } from "@/utils/toast";

interface SocialMediaShareModalProps {
  isOpen: boolean | undefined;
  onClose: () => void;
  shareLink: string | undefined;
}
const SocialMediaShareModal: React.FC<SocialMediaShareModalProps> = ({
  isOpen,
  onClose,
  shareLink,
}) => {
  const modalRef = useShareClickOutside(onClose);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink || "");
    showSuccessMessage("Link copied to clipboard!");
  };
  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 text-black">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-auto rounded-lg bg-white px-10 py-7 shadow-md"
              ref={modalRef}
            >
              <h1 className="text-section-h1 mb-4 text-center">Share to:</h1>
              <div className="flex gap-10">
                <FacebookShareButton url={shareLink || ""}>
                  <FaFacebook className="text-3xl text-blue-600" />
                </FacebookShareButton>{" "}
                <TwitterShareButton url={shareLink || ""}>
                  <FaXTwitter className="text-xl lg:text-3xl" />
                </TwitterShareButton>{" "}
                <WhatsappShareButton url={shareLink || ""}>
                  <FaWhatsapp className="text-xl text-purple-500 lg:text-3xl" />
                </WhatsappShareButton>{" "}
                <InstapaperShareButton url={shareLink || ""}>
                  <FaInstagram className="text-xl text-purple-500 lg:text-3xl" />
                </InstapaperShareButton>{" "}
                <FacebookShareButton url={shareLink || ""}>
                  <FaFacebookMessenger className="text-xl text-blue-500 lg:text-3xl" />
                </FacebookShareButton>{" "}
                <button onClick={handleCopyLink}>
                  <FaRegCopy className="text-xl text-gray-500 lg:text-3xl" />
                </button>
              </div>
            </motion.div>
          </div>,
          document.body,
        )}
    </>
  );
};
export default SocialMediaShareModal;
