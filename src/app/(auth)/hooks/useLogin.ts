"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { LoginByPasswordSchema } from "@/helper/validation";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";
import { PATH } from "@/core/constants/path";

interface IFormValues {
  username: string;
  password: string;
}

// Mock credentials
const MOCK_CREDENTIALS = [
  {
    email: "admin@example.com",
    password: "password123",
    role: "admin",
    token: "mock-admin-token-123",
  },
  {
    email: "viewer@example.com",
    password: "password123",
    role: "viewer",
    token: "mock-viewer-token-456",
  },
];

export const useLogin = ({ onSuccess }: { onSuccess: () => void }) => {
  const router = useRouter();

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
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Check mock credentials
        const user = MOCK_CREDENTIALS.find(
          (cred) =>
            cred.email === values.username && cred.password === values.password,
        );

        if (user) {
          // Store user info in localStorage
          const userInfo = {
            email: user.email,
            role: user.role,
            token: user.token,
          };

          localStorage.setItem("userInfo", JSON.stringify(userInfo));

          showSuccessMessage(`Welcome back! Logged in as ${user.role}.`);

          // Reset form and close modal
          formik.resetForm();
          onSuccess();

          // Redirect to dashboard
          router.push(PATH.DASHBOARD);
        } else {
          showErrorMessage("Invalid email or password. Please try again.");
          formik.setErrors({
            password: "Invalid credentials",
          });
        }
      } catch (error) {
        console.error("Login error:", error);
        showErrorMessage("An error occurred during login. Please try again.");
      }
    },
  });

  return {
    formik,
    isLoading: formik.isSubmitting,
  };
};
