"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { useModal } from "@/core/context/ModalContext";
import handleErrors, { type ApiResponse } from "@/helper/error-helper";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";

interface IFormValuesForgotPassword {
  email: string;
}

interface IFormValuesOtpVerify {
  otp_code: string;
  email?: string;
  new_password: string;
  confirm_password?: string;
}

export const useForgotPassword = () => {
  const [sendOpt] = usePostDataMutation();

  const formik = useFormik<IFormValuesForgotPassword>({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { setErrors, resetForm }) => {
      try {
        const result = (await sendOpt({
          url: endpoints.AUTH.FORGET_PASSWORD,
          data: { email: values.email },
        })) as ApiResponse;

        if (result?.error) {
          showErrorMessage(
            result.error.data.message || "Failed to send password reset email.",
          );
          handleErrors(result as ApiResponse, setErrors);
          setErrors({ email: "Invalid email or account not found" });
          return;
        }

        if (result?.data) {
          showSuccessMessage("Password reset email sent!");
          sessionStorage.setItem("user_email", values.email);
          resetForm();
          window.location.href = "/reset-password";
        } else {
          setErrors({ email: "An unexpected error occurred" });
        }
      } catch (error) {
        console.error("Forgot Password error:", error);
        setErrors({
          email: "Something went wrong. Please try again later.",
        });
      }
    },
  });

  return {
    formik,
    isLoading: formik.isSubmitting,
  };
};

export const useVerifyOTP = () => {
  const { openModal } = useModal();

  const [postVerifyOTP, { isLoading: isVerifying }] = usePostDataMutation();

  const formik = useFormik<IFormValuesOtpVerify>({
    initialValues: { otp_code: "", new_password: "" },
    validationSchema: Yup.object({
      otp_code: Yup.string()
        .matches(/^\d{6}$/, "OTP must be exactly 6 digits")
        .required("OTP is required"),
      new_password: Yup.string()
        .required("New Password is required")
        .min(6, "Password must be at least 6 characters")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Include one special character"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("new_password")], "Passwords must match")
        .required("Confirm password is required"),
    }),

    onSubmit: async (values) => {
      const user_email =
        typeof window !== "undefined"
          ? sessionStorage.getItem("user_email") || ""
          : "";

      if (!user_email) {
        formik.setErrors({ otp_code: "Email is missing in session." });
        return;
      }

      try {
        const response = (await postVerifyOTP({
          url: endpoints.AUTH.FORGET_OTP_VERIFY,
          data: {
            otp_code: values.otp_code,
            new_password: values.new_password,
            email: user_email,
          },
        })) as ApiResponse;

        if (response.error) {
          showErrorMessage(
            response.error.data.message || "Verification failed",
          );
          handleErrors(response as ApiResponse, formik.setErrors);
          return;
        }

        if (response.data) {
          showSuccessMessage(response.data.message);
          formik.resetForm();
          window.location.href = "/";
          openModal("login");
        } else {
          formik.setErrors({ otp_code: "Invalid OTP" });
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
