"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { PATH } from "@/core/constants/path";
import { useAuth } from "@/hooks/useAuth";
import CustomLoader from "../CustomLoader";
import { Menu, X } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const { isAuthenticated, isLoading, user } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(PATH.HOME);
    }
  }, [isAuthenticated, isLoading, router]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeMobileSidebar = () => {
    setSidebarOpen(false);
  };

  if (isLoading) {
    return <CustomLoader />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 lg:hidden">
        <button
          type="button"
          onClick={toggleMobileSidebar}
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        >
          {sidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
          <span className="text-sm font-medium text-blue-600">
            {user?.email?.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <button
          type="button"
          className="bg-opacity-50 fixed inset-0 z-40 cursor-pointer bg-black/60 lg:hidden"
          onClick={closeMobileSidebar}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              closeMobileSidebar();
            }
          }}
          aria-label="Close sidebar"
        />
      )}

      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
        isOpen={sidebarOpen}
        onClose={closeMobileSidebar}
      />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          sidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
        } ml-0`}
      >
        <main className="h-full overflow-auto pt-16 lg:pt-0">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
