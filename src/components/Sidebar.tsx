import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-slate-900 p-4">
      <h2 className="text-xl mb-6">Dashboard</h2>

      <div className="flex flex-col gap-3">
        <Link href="/">Home</Link>
        <Link href="/inventory">Inventory</Link>
        <Link href="/sales">Sales</Link>
        <Link href="/analytics">Analytics</Link>
      </div>
    </div>
  );
}