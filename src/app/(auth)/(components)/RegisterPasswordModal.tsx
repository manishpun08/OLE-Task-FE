"use client";
import { DialogTitle } from "@radix-ui/react-dialog";
import { FormikProvider } from "formik";
import PasswordInputField from "@/components/form/PasswordInputField";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useModal } from "@/core/context/ModalContext";
import { useRegisterAgent } from "../hooks/useRegisterAgent";
import GoogleLoginButton from "./GoogleLoginButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const RegisterPasswordModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const { openModal } = useModal();

  const { formik, isLoading } = useRegisterAgent({ onSuccess });

  const handleSwitchModal = () => {
    onClose();
    setTimeout(() => openModal("login"), 100);
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
            Set up your Password
          </DialogTitle>
          <p className="text-grey-300 typography-paragraph-medium mt-1 mb-4 w-full">
            Set up your account to access jobs, insights, and search tools.
          </p>
        </DialogHeader>

        {/* Form */}
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Password and Confirm Password */}

            <PasswordInputField
              name="password"
              title="Password"
              placeholder="Password"
              isRequired={false}
            />

            <PasswordInputField
              name="confirm_password"
              title="Confirm password"
              placeholder="Confirm password"
              isRequired={false}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !formik.values.terms}
              className={`bg-primary-500 hover:bg-primary-700 typography-paragraph-large mt-4 w-full cursor-pointer rounded-[8px] py-2 font-medium !text-white transition duration-300 ease-in-out lg:px-5 lg:py-2.5 ${
                isLoading || !formik.values.terms
                  ? "cursor-not-allowed opacity-50"
                  : ""
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
          <span className="text-grey-300">Already have an account?</span>{" "}
          <button
            type="button"
            className="text-primary-500 cursor-pointer"
            onClick={handleSwitchModal}
          >
            Login Now
          </button>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterPasswordModal;
