import type { ActivityItem } from "../interface/profile.interface";

const recentActivities: ActivityItem[] = [
  {
    id: "1",
    action: "Logged in",
    timestamp: "Today at 9:30 AM",
    color: "green",
  },
  {
    id: "2",
    action: "Viewed dashboard",
    timestamp: "Today at 9:32 AM",
    color: "blue",
  },
  {
    id: "3",
    action: "Updated profile",
    timestamp: "Yesterday at 3:15 PM",
    color: "purple",
  },
];

const getColorClass = (color: ActivityItem["color"]) => {
  const colorMap = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
  };
  return colorMap[color];
};

export const RecentActivity = () => (
  <div className="bg-white rounded-lg shadow">
    <div className="p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Recent Activity
      </h3>
      <div className="space-y-3">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div
              className={`w-2 h-2 ${getColorClass(activity.color)} rounded-full mt-2`}
            />
            <div className="flex-1">
              <p className="text-sm text-gray-900">{activity.action}</p>
              <p className="text-xs text-gray-500">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
