import type { UserRolesSectionProps } from "../interface/charts.interface";

export const UserRolesSection = ({ user }: UserRolesSectionProps) => (
  <div className="bg-white rounded-lg shadow">
    <div className="p-6 border-b border-gray-200">
      <h3 className="text-lg font-medium text-gray-900">User Roles</h3>
    </div>
    <div className="p-6">
      {user?.role === "admin" ? (
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">85%</div>
            <div className="text-sm text-gray-500">Regular Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">15%</div>
            <div className="text-sm text-gray-500">Administrators</div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p className="text-sm">Admin access required</p>
        </div>
      )}
    </div>
  </div>
);
