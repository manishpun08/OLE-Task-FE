import * as Yup from "yup";

export const LoginByPasswordSchema = Yup.object({
  username: Yup.string()
    .required("Email or Phone number is required")
    .test(
      "is-valid-email-or-phone",
      "Enter a valid email or phone number",
      (value) => {
        if (!value) return false;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9+\-() ]{6,}$/;

        return emailRegex.test(value) || phoneRegex.test(value);
      },
    ),
  password: Yup.string().required("Password is required"),
});

export const RegisterAgentSchema = Yup.object({
  full_name: Yup.string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters"),

  agency_name: Yup.string().required("Agency name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  terms: Yup.boolean()
    .oneOf([true], "You must accept terms & conditions")
    .required(),
});

export const SellerRegisterSchema = Yup.object({
  first_name: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),

  middle_name: Yup.string(),

  last_name: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),

  gender: Yup.string()
    .required("Gender is required")
    .oneOf(["M", "F", "O"], "Please select a valid gender"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Include one special character"),

  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),

  referral_code: Yup.string().optional(),
});

export const SignUpByPhoneSchema = Yup.object({
  phone_no: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  referral_code: Yup.string().optional(),
});

export const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Current password is required"),

  newPassword: Yup.string()
    .required("New password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character",
    ),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});
