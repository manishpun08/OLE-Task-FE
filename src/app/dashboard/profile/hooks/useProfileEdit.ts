import { useState } from "react";
import type { ProfileData } from "../interface/profile.interface";

export const useProfileEdit = (initialData: ProfileData) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>(initialData);
  const [editData, setEditData] = useState<ProfileData>({ ...initialData });

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...profileData });
  };

  const handleSave = () => {
    setProfileData({ ...editData });
    setIsEditing(false);
    // Here you would typically save to an API
    return Promise.resolve(editData);
  };

  const handleCancel = () => {
    setEditData({ ...profileData });
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const updateProfileData = (newData: Partial<ProfileData>) => {
    setProfileData((prev) => ({ ...prev, ...newData }));
    if (!isEditing) {
      setEditData((prev) => ({ ...prev, ...newData }));
    }
  };

  return {
    isEditing,
    profileData,
    editData,
    handleEdit,
    handleSave,
    handleCancel,
    handleInputChange,
    updateProfileData,
  };
};
