"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-600 sm:text-base">
            Welcome back, {user?.email}
          </p>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* User Info Card */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="mb-4 text-base font-medium text-gray-900 sm:text-lg">
                User Information
              </h3>
              <dl className="space-y-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="text-sm break-words text-gray-900">
                    {user?.email}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Role</dt>
                  <dd className="text-sm text-gray-900 capitalize">
                    {user?.role}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="text-sm text-green-600">Active</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Role-based Content */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="mb-4 text-base font-medium text-gray-900 sm:text-lg">
                {user?.role === "admin" ? "Admin Panel" : "Viewer Dashboard"}
              </h3>
              <p className="text-sm text-gray-600">
                {user?.role === "admin"
                  ? "You have full administrative access to all features and settings."
                  : "You have view-only access to the system."}
              </p>
              <div className="mt-4">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    user?.role === "admin"
                      ? "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {user?.role === "admin" ? "Administrator" : "Viewer"}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="overflow-hidden rounded-lg bg-white shadow md:col-span-2 xl:col-span-1">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="mb-4 text-base font-medium text-gray-900 sm:text-lg">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Active Sessions</span>
                  <span className="text-sm font-medium text-gray-900">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Login</span>
                  <span className="text-sm font-medium text-gray-900">
                    Today
                  </span>
                </div>
                {user?.role === "admin" && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Users</span>
                    <span className="text-sm font-medium text-gray-900">
                      --
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content based on role */}
        {user?.role === "admin" && (
          <div className="mt-6 sm:mt-8">
            <div className="rounded-lg bg-white shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="mb-4 text-base font-medium text-gray-900 sm:text-lg">
                  Admin Actions
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Quick access to administrative functions.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                  <button
                    type="button"
                    className="rounded-lg bg-blue-50 px-4 py-3 text-center text-sm font-medium text-blue-700 transition duration-200 hover:bg-blue-100"
                  >
                    Manage Users
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700 transition duration-200 hover:bg-green-100"
                  >
                    View Reports
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-purple-50 px-4 py-3 text-center text-sm font-medium text-purple-700 transition duration-200 hover:bg-purple-100"
                  >
                    System Settings
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-orange-50 px-4 py-3 text-center text-sm font-medium text-orange-700 transition duration-200 hover:bg-orange-100"
                  >
                    Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
