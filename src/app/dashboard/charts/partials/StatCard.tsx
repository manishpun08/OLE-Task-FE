import type { StatCardProps } from "../interface/charts.interface";

export const StatCard = ({
  title,
  value,
  change,
  icon: Icon,
}: StatCardProps) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="flex flex-col items-end">
        <Icon className="h-8 w-8 text-blue-600 mb-2" />
        <span
          className={`text-sm font-medium ${
            change.startsWith("+") ? "text-green-600" : "text-red-600"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  </div>
);
