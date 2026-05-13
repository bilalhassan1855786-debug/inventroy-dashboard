import { salesData } from "@/lib/data";

export default function SalesPage() {
  const totalSales = salesData.reduce((acc, s) => acc + s.sales, 0);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">💰 Sales Overview</h1>

      <div className="bg-slate-400 p-4 rounded-xl">
        <h2>Total Sales</h2>
        <p className="text-3xl text-green-400">${totalSales}</p>
      </div>

      <div className="bg-slate-300 p-4 rounded-xl">
        <h2>Monthly Breakdown</h2>

        <ul className="mt-3 space-y-2">
          {salesData.map((s) => (
            <li key={s.month} className="flex justify-between">
              <span>{s.month}</span>
              <span>${s.sales}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}