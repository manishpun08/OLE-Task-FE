"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useAuth } from "@/hooks/useAuth";
import { TrendingUp } from "lucide-react";
import { useState } from "react";
import {
  ChartsHeader,
  DeviceUsageChart,
  DeviceUsageSection,
  RevenueTrendChart,
  StatCard,
  TopPagesSection,
  UserGrowthChart,
  UserRolesSection,
} from "./partials";
import { chartData } from "@/data/chartData";

const ChartsPage = () => {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <ChartsHeader
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {chartData.performance.map((metric) => (
            <StatCard
              key={metric?.metric}
              title={metric?.metric}
              value={metric?.value}
              change={metric?.change}
              icon={TrendingUp}
            />
          ))}
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <UserGrowthChart data={chartData?.userGrowth} />
          <DeviceUsageChart data={chartData?.salesSummary} />
        </div>

        {/* Revenue Trend Line Chart */}
        <div className="grid grid-cols-1 mb-8">
          <RevenueTrendChart data={chartData?.userGrowth} />
        </div>

        {/* Additional Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <DeviceUsageSection />
          <TopPagesSection />
          <UserRolesSection user={user} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChartsPage;
