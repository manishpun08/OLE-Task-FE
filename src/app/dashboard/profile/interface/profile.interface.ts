export interface ProfileData {
  name: string;
  email: string;
  role: string;
  joinDate: string;
  lastLogin: string;
}

export interface ProfileHeaderProps {
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
}

export interface ProfileAvatarProps {
  isEditing: boolean;
  profileData: ProfileData;
  editData: ProfileData;
  onInputChange: (field: string, value: string) => void;
}

export interface ProfileDetailsProps {
  isEditing: boolean;
  profileData: ProfileData;
  editData: ProfileData;
  onInputChange: (field: string, value: string) => void;
}

export interface ProfileCardProps {
  isEditing: boolean;
  profileData: ProfileData;
  editData: ProfileData;
  onInputChange: (field: string, value: string) => void;
}

export interface ActivityItem {
  id: string;
  action: string;
  timestamp: string;
  color: "green" | "blue" | "purple" | "red" | "yellow";
}

export interface StatItem {
  label: string;
  value: string | number;
}
