import { useState, useEffect, useCallback, useMemo } from "react";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";
import type { User } from "../interface/user.interface";

const USERS_PER_PAGE = 5;

export const useUsers = () => {
  // State management
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
        "https://jsonplaceholder.typicode.com/users",
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

  // Filter users based on search term
  const filteredUsers = useMemo(() => {
    return users.filter(
      (userData) =>
        userData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        userData.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        userData.company.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        userData.username.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [users, searchTerm]);

  // Pagination logic
  const paginationData = useMemo(() => {
    const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
    const startIndex = (currentPage - 1) * USERS_PER_PAGE;
    const endIndex = startIndex + USERS_PER_PAGE;
    const currentUsers = filteredUsers.slice(startIndex, endIndex);

    return {
      totalPages,
      currentUsers,
      startIndex,
      endIndex,
    };
  }, [filteredUsers, currentPage]);

  // Statistics
  const statistics = useMemo(() => {
    const totalUsers = users.length;
    const filteredCount = filteredUsers.length;
    const companiesCount = new Set(users.map((u) => u.company.name)).size;
    const currentPageDisplay = `${currentPage} of ${paginationData.totalPages}`;

    return {
      totalUsers,
      filteredCount,
      companiesCount,
      currentPageDisplay,
    };
  }, [users, filteredUsers, currentPage, paginationData.totalPages]);

  // Effects
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Handlers
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleViewUser = useCallback((userData: User) => {
    setSelectedUser(userData);
    setShowUserModal(true);
  }, []);

  const handleDeleteUser = useCallback((userId: number) => {
    setUserToDelete(userId);
    setShowDeleteDialog(true);
  }, []);

  const confirmDeleteUser = useCallback(async () => {
    if (userToDelete === null) return;

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== userToDelete));
      showSuccessMessage("User deleted successfully");

      const newFilteredUsers = users
        .filter((u) => u.id !== userToDelete)
        .filter(
          (userData) =>
            userData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            userData.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            userData.company.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            userData.username.toLowerCase().includes(searchTerm.toLowerCase()),
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
  }, [userToDelete, users, searchTerm, currentPage]);

  const handleRefresh = useCallback(() => {
    setCurrentPage(1);
    setSearchTerm("");
    fetchUsers();
  }, [fetchUsers]);

  const handleCloseUserModal = useCallback(() => {
    setShowUserModal(false);
    setSelectedUser(null);
  }, []);

  const handleCloseDeleteDialog = useCallback(() => {
    setShowDeleteDialog(false);
    setUserToDelete(null);
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  // Get delete confirmation message
  const deleteConfirmationMessage = useMemo(() => {
    if (userToDelete) {
      const user = users.find((u) => u.id === userToDelete);
      return user
        ? `Are you sure you want to delete "${user.name}"? This action cannot be undone.`
        : "Are you sure you want to delete this user? This action cannot be undone.";
    }
    return "Are you sure you want to delete this user? This action cannot be undone.";
  }, [userToDelete, users]);

  return {
    // State
    searchTerm,
    users,
    loading,
    selectedUser,
    showUserModal,
    showDeleteDialog,
    userToDelete,
    currentPage,
    filteredUsers,

    // Computed values
    ...paginationData,
    statistics,
    deleteConfirmationMessage,

    // Constants
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
  };
};
