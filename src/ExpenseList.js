import React from 'react';

const ExpenseList = (props) => {
  return(
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        {
          props.expenses.map((expense, id) => {
            return (<div className="item clearfix" id={ 'expense-' + id }>
                <div className="item__description">{ expense.description }</div>
                <div className="right clearfix">
                    <div className="item__value">- { expense.value }</div>
                    <div className="item__percentage">{ expense.value / props.totalInc * 100 }%</div>
                    <div className="item__delete">
                        <button className="item__delete--btn" onClick={ () => props.deleteEntry(expense) }>
                          <i className="ion-ios-close-outline"></i>
                        </button>
                    </div>
                </div>
            </div>)
          })
        }
      </div>
    </div>
  )
}

export default ExpenseList;
