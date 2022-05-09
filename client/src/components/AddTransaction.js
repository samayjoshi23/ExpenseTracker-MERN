import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);


    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 10000000),
        text,
        amount: parseInt(amount)
      }

      addTransaction(newTransaction);
      setText('');
      setAmount(0);
    }
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
          <div className="form-control">
              <label htmlFor="text">Text</label>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter text..." />
          </div>
          <div className="form-control">
              <label htmlFor="amount">Amount (in &#8377;) <br/>(negative- expense, positive - income)</label>
              <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction