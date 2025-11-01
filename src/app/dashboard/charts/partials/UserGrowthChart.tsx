import { BarChart3 } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { UserGrowthChartProps } from "../interface/charts.interface";

export const UserGrowthChart = ({ data }: UserGrowthChartProps) => (
  <div className="bg-white rounded-lg shadow">
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">
          User Growth & Revenue
        </h3>
        <BarChart3 className="h-5 w-5 text-gray-400" />
      </div>
    </div>
    <div className="p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#3B82F6" name="Users" />
          <Bar dataKey="orders" fill="#10B981" name="Orders" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);
