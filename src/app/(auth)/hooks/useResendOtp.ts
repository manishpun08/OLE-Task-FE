import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import type { ApiResponse } from "@/helper/error-helper";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";

export const useResendOtp = () => {
  const user_email =
    typeof window !== "undefined"
      ? sessionStorage.getItem("user_email") || ""
      : "";

  const [postResendOTP, { isLoading }] = usePostDataMutation();

  const resendOtp = async (onSuccess?: () => void) => {
    try {
      const response = (await postResendOTP({
        url: endpoints.AUTH.RESEND_OTP,
        data: {
          email: user_email,
        },
      })) as ApiResponse;

      if (response.data) {
        showSuccessMessage(response.data.message);
        onSuccess?.(); // Start timer after successful OTP
      } else if (response.error) {
        console.error("Resend OTP error:", response.error);
        showErrorMessage(
          response.error.data.message || "Failed to resend OTP.",
        );
      }
    } catch (error) {
      console.error("Resend OTP failed:", error);
      showErrorMessage("Failed to resend OTP.");
    }
  };

  return {
    resendOtp,
    isResending: isLoading,
  };
};
