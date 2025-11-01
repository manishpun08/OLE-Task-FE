"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { BarChart3, TrendingUp, Calendar, Download } from "lucide-react";

interface ChartDataPoint {
  day: string;
  users: number;
}

interface PerformanceMetric {
  metric: string;
  value: string | number;
  change: string;
}

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: React.ElementType;
}

const ChartsPage = () => {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  // Mock data for charts
  const chartData = {
    userActivity: [
      { day: "Mon", users: 65 },
      { day: "Tue", users: 80 },
      { day: "Wed", users: 95 },
      { day: "Thu", users: 70 },
      { day: "Fri", users: 110 },
      { day: "Sat", users: 45 },
      { day: "Sun", users: 30 },
    ] as ChartDataPoint[],
    performance: [
      { metric: "Page Views", value: 12543, change: "+12%" },
      { metric: "Sessions", value: 8721, change: "+8%" },
      { metric: "Bounce Rate", value: "35%", change: "-5%" },
      { metric: "Avg. Duration", value: "4:23", change: "+15%" },
    ] as PerformanceMetric[],
  };

  const StatCard = ({ title, value, change, icon: Icon }: StatCardProps) => (
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

  const SimpleBarChart = ({ data }: { data: ChartDataPoint[] }) => (
    <div className="flex items-end justify-between h-40 p-4">
      {data.map((item) => (
        <div key={item.day} className="flex flex-col items-center">
          <div
            className="bg-blue-500 rounded-t-sm w-8 mb-2"
            style={{ height: `${(item.users / 120) * 100}%` }}
          />
          <span className="text-xs text-gray-500">{item.day}</span>
        </div>
      ))}
    </div>
  );

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Analytics & Charts
            </h1>
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

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {chartData.performance.map((metric) => (
            <StatCard
              key={metric.metric}
              title={metric.metric}
              value={metric.value}
              change={metric.change}
              icon={TrendingUp}
            />
          ))}
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* User Activity Chart */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  User Activity
                </h3>
                <BarChart3 className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="p-4">
              <SimpleBarChart data={chartData.userActivity} />
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  Traffic Sources
                </h3>
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Direct</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Organic Search
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Social Media</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Referral</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Device Usage */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Device Usage
              </h3>
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
                      ></div>
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
                      ></div>
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
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Pages */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Top Pages</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">/dashboard</span>
                  <span className="text-sm font-medium text-gray-900">
                    2,543
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">/</span>
                  <span className="text-sm font-medium text-gray-900">
                    1,876
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">/users</span>
                  <span className="text-sm font-medium text-gray-900">943</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">/profile</span>
                  <span className="text-sm font-medium text-gray-900">521</span>
                </div>
              </div>
            </div>
          </div>

          {/* User Roles Distribution */}
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
                    <div className="text-2xl font-bold text-purple-600">
                      15%
                    </div>
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
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChartsPage;
