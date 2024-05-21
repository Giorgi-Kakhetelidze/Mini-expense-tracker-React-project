import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
  
  const { transactions } = useContext(GlobalContext)
  
  const { deleteTransaction } = useContext(GlobalContext)

  return (
    <>
      <h3>ისტორია</h3>
      <ul className='list'>
        {transactions.map(transaction => (
          <li className={transaction.amount > 0 ? "plus" : "minus"} key={transaction.id}>
            {transaction.text} <span>{transaction.amount}₾</span>
            <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button>
          </li>  
        ))}
      </ul> 
    </>
  )
}

export default TransactionList
