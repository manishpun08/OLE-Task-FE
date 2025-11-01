"use client";

import { useAuth } from "@/hooks/useAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import type { ProfileData } from "./interface/profile.interface";
import { useProfileEdit } from "./hooks/useProfileEdit";
import { ProfileHeader, ProfileCard, ProfileSidebar } from "./partials";

const ProfilePage = () => {
  const { user } = useAuth();

  const initialProfileData: ProfileData = {
    name: user?.role || "User",
    email: user?.email || "email@example.com",
    role: user?.role || "user",
    joinDate: "2024-01-15",
    lastLogin: "2024-11-01",
  };

  const {
    isEditing,
    profileData,
    editData,
    handleEdit,
    handleSave,
    handleCancel,
    handleInputChange,
  } = useProfileEdit(initialProfileData);

  return (
    <DashboardLayout>
      <div className="p-6">
        <ProfileHeader
          isEditing={isEditing}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ProfileCard
            isEditing={isEditing}
            profileData={profileData}
            editData={editData}
            onInputChange={handleInputChange}
          />
          <ProfileSidebar />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
