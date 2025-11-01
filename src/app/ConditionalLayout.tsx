"use client";

import { usePathname } from "next/navigation";
import Footer from "@/common/Footer";
import Header from "@/common/Header";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

const ConditionalLayout = ({ children }: ConditionalLayoutProps) => {
  const pathname = usePathname();

  // Routes that should not show header and footer
  const routesWithoutHeaderFooter = ["/dashboard"];

  const shouldShowHeaderFooter = !routesWithoutHeaderFooter.some((route) =>
    pathname.startsWith(route)
  );

  if (shouldShowHeaderFooter) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    );
  }

  return <>{children}</>;
};

export default ConditionalLayout;
