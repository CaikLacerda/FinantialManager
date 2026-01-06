export default function ExpensesCard({ expenses }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex-1 relative">
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
        Despesas
      </p>

      <h2 className="text-3xl font-bold text-red-900">
        R$ {expenses.toFixed(2)}
      </h2>

      <div className="w-12 h-1 bg-red-500 rounded-full mt-3"></div>
    </div>
  );
}
