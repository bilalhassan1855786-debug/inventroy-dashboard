"use client";

import { salesData } from "@/lib/data";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function SalesChart() {
  return (
    <div className="bg-slate-800 p-4 rounded-xl">
      <h2 className="text-xl mb-4">Sales Analytics</h2>

      <LineChart width={500} height={300} data={salesData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#38bdf8" />
      </LineChart>
    </div>
  );
}