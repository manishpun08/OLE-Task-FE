import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { useModal } from "@/core/context/ModalContext";
import handleErrors, { type ApiResponse } from "@/helper/error-helper";
import { RegisterAgentSchema } from "@/helper/validation";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";

interface IFormValues {
  full_name: string;
  agency_name: string;
  email: string;
  terms: boolean;
}

export const useRegisterAgent = ({ onSuccess }: { onSuccess: () => void }) => {
  const { openModal } = useModal();
  const [postSignUp, { isLoading }] = usePostDataMutation();

  const formik = useFormik<IFormValues>({
    initialValues: {
      full_name: "",
      agency_name: "",
      email: "",
      terms: false,
    },
    validationSchema: RegisterAgentSchema,
    onSubmit: async (values) => {
      try {
        if (!values.terms) return;
        const response = (await postSignUp({
          url: `${endpoints.AUTH.REGISTER}`,
          data: {
            ...values,
          },
        })) as ApiResponse;

        if (response.data) {
          showSuccessMessage(response.data.message);
          formik.resetForm();
          onSuccess();
          sessionStorage.setItem("user_email", values.email);
          openModal("otp-register-verify");
        }

        if (response.error) {
          handleErrors(response, formik.setErrors);
          showErrorMessage(response.error?.data?.message || "Signup failed");
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
