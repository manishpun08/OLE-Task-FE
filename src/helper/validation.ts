import * as Yup from "yup";

export const LoginByPasswordSchema = Yup.object({
  username: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
