import type { FormikProps } from "formik";
import { ShieldAlert } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import type { IOtpFormValues } from "@/app/(auth)/hooks/useRegisterOTP";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";

interface IProps {
  formik: FormikProps<IOtpFormValues>;
  isVerifying: boolean;
  resendOtp?: (onSuccess?: () => void) => void;
  isResending?: boolean;
}

const OTPForm: React.FC<IProps> = ({
  formik,
  isVerifying,
  resendOtp,
  isResending,
}) => {
  // const phone_no =
  //   typeof window !== "undefined"
  //     ? sessionStorage.getItem("user_phone") || ""
  //     : "";

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    resendOtp?.(() => {
      setTimer(120);
    });
  };

  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <p className="typography-paragraph-small text-grey-400 text-center">
        Use the OTP below to verify your account:
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-2 flex justify-center">
          <InputOTP
            maxLength={4}
            name="otp"
            value={formik.values.otp_code}
            onChange={(value) => formik.setFieldValue("otp_code", value)}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className="data-[active=true]:border-b-primary-500 h-16 w-16 border-t-0 border-r-0 border-l-0 p-0 text-5xl font-medium shadow-none ring-0 first:rounded-l-none first:rounded-r-none first:border-l-0 last:rounded-r-none data-[active=true]:ring-0"
              />
            ))}
          </InputOTP>
        </div>
        {formik.touched.otp_code && formik.errors.otp_code && (
          <p className="text-error typography-paragraph-small items-center text-center">
            {formik.errors.otp_code}
          </p>
        )}

        {/* Resend OTP */}
        <div className="typography-paragraph-small text-grey-300 my-4 text-center">
          Didn't receive the code?{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={isResending || timer > 0}
            className="text-secondary-500 cursor-pointer disabled:opacity-50"
          >
            {timer > 0
              ? `Resend in ${formatTime(timer)}`
              : isResending
                ? "Resending..."
                : "Send Again"}
          </button>
        </div>

        <div className="flex items-start justify-center gap-4">
          <ShieldAlert className="size-8" />
          <p className="typography-paragraph-extra-small text-primary-500 mb-4 w-full max-w-xs font-normal">
            Your privacy is important We may send you member updates, recruiter
            messages, job suggestions, invitations, reminders and promotional
            messages from us and our partners. You can change
            your preferences anytime.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isVerifying}
          className={`bg-primary-500 hover:bg-primary-700 typography-paragraph-large mt-3.5 w-full cursor-pointer rounded-[8px] py-2 font-medium !text-white transition duration-300 ease-in-out lg:mt-2 lg:px-5 lg:py-2.5 ${
            isVerifying ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {isVerifying ? "Verifying..." : "Verify"}
        </button>
      </form>
    </>
  );
};

export default OTPForm;
