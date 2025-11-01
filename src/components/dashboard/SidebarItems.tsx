import { BarChart3, Home, User, Users } from "lucide-react";
import { PATH } from "@/core/constants/path";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType;
  adminOnly?: boolean;
}

export const navigationItems: NavigationItem[] = [
  {
    name: "Dashboard",
    href: PATH.DASHBOARD_ROUTES.MAIN,
    icon: Home,
  },
  {
    name: "Users Table",
    href: PATH.DASHBOARD_ROUTES.USERS,
    icon: Users,
    adminOnly: true,
  },
  {
    name: "Chart Page",
    href: PATH.DASHBOARD_ROUTES.CHARTS,
    icon: BarChart3,
  },
  {
    name: "Profile Page",
    href: PATH.DASHBOARD_ROUTES.PROFILE,
    icon: User,
  },
];
