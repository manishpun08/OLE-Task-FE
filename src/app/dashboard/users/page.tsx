"use client";

import ConfirmDialog from "@/components/ConfirmDialog";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useAuth } from "@/hooks/useAuth";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";
import { Filter, RefreshCw, Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { User } from "./interface/user.interface";
import UserDetailModal from "./partials/UserDetailModal";
import UserTable from "./partials/UserTable";

const USERS_PER_PAGE = 5;

const UsersPage = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch users from API
  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const userData: User[] = await response.json();
      setUsers(userData);
    } catch (error) {
      console.error("Error fetching users:", error);
      showErrorMessage("Failed to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

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

  // Filter users based on search term
  const filteredUsers = users.filter(
    (userData) =>
      userData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      userData.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      userData.company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      userData.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle view user
  const handleViewUser = (userData: User) => {
    setSelectedUser(userData);
    setShowUserModal(true);
  };

  // Handle delete user
  const handleDeleteUser = (userId: number) => {
    setUserToDelete(userId);
    setShowDeleteDialog(true);
  };

  // Confirm delete user
  const confirmDeleteUser = async () => {
    if (userToDelete === null) return;

    try {
      // In a real app, you would make an API call to delete the user
      // For demo purposes, we'll just remove it from the local state

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== userToDelete));
      showSuccessMessage("User deleted successfully");

      // Reset page if current page becomes empty
      const newFilteredUsers = users
        .filter((u) => u.id !== userToDelete)
        .filter(
          (userData) =>
            userData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            userData.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            userData.company.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            userData.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const newTotalPages = Math.ceil(newFilteredUsers.length / USERS_PER_PAGE);
      if (currentPage > newTotalPages && newTotalPages > 0) {
        setCurrentPage(newTotalPages);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      showErrorMessage("Failed to delete user. Please try again.");
    } finally {
      setShowDeleteDialog(false);
      setUserToDelete(null);
    }
  };

  // Handle refresh
  const handleRefresh = () => {
    setCurrentPage(1);
    setSearchTerm("");
    fetchUsers();
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Users Management
            </h1>
            <p className="text-gray-600">
              Manage system users and their information
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={handleRefresh}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center space-x-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Refresh</span>
            </button>
            {/* <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center space-x-2"
            >
              <UserPlus className="h-4 w-4" />
              <span>Add User</span>
            </button> */}
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search users by name, email, company..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center space-x-2"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Results info */}
          <div className="px-4 py-2 bg-gray-50 text-sm text-gray-600">
            {loading ? (
              "Loading users..."
            ) : (
              <>
                Showing {filteredUsers.length} of {users.length} users
                {searchTerm && (
                  <span className="ml-2">(filtered by "{searchTerm}")</span>
                )}
              </>
            )}
          </div>
        </div>

        {/* Users Table */}
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

        {/* Summary Stats */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Total Users
              </h3>
              <p className="text-3xl font-bold text-blue-600">{users.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Filtered Results
              </h3>
              <p className="text-3xl font-bold text-green-600">
                {filteredUsers.length}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Companies
              </h3>
              <p className="text-3xl font-bold text-purple-600">
                {new Set(users.map((u) => u.company.name)).size}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Current Page
              </h3>
              <p className="text-3xl font-bold text-orange-600">
                {currentPage} of {totalPages}
              </p>
            </div>
          </div>
        )}

        {/* User Detail Modal */}
        <UserDetailModal
          user={selectedUser}
          isOpen={showUserModal}
          onClose={() => {
            setShowUserModal(false);
            setSelectedUser(null);
          }}
        />

        {/* Delete Confirmation Dialog */}
        <ConfirmDialog
          isOpen={showDeleteDialog}
          onClose={() => {
            setShowDeleteDialog(false);
            setUserToDelete(null);
          }}
          onConfirm={confirmDeleteUser}
          title="Delete User"
          message={
            userToDelete
              ? `Are you sure you want to delete "${users.find((u) => u.id === userToDelete)?.name}"? This action cannot be undone.`
              : "Are you sure you want to delete this user? This action cannot be undone."
          }
          confirmText="Delete"
          cancelText="Cancel"
          type="danger"
        />
      </div>
    </DashboardLayout>
  );
};

export default UsersPage;
