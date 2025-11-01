"use client";

import { Filter, RefreshCw, Search } from "lucide-react";
import ConfirmDialog from "@/components/ConfirmDialog";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useAuth } from "@/hooks/useAuth";
import { useUsers } from "./hooks/useUsers";
import UserDetailModal from "./partials/UserDetailModal";
import UserTable from "./partials/UserTable";

const UsersPage = () => {
  const { user } = useAuth();
  const {
    // State
    searchTerm,
    loading,
    selectedUser,
    showUserModal,
    showDeleteDialog,

    // Computed values
    currentUsers,
    currentPage,
    totalPages,
    filteredUsers,
    statistics,
    deleteConfirmationMessage,
    USERS_PER_PAGE,

    // Handlers
    handlePageChange,
    handleViewUser,
    handleDeleteUser,
    confirmDeleteUser,
    handleRefresh,
    handleCloseUserModal,
    handleCloseDeleteDialog,
    handleSearchChange,
  } = useUsers();

  if (!user) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <h3 className="text-lg font-medium text-red-800">Access Denied</h3>
            <p className="mt-1 text-red-600">
              You need to be logged in to access this page.
            </p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-full overflow-hidden p-4 sm:p-6">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-2xl font-bold text-gray-900 sm:text-3xl">
              Users Management
            </h1>
            <p className="text-sm text-gray-600 sm:text-base">
              Manage system users and their information
            </p>
          </div>
          <div className="flex flex-shrink-0 space-x-3">
            <button
              type="button"
              onClick={handleRefresh}
              className="flex items-center space-x-2 rounded-lg bg-gray-600 px-3 py-2 text-sm font-medium text-white transition duration-200 hover:bg-gray-700 sm:px-4 sm:text-base"
            >
              <RefreshCw className="h-4 w-4" />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        {!loading && (
          <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-3 shadow sm:p-4">
              <h3 className="mb-1 text-xs font-medium text-gray-900 sm:mb-2 sm:text-sm">
                Total Users
              </h3>
              <p className="text-lg font-bold text-blue-600 sm:text-2xl">
                {statistics.totalUsers}
              </p>
            </div>
            <div className="rounded-lg bg-white p-3 shadow sm:p-4">
              <h3 className="mb-1 text-xs font-medium text-gray-900 sm:mb-2 sm:text-sm">
                Filtered Results
              </h3>
              <p className="text-lg font-bold text-green-600 sm:text-2xl">
                {statistics.filteredCount}
              </p>
            </div>
            <div className="rounded-lg bg-white p-3 shadow sm:p-4">
              <h3 className="mb-1 text-xs font-medium text-gray-900 sm:mb-2 sm:text-sm">
                Companies
              </h3>
              <p className="text-lg font-bold text-purple-600 sm:text-2xl">
                {statistics.companiesCount}
              </p>
            </div>
            <div className="rounded-lg bg-white p-3 shadow sm:p-4">
              <h3 className="mb-1 text-xs font-medium text-gray-900 sm:mb-2 sm:text-sm">
                Current Page
              </h3>
              <p className="text-lg font-bold text-orange-600 sm:text-2xl">
                {statistics.currentPageDisplay}
              </p>
            </div>
          </div>
        )}

        {/* Search and Filter Bar */}
        <div className="mb-6 rounded-lg bg-white shadow">
          <div className="border-b border-gray-200 p-4">
            <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <div className="relative max-w-md flex-1">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-base"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="flex items-center space-x-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition duration-200 hover:bg-gray-200 sm:px-4 sm:text-base"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Results info */}
          <div className="bg-gray-50 px-4 py-2 text-xs text-gray-600 sm:text-sm">
            {loading ? (
              "Loading users..."
            ) : (
              <>
                Showing {filteredUsers.length} of {statistics.totalUsers} users
                {searchTerm && (
                  <span className="ml-2">(filtered by "{searchTerm}")</span>
                )}
              </>
            )}
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-hidden">
          <UserTable
            users={currentUsers}
            loading={loading}
            onView={handleViewUser}
            onDelete={handleDeleteUser}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            usersPerPage={USERS_PER_PAGE}
          />
        </div>

        {/* User Detail Modal */}
        <UserDetailModal
          user={selectedUser}
          isOpen={showUserModal}
          onClose={handleCloseUserModal}
        />

        {/* Delete Confirmation Dialog */}
        <ConfirmDialog
          isOpen={showDeleteDialog}
          onClose={handleCloseDeleteDialog}
          onConfirm={confirmDeleteUser}
          title="Delete User"
          message={deleteConfirmationMessage}
          confirmText="Delete"
          cancelText="Cancel"
          type="danger"
        />
      </div>
    </DashboardLayout>
  );
};

export default UsersPage;
