import { User } from "lucide-react";
import type { ProfileAvatarProps } from "../interface/profile.interface";

export const ProfileAvatar = ({
  isEditing,
  profileData,
  editData,
  onInputChange,
}: ProfileAvatarProps) => (
  <div className="p-6 border-b border-gray-200">
    <div className="flex items-center space-x-4">
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
        <User className="h-10 w-10 text-blue-600" />
      </div>
      <div className="flex-1">
        {isEditing ? (
          <input
            type="text"
            value={editData.name}
            onChange={(e) => onInputChange("name", e.target.value)}
            className="text-2xl font-bold text-gray-900 border border-gray-300 rounded px-2 py-1 w-full"
            placeholder="Display Name"
          />
        ) : (
          <h2 className="text-2xl font-bold text-gray-900">
            {profileData.name}
          </h2>
        )}
        <p className="text-gray-600 capitalize">{profileData.role}</p>
      </div>
    </div>
  </div>
);
