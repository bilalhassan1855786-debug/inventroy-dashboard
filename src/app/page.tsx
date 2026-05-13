import { products } from "@/lib/data";

export default function Home() {
  const totalStock = products.reduce((acc, p) => acc + p.stock, 0);

  return (
    <div className="p-6 grid gap-6">
      <h1 className="text-3xl font-bold">📊 Inventory Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-slate-800 p-4 rounded-xl">
          <h2>Total Products</h2>
          <p className="text-2xl">{products.length}</p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          <h2>Total Stock</h2>
          <p className="text-2xl">{totalStock}</p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          <h2>Status</h2>
          <p className="text-green-400">Active</p>
        </div>
      </div>
    </div>
  );
}