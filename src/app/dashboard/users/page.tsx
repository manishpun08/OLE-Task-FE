"use client";

import ConfirmDialog from "@/components/ConfirmDialog";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useAuth } from "@/hooks/useAuth";
import { Filter, RefreshCw, Search } from "lucide-react";
import UserTable from "./partials/UserTable";
import { useUsers } from "./hooks/useUsers";
import UserDetailModal from "./partials/UserDetailModal";

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
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-red-800">Access Denied</h3>
            <p className="text-red-600 mt-1">
              You need to be logged in to access this page.
            </p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 max-w-full overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 truncate">
              Users Management
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Manage system users and their information
            </p>
          </div>
          <div className="flex space-x-3 flex-shrink-0">
            <button
              type="button"
              onClick={handleRefresh}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-3 sm:px-4 rounded-lg transition duration-200 flex items-center space-x-2 text-sm sm:text-base"
            >
              <RefreshCw className="h-4 w-4" />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        {!loading && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900 mb-2">
                Total Users
              </h3>
              <p className="text-xl sm:text-3xl font-bold text-blue-600">
                {statistics.totalUsers}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900 mb-2">
                Filtered Results
              </h3>
              <p className="text-xl sm:text-3xl font-bold text-green-600">
                {statistics.filteredCount}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900 mb-2">
                Companies
              </h3>
              <p className="text-xl sm:text-3xl font-bold text-purple-600">
                {statistics.companiesCount}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900 mb-2">
                Current Page
              </h3>
              <p className="text-xl sm:text-3xl font-bold text-orange-600">
                {statistics.currentPageDisplay}
              </p>
            </div>
          </div>
        )}

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 sm:px-4 rounded-lg transition duration-200 flex items-center space-x-2 text-sm sm:text-base"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Results info */}
          <div className="px-4 py-2 bg-gray-50 text-xs sm:text-sm text-gray-600">
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
