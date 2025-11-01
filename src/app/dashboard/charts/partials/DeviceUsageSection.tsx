export const DeviceUsageSection = () => (
  <div className="bg-white rounded-lg shadow">
    <div className="p-6 border-b border-gray-200">
      <h3 className="text-lg font-medium text-gray-900">Device Usage</h3>
    </div>
    <div className="p-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Desktop</span>
          <div className="flex items-center space-x-2">
            <div className="w-20 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "60%" }}
              />
            </div>
            <span className="text-xs text-gray-500">60%</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Mobile</span>
          <div className="flex items-center space-x-2">
            <div className="w-20 bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "35%" }}
              />
            </div>
            <span className="text-xs text-gray-500">35%</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Tablet</span>
          <div className="flex items-center space-x-2">
            <div className="w-20 bg-gray-200 rounded-full h-2">
              <div
                className="bg-yellow-500 h-2 rounded-full"
                style={{ width: "5%" }}
              />
            </div>
            <span className="text-xs text-gray-500">5%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
