import { products } from "@/lib/data";

export default function InventoryTable() {
  return (
    <div className="bg-slate-300 p-4 rounded-xl">
      <h2 className="text-xl mb-4">Inventory</h2>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-400">
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t border-slate-200">
              <td>{p.name}</td>
              <td>{p.stock}</td>
              <td>${p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}