"use client";
import { DialogTitle } from "@radix-ui/react-dialog";
import type React from "react";
import { useRegisterOTP } from "@/app/(auth)/hooks/useRegisterOTP";
import { useResendOtp } from "@/app/(auth)/hooks/useResendOtp";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import OTPForm from "./OTPForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const OtpRegisterVerifyModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const { formik, isVerifying } = useRegisterOTP({ onSuccess });
  const { resendOtp, isResending } = useResendOtp();

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
            Verify your OTP
          </DialogTitle>
          <p className="text-grey-300 typography-paragraph-medium mt-1 mb-4 w-full max-w-sm">
            Enter the verification code sent to your email address.
          </p>
        </DialogHeader>

        <OTPForm
          formik={formik}
          isVerifying={isVerifying}
          resendOtp={resendOtp}
          isResending={isResending}
        />
      </DialogContent>
    </Dialog>
  );
};

export default OtpRegisterVerifyModal;
