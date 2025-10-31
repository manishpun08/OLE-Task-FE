"use client";
import { DialogTitle } from "@radix-ui/react-dialog";
import { FormikProvider } from "formik";
import Link from "next/link";
import InputField from "@/components/form/InputField";
import PasswordInputField from "@/components/form/PasswordInputField";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useModal } from "@/core/context/ModalContext";
import { useLogin } from "../hooks/useLogin";
import GoogleLoginButton from "./GoogleLoginButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const LoginModal: React.FC<Props> = ({ isOpen, onClose, onSuccess }) => {
  const { openModal } = useModal();

  const { formik, isLoading } = useLogin({ onSuccess });

  const handleSwitchModal = () => {
    onClose();
    setTimeout(() => openModal("register"), 100);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="w-[36.1875rem] overflow-hidden rounded-3xl bg-white shadow-[0px_0px_12px_0px_#00000026]">
        <DialogHeader>
          <DialogTitle className="typography-sub-h3 text-primary-500 text-left font-medium">
            Log In to Find Jobs
          </DialogTitle>
          <p className="text-grey-300 typography-paragraph-medium mt-1 mb-4 w-full max-w-sm">
            Login to find jobs and get personalized career recommendations.
          </p>
        </DialogHeader>

        {/* Form */}
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Phone number or Email */}
            <InputField
              name="username"
              title="Phone number"
              placeholder="Enter your phone number"
            />

            {/* Password Field */}
            <PasswordInputField
              name="password"
              title="Password"
              placeholder="Password"
            />

            <div className="flex justify-end">
              <Link
                onClick={onClose}
                className="typography-paragraph-medium text-grey-500 hover:text-primary-500 transition duration-300 ease-in-out hover:underline"
                href="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-primary-500 hover:bg-primary-700 typography-paragraph-large mt-4 w-full rounded-[8px] py-2 font-medium text-white transition duration-300 ease-in-out lg:px-5 lg:py-2.5 ${
                isLoading ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </FormikProvider>

        {/* Social Media Login Options */}
        <div className="flex items-center gap-4">
          <hr className="border-grey-100 flex-grow border-t-[0.4px]" />
          <span className="text-black-200 text-sm">Or</span>
          <hr className="border-grey-100 flex-grow border-t-[0.4px]" />
        </div>

        <div className="flex cursor-pointer items-center justify-center gap-5">
          <GoogleLoginButton
            isOpen={isOpen}
            onSuccess={() => {
              onClose();
              onSuccess();
            }}
          />
        </div>

        {/* Sign In Link */}
        <p className="typography-paragraph-medium pb-2 text-center">
          <span className="text-grey-300">Don’t have an account?</span>{" "}
          <button
            type="button"
            className="text-primary-500 cursor-pointer"
            onClick={handleSwitchModal}
          >
            Sign Up
          </button>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
