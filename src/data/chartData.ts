import type {
  ChartDataPoint,
  PerformanceMetric,
} from "@/app/dashboard/charts/partials";

export const chartData = {
  userGrowth: [
    { day: "Mon", users: 65, revenue: 2400, orders: 24 },
    { day: "Tue", users: 80, revenue: 1398, orders: 18 },
    { day: "Wed", users: 95, revenue: 9800, orders: 45 },
    { day: "Thu", users: 70, revenue: 3908, orders: 32 },
    { day: "Fri", users: 110, revenue: 4800, orders: 28 },
    { day: "Sat", users: 45, revenue: 3800, orders: 35 },
    { day: "Sun", users: 30, revenue: 4300, orders: 40 },
  ] as ChartDataPoint[],
  salesSummary: [
    { name: "Desktop", value: 45 },
    { name: "Mobile", value: 35 },
    { name: "Tablet", value: 20 },
  ],
  performance: [
    { metric: "Page Views", value: 12543, change: "+12%" },
    { metric: "Sessions", value: 8721, change: "+8%" },
    { metric: "Bounce Rate", value: "35%", change: "-5%" },
    { metric: "Avg. Duration", value: "4:23", change: "+15%" },
  ] as PerformanceMetric[],
};
