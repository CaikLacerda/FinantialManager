export default function TransactionsList({ transactions }) {

  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  return (
    <table className="m-auto w-150 bg-gray-200">
      <thead className="font-bold text-gray-300 ">
        <tr className="text-center">
          <td>Data</td>
          <td>Descricao</td>
          <td>Valor</td>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tr) => (
          <tr key={tr.id} className="text-center">
            <td>{months[tr.month]}</td>
            <td>{tr.description}</td>
            <td>{tr.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
