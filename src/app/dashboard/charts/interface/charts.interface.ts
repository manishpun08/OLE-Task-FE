export interface ChartDataPoint {
  day: string;
  users: number;
  revenue: number;
  orders: number;
}

export interface PerformanceMetric {
  metric: string;
  value: string | number;
  change: string;
}

export interface SalesData {
  name: string;
  value: number;
  [key: string]: string | number;
}

export interface User {
  role?: string;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: React.ElementType;
}

export interface UserGrowthChartProps {
  data: ChartDataPoint[];
}

export interface DeviceUsageChartProps {
  data: SalesData[];
}

export interface RevenueTrendChartProps {
  data: ChartDataPoint[];
}

export interface UserRolesSectionProps {
  user: User | null;
}

export interface ChartsHeaderProps {
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
}
