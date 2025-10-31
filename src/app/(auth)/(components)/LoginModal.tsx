"use client";
import InputField from "@/components/form/InputField";
import PasswordInputField from "@/components/form/PasswordInputField";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { FormikProvider } from "formik";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const LoginModal: React.FC<Props> = ({ isOpen, onClose, onSuccess }) => {
  const { formik, isLoading } = useLogin({ onSuccess });

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="w-[36.1875rem] overflow-hidden rounded-3xl bg-white shadow-[0px_0px_12px_0px_#00000026]">
        <DialogHeader>
          <DialogTitle className="font-medium text-left typography-sub-h3 text-primary-500">
            Log In to Awwwesome
          </DialogTitle>
          <p className="w-full max-w-sm mt-1 mb-4 text-grey-300 typography-paragraph-medium">
            Login to Awwwesome and collaborate with companies small to large
            around the world.
          </p>
        </DialogHeader>

        {/* Form */}
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Phone number or Email */}
            <InputField
              name="username"
              title="Email"
              placeholder="Enter your email"
              isRequired
              type="email"
            />

            {/* Password Field */}
            <PasswordInputField
              name="password"
              title="Password"
              placeholder="Password"
              isRequired
            />

            <div className="flex justify-end">
              <Link
                onClick={onClose}
                className="transition duration-300 ease-in-out typography-paragraph-medium text-grey-500 hover:text-primary-500 hover:underline"
                href="/#"
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
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </FormikProvider>

        {/* Social Media Login Options */}
        <div className="flex items-center gap-4">
          <hr className="border-grey-100 flex-grow border-t-[0.4px]" />
          <span className="text-sm text-black-200">Or</span>
          <hr className="border-grey-100 flex-grow border-t-[0.4px]" />
        </div>

        {/* Sign In Link */}
        <p className="pb-2 text-center typography-paragraph-medium">
          <span className="text-grey-300">Don’t have an account?</span>{" "}
          <button type="button" className="cursor-pointer text-primary-500">
            Sign Up
          </button>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
