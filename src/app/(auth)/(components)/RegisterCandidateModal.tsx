"use client";
import { DialogTitle } from "@radix-ui/react-dialog";
import { FormikProvider } from "formik";
import InputField from "@/components/form/InputField";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useModal } from "@/core/context/ModalContext";
import { useRegisterAgent } from "../hooks/useRegisterAgent";
import GoogleLoginButton from "./GoogleLoginButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const RegisterCandidateModal: React.FC<Props> = ({
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
            Register to Find Jobs
          </DialogTitle>
          <p className="text-grey-300 typography-paragraph-medium mt-1 mb-4 w-full max-w-sm">
            Register to find jobs and get personalized career recommendations.
          </p>
        </DialogHeader>

        {/* Form */}
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Full Name */}

            <InputField
              name="full_name"
              title="Full Name"
              placeholder="Enter your full name"
              isRequired={false}
            />

            {/* Email */}
            <InputField
              name="email"
              title="Email"
              type="email"
              placeholder="Enter your email"
              isRequired={false}
            />

            <div className="my-2 flex items-center gap-2">
              <Checkbox
                id="terms"
                name="terms"
                checked={formik.values.terms}
                onCheckedChange={(checked) => {
                  formik.setFieldValue("terms", checked);
                }}
                className="data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500 border-grey-50"
              />

              <Label
                htmlFor="terms"
                className="typography-paragraph-medium text-grey-400 cursor-pointer"
              >
                I have read and agree to the{" "}
                <span className="text-secondary-500">Terms</span> of Service
              </Label>
            </div>
            {formik.touched.terms && formik.errors.terms && (
              <p className="text-error typography-paragraph-small pl-4">
                {formik.errors.terms}
              </p>
            )}

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

export default RegisterCandidateModal;
