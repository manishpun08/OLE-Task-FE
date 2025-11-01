import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard || Awwwesome",
  description:
    "Dashboard - Manage your account and access your personalized content.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
}
