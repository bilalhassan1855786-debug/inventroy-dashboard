import InventoryTable from "@/components/InventoryTable";

export default function InventoryPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📦 Inventory</h1>
      <InventoryTable />
    </div>
  );
}