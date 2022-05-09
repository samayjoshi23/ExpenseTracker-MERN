import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const IncomeExpences = () => {

  const {transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  // eslint-disable-next-line
  const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
  
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2));
  
  function toINR(val){
    return new Intl.NumberFormat('en-IN').format(val);
  }


  return (
    <div className='inc-exp-container'>
      <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">&#8377; {toINR(income)}</p>
      </div>
      <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">&#8377; {toINR(expense)}</p>
      </div>
    </div>
  )
}

export default IncomeExpences
