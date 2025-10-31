"use client";
import { FormikProvider } from "formik";
import { useForgotPassword } from "@/app/(auth)/hooks/useForgotPassword";
import InputField from "@/components/form/InputField";

const ForgotPasswordCard = () => {
  const { formik, isLoading } = useForgotPassword();

  return (
    <div className="flex h-90 items-center justify-center">
      <div className="w-full !max-w-[34rem] overflow-hidden rounded-3xl bg-white p-8 shadow-[0px_0px_12px_0px_#00000026]">
        {/* Header */}
        <h2 className="border-primary-500 flex items-center justify-between border-b-[0.6px] pb-4 text-xl font-semibold">
          Forget Password
        </h2>

        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className="space-y-5 pt-2">
            <InputField
              name="email"
              title="Email"
              type="email"
              placeholder="Enter your email"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-primary-500 hover:bg-primary-700 typography-paragraph-large w-full cursor-pointer rounded-[8px] py-2 font-medium !text-white transition duration-300 ease-in-out lg:px-5 lg:py-2.5 ${
                isLoading ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default ForgotPasswordCard;
