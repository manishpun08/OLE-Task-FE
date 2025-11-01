export const AccountSecurity = () => (
  <div className="bg-white rounded-lg shadow">
    <div className="p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Account Security
      </h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Password</span>
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Change
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Two-Factor Auth</span>
          <span className="text-sm text-red-600">Disabled</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Active Sessions</span>
          <span className="text-sm text-gray-900">1</span>
        </div>
      </div>
    </div>
  </div>
);
