import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item)=> (acc += item), 0).toFixed(2);
  
  function toINR(val){
    return new Intl.NumberFormat('en-IN').format(val);
  }

  return (
    <>
     <h4>Your Balance</h4>
     <h1 id="balance">&#8377; {toINR(total)}</h1>
    </>
  )
}

export default Balance
