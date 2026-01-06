export default function IncomesCard({ income }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex-1 relative">
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
        Receita
      </p>

      <h2 className="text-3xl font-bold text-green-800">
        R$ {income.toFixed(2)}
      </h2>

      <div className="w-12 h-1 bg-teal-500 rounded-full mt-3"></div>
    </div>
  );
}
