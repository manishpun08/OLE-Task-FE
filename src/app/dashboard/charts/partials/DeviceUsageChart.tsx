import { PieChart } from "lucide-react";
import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { DeviceUsageChartProps } from "../interface/charts.interface";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B"];

export const DeviceUsageChart = ({ data }: DeviceUsageChartProps) => (
  <div className="bg-white rounded-lg shadow">
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">
          Device Usage Distribution
        </h3>
        <PieChart className="h-5 w-5 text-gray-400" />
      </div>
    </div>
    <div className="p-4">
      <ResponsiveContainer width="100%" height={300}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  </div>
);
