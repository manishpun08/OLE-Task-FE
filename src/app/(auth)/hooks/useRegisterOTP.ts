import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import * as Yup from "yup";
import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import handleErrors, { type ApiResponse } from "@/helper/error-helper";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";

export interface IOtpFormValues {
  otp_code: string;
}

interface Props {
  onSuccess?: () => void;
}

export const useRegisterOTP = ({ onSuccess }: Props) => {
  const [postVerifyOTP, { isLoading: isVerifying }] = usePostDataMutation();

  const formik = useFormik<IOtpFormValues>({
    initialValues: { otp_code: "" },
    validationSchema: Yup.object({
      otp_code: Yup.string()
        .matches(/^\d{4}$/, "OTP must be exactly 4 digits")
        .required("OTP is required"),
    }),
    onSubmit: async (values) => {
      try {
        const user_email =
          typeof window !== "undefined"
            ? sessionStorage.getItem("user_email") || ""
            : "";

        const password =
          typeof window !== "undefined"
            ? sessionStorage.getItem("password") || ""
            : "";

        if (!user_email) {
          formik.setErrors({ otp_code: "Email is missing in session." });
          return;
        }

        const response = (await postVerifyOTP({
          url: endpoints.AUTH.SIGN_UP_VERIFY_OTP,
          data: {
            otp_code: values.otp_code,
            email: user_email,
          },
        })) as ApiResponse;
        if (response.error) {
          console.error("OTP verification error:", response.error);
          handleErrors(response, formik.setErrors);
          showErrorMessage(
            response.error.data.message || "OTP verification failed",
          );
          return;
        }

        if (response.data) {
          showSuccessMessage(response.data.message);
          onSuccess?.();
          sessionStorage.clear();
          formik.resetForm();

          // Auto sign-in after signup
          const signInResult = await signIn("credentials", {
            redirect: false,
            username: user_email,
            password,
          });

          if (signInResult?.ok) {
            formik.resetForm();
            sessionStorage.clear();
          }
        }
      } catch (error) {
        console.error("OTP verification failed:", error);
        formik.setErrors({ otp_code: "Verification failed" });
      }
    },
  });

  return {
    formik,
    isVerifying,
  };
};
