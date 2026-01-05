import { useState } from 'react'
import TransactionsList from './components/TransactionsList'
import AddTransaction from './components/AddTransaction'
import { v4 } from "uuid"

function App() {
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      description: "Academia",
      amount: 100,
      type: "Despesa", //expense ou income
      month: new Date().getMonth()
    }
  ])

  const handleAddTransaction = (newTransaction) => {
    setTransactions(prev => [
      ...prev,
      {
        ...newTransaction,
        id: v4()
      }
    ])
  }

  return (
    <div className='p-6 space-y-4'>
      <AddTransaction onAddTransaction={handleAddTransaction}/>
      <TransactionsList transactions={transactions}/>
    </div>
  )
}

export default App
