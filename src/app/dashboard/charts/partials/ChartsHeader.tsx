import { Download } from "lucide-react";
import type { ChartsHeaderProps } from "../interface/charts.interface";

export const ChartsHeader = ({
  selectedPeriod,
  setSelectedPeriod,
}: ChartsHeaderProps) => (
  <div className="flex justify-between items-center mb-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Analytics & Charts</h1>
      <p className="text-gray-600">Track performance and user activity</p>
    </div>
    <div className="flex items-center space-x-3">
      <select
        value={selectedPeriod}
        onChange={(e) => setSelectedPeriod(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="7d">Last 7 days</option>
        <option value="30d">Last 30 days</option>
        <option value="90d">Last 90 days</option>
        <option value="1y">Last year</option>
      </select>
      <button
        type="button"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center space-x-2"
      >
        <Download className="h-4 w-4" />
        <span>Export</span>
      </button>
    </div>
  </div>
);
