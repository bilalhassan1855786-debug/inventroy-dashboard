export default function Navbar() {
  return (
    <div className="w-full bg-slate-300 p-4 flex justify-between">
      <h1 className="font-bold">Smart Inventory</h1>
      <button className="bg-blue-600 px-4 py-1 rounded">
        Admin
      </button>
    </div>
  );
}