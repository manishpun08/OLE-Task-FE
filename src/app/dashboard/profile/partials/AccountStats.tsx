import type { StatItem } from "../interface/profile.interface";

const accountStats: StatItem[] = [
  { label: "Total Logins", value: 147 },
  { label: "Pages Viewed", value: "1,243" },
  { label: "Data Usage", value: "45.2 MB" },
];

export const AccountStats = () => (
  <div className="bg-white rounded-lg shadow">
    <div className="p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Account Stats</h3>
      <div className="space-y-3">
        {accountStats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{stat.label}</span>
            <span className="text-sm font-medium text-gray-900">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
