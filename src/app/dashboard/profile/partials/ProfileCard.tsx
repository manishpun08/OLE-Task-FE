import type { ProfileCardProps } from "../interface/profile.interface";
import { ProfileAvatar } from "./ProfileAvatar";
import { ProfileDetails } from "./ProfileDetails";

export const ProfileCard = ({
  isEditing,
  profileData,
  editData,
  onInputChange,
}: ProfileCardProps) => (
  <div className="lg:col-span-2">
    <div className="bg-white rounded-lg shadow">
      <ProfileAvatar
        isEditing={isEditing}
        profileData={profileData}
        editData={editData}
        onInputChange={onInputChange}
      />
      <ProfileDetails
        isEditing={isEditing}
        profileData={profileData}
        editData={editData}
        onInputChange={onInputChange}
      />
    </div>
  </div>
);
