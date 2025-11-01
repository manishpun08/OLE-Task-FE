import { Edit2, Save, X } from "lucide-react";
import type { ProfileHeaderProps } from "../interface/profile.interface";

export const ProfileHeader = ({
  isEditing,
  onEdit,
  onSave,
  onCancel,
}: ProfileHeaderProps) => (
  <div className="flex justify-between items-center mb-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
      <p className="text-gray-600">Manage your account information</p>
    </div>
    {!isEditing ? (
      <button
        type="button"
        onClick={onEdit}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center space-x-2"
      >
        <Edit2 className="h-4 w-4" />
        <span>Edit Profile</span>
      </button>
    ) : (
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={onSave}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center space-x-2"
        >
          <Save className="h-4 w-4" />
          <span>Save</span>
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center space-x-2"
        >
          <X className="h-4 w-4" />
          <span>Cancel</span>
        </button>
      </div>
    )}
  </div>
);
