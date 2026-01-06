import { Trash } from "lucide-react";

export default function TransactionsList({
  transactions,
  onClickRemoveTransaction,
}) {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <table className="m-auto w-150 bg-gray-100 rounded-md shadow-sm">
      <thead className="font-bold text-gray-300 ">
        <tr className="text-center">
          <td>Data</td>
          <td>Descricao</td>
          <td>Valor</td>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tr) => (
          <tr key={tr.id} className="text-center shadow-xs">
            <td>{months[tr.month]}</td>
            <td>{tr.description}</td>
            <td
              className={
                tr.type === "Despesa" ? "text-red-500" : "text-green-500"
              }
            >
              {`${tr.type === "Despesa" ? "-" : ""} R$ ${tr.amount.toFixed(2)}`}
            </td>
            <td className="text-xs">
              <button
                className="text-red-500 cursor-pointer"
                onClick={() => onClickRemoveTransaction(tr.id)}
              >
                <Trash className="w-4.5" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
