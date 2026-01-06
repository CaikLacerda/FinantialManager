import { useEffect, useState } from "react";
import TransactionsList from "./components/TransactionsList";
import AddTransaction from "./components/AddTransaction";
import { v4 } from "uuid";
import IncomesCard from "./components/IncomesCard";
import ExpensesCard from "./components/ExpensesCard";
import BalanceCard from "./components/BalanceCard";

function App() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prev) => [
      ...prev,
      {
        ...newTransaction,
        id: v4(),
      },
    ]);
  };

  useEffect(() => {
    const newIncomes = transactions
      .filter((tr) => tr.type === "Receita")
      .reduce((acc, tr) => acc + tr.amount, 0);

    const newExpenses = transactions
      .filter((tr) => tr.type === "Despesa")
      .reduce((acc, tr) => acc + tr.amount, 0);

    const newBalance = newIncomes - newExpenses;

    setIncome(newIncomes);
    setExpense(newExpenses);
    setBalance(newBalance);
  }, [transactions]);

  const onClickRemoveTransaction = (transactionId) => {
    const newTransactions = transactions.filter((tr) => tr.id != transactionId);
    setTransactions(newTransactions);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-center font-bold text-4xl">
        Gerenciador de finanças
      </h1>
      <AddTransaction onAddTransaction={handleAddTransaction} />
      <div className="flex flex-row gap-4 mx-auto w-250">
        <BalanceCard balance={balance} />
        <ExpensesCard expenses={expense} />
        <IncomesCard income={income} />
      </div>
      <TransactionsList transactions={transactions} onClickRemoveTransaction={onClickRemoveTransaction}/>
    </div>
  );
}

export default App;
