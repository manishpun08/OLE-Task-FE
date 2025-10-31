"use client";

import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import handleErrors, { type ApiResponse } from "@/helper/error-helper";
import { LoginByPasswordSchema } from "@/helper/validation";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";

interface IFormValues {
  username: string;
  password: string;
}

export const useLogin = ({ onSuccess }: { onSuccess: () => void }) => {
  const [postSignUp, { isLoading }] = usePostDataMutation();

  const formik = useFormik<IFormValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginByPasswordSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      try {
        const response = (await postSignUp({
          url: `${endpoints.AUTH.LOGIN_BY_PASSWORD}`,
          data: {
            ...values,
          },
        })) as ApiResponse;

        if (response.error) {
          console.error("Signup error:", response.error);
          handleErrors(response as ApiResponse, formik.setErrors);
          showErrorMessage(response.error.data.message);
        }

        if (response.data) {
          showSuccessMessage(response.data.message);

          //sign-in
          const signInResult = await signIn("credentials", {
            redirect: false,
            username: values.username,
            password: values.password,
          });

          if (signInResult?.ok) {
            formik.resetForm();
            onSuccess();
          } else {
            console.error("Auto sign-in failed:", signInResult?.error);
            formik.setErrors({
              password: "Auto sign-in failed. Please try logging in manually.",
            });
          }
        } else {
          console.warn(
            "Unexpected response status:",
            response.error.data.message,
          );
        }
      } catch (error) {
        console.error("Failed to submit signup form:", error);
      }
    },
  });

  return {
    formik,
    isLoading,
  };
};
