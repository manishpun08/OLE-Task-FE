import { PATH } from "@/core/constants/path";

export const footerData = {
  quickLinks: [
    {
      name: "Privacy Policy",
      link: PATH.HOME,
    },
    {
      name: "Terms & Conditions",
      link: PATH.HOW_IT_WORKS,
    },
    {
      name: "Contact Sales",
      link: PATH.CONTACT,
    },
  ],

  importantLinks: [
    {
      name: "How it Works",
      link: `${PATH.CONTACT}#construction-workers`,
    },
    { name: "Pricing", link: `${PATH.CONTACT}#healthcare-staff` },

    { name: "FAQs", link: `${PATH.CONTACT}#security-guard` },
    {
      name: "Blogs",
      link: `${PATH.CONTACT}#technical-specialist`,
    },
  ],
};
