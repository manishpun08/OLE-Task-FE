import { Mail, Shield, Calendar } from "lucide-react";
import type { ProfileDetailsProps } from "../interface/profile.interface";

export const ProfileDetails = ({
  isEditing,
  profileData,
  editData,
  onInputChange,
}: ProfileDetailsProps) => (
  <div className="p-6 space-y-6">
    <div>
      <div className="block text-sm font-medium text-gray-700 mb-2">
        Email Address
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="h-5 w-5 text-gray-400" />
        {isEditing ? (
          <input
            type="email"
            value={editData.email}
            onChange={(e) => onInputChange("email", e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2"
            placeholder="Email address"
          />
        ) : (
          <span className="text-gray-900">{profileData.email}</span>
        )}
      </div>
    </div>

    <div>
      <div className="block text-sm font-medium text-gray-700 mb-2">Role</div>
      <div className="flex items-center space-x-3">
        <Shield className="h-5 w-5 text-gray-400" />
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            profileData.role === "admin"
              ? "bg-purple-100 text-purple-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {profileData.role === "admin" ? "Administrator" : "User"}
        </span>
      </div>
    </div>

    <div>
      <div className="block text-sm font-medium text-gray-700 mb-2">
        Member Since
      </div>
      <div className="flex items-center space-x-3">
        <Calendar className="h-5 w-5 text-gray-400" />
        <span className="text-gray-900">
          {new Date(profileData.joinDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    </div>

    <div>
      <div className="block text-sm font-medium text-gray-700 mb-2">
        Last Login
      </div>
      <div className="flex items-center space-x-3">
        <Calendar className="h-5 w-5 text-gray-400" />
        <span className="text-gray-900">
          {new Date(profileData.lastLogin).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  </div>
);
