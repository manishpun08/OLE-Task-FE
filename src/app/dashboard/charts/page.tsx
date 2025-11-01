"use client";

import { TrendingUp } from "lucide-react";
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { chartData } from "@/data/chartData";
import { useAuth } from "@/hooks/useAuth";
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

const ChartsPage = () => {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6">
        {/* Header */}
        <ChartsHeader
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />

        {/* Performance Metrics */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
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
        <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:gap-6 xl:grid-cols-2">
          <UserGrowthChart data={chartData?.userGrowth} />
          <DeviceUsageChart data={chartData?.salesSummary} />
        </div>

        {/* Revenue Trend Line Chart */}
        <div className="mb-6 grid grid-cols-1 sm:mb-8">
          <RevenueTrendChart data={chartData?.userGrowth} />
        </div>

        {/* Additional Charts Row */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <DeviceUsageSection />
          <TopPagesSection />
          <UserRolesSection user={user} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChartsPage;
