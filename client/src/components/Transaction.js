import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext);

    const sign = (transaction.amount < 0) ? '-' : '+';
    const symbolColor = (transaction.amount < 0) ? 'minus' : 'plus';
    
  function toINR(val){
    val = Math.abs(val);
    return new Intl.NumberFormat('en-IN').format(val);
  }
  
  return (
      <li className={symbolColor}> {transaction.text} 
        <span>{sign} &#8377; {toINR(transaction.amount)}</span>
        <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
      </li>
  )
}

export default Transaction