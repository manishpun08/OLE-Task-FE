import { useFormik } from "formik";
import * as Yup from "yup";
import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import handleErrors, { type ApiResponse } from "@/helper/error-helper";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";

interface NewsletterValues {
  email: string;
}

export const useNewsletter = () => {
  const [postSubscribe, { isLoading }] = usePostDataMutation();

  const formik = useFormik<NewsletterValues>({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = (await postSubscribe({
          url: `${endpoints.ORGANIZATION.NEWSLETTER}`,
          data: values,
        })) as ApiResponse;

        if (response?.error) {
          handleErrors(response, formik.setErrors);
          showErrorMessage(
            response.error?.data?.message || "Subscription failed",
          );

          return;
        }

        if (response.data) {
          showSuccessMessage(response.data.message);
          resetForm();
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return {
    formik,
    isLoading,
  };
};
