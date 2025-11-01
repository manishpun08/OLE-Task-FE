import { Edit2, Save, X } from "lucide-react";
import type { ProfileHeaderProps } from "../interface/profile.interface";

export const ProfileHeader = ({
  isEditing,
  onEdit,
  onSave,
  onCancel,
}: ProfileHeaderProps) => (
  <div className="mb-6 flex items-center justify-between">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
      <p className="text-gray-600">Manage your account information</p>
    </div>
    {!isEditing ? (
      <button
        type="button"
        onClick={onEdit}
        className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition duration-200 hover:bg-blue-700"
      >
        <Edit2 className="h-4 w-4" />
        <span>Edit </span>
      </button>
    ) : (
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={onSave}
          className="flex items-center space-x-2 rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition duration-200 hover:bg-green-700"
        >
          <Save className="h-4 w-4" />
          <span>Save</span>
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center space-x-2 rounded-lg bg-gray-600 px-4 py-2 font-medium text-white transition duration-200 hover:bg-gray-700"
        >
          <X className="h-4 w-4" />
          <span>Cancel</span>
        </button>
      </div>
    )}
  </div>
);
