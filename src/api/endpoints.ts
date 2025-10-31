export const endpoints = {
  AUTH: {
    REGISTER: "/user/register",
    SIGN_UP_VERIFY_OTP: "/user/verify-register-otp/",
    SIGN_IN_GOOGLE: "/user/auth/google/login/",

    LOGIN: "/user/login",
    LOGIN_BY_OTP: "/user/otp-login/",
    LOGIN_BY_PASSWORD: "/user/login-password/",

    VERIFY_OTP: "/user/verify-otp/",
    RESEND_OTP: "/user/resend-otp/",

    REFRESH_TOKEN: "/user/token/refresh/",
    FORGET_PASSWORD: "/user/forgot/password",
    FORGET_OTP_VERIFY: "/user/verify/forgot/password",
    RESET_PASSWORD: "/user/reset/password",
    CHANGE_PASSWORD: "/user/change/password",
  },

  REVIEW: "/review/all/",

  ORGANIZATION: {
    NEWSLETTER: "/subscription/create/",
  },

  BLOG: {
    comment: "/blog",
  },
};

export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
