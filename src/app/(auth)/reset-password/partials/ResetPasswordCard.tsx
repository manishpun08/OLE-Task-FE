"use client";

import { FormikProvider } from "formik";
import { useVerifyOTP } from "@/app/(auth)/hooks/useForgotPassword";
import PasswordInputField from "@/components/form/PasswordInputField";

const ResetPasswordCard = () => {
  const { formik, isVerifying } = useVerifyOTP();

  return (
    <div className="my-20 flex h-90 items-center justify-center">
      <div className="w-full !max-w-[34rem] overflow-hidden rounded-3xl bg-white p-8 shadow-[0px_0px_12px_0px_#00000026]">
        <h2 className="border-primary-500 flex items-center justify-between border-b-[0.6px] pb-4 text-xl font-semibold">
          Reset Your Password
        </h2>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className="space-y-5 pt-2">
            <PasswordInputField
              name="new_password"
              title="New Password"
              placeholder="Enter New Password"
            />

            <PasswordInputField
              name="confirm_password"
              title="Confirm Password"
              placeholder="Enter Confirm Password"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isVerifying}
              className={`bg-primary-500 hover:bg-primary-700 typography-paragraph-large w-full cursor-pointer rounded-[8px] py-2 font-medium !text-white transition duration-300 ease-in-out lg:px-5 lg:py-2.5 ${
                isVerifying ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {isVerifying ? "Verifying..." : "Verify"}
            </button>

            {/* Resend OTP Link */}
            {/* <div className="text-center typography-paragraph-small pb-4">
            Did not received the code ?{" "}
            <button
              type="button"
              onClick={resendOtp}
              disabled={isResending}
              className=" text-purple-500 disabled:opacity-50 cursor-pointer"
            >
              {isResending ? "Resending..." : "Resend OTP"}
            </button>
          </div> */}
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default ResetPasswordCard;
