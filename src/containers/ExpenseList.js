import React from 'react';
import { deleteItem } from '../actions/delete-item';
import { connect } from 'react-redux';

const ExpenseList = (props) => {
  return(
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        {
          props.expenses.map((expense, id) => {
            return (<div className="item clearfix" id={ 'expense-' + id }>
                <div className="item__description">{ expense.desc }</div>
                <div className="right clearfix">
                    <div className="item__value">- { expense.val }</div>
                    <div className="item__percentage">{ expense.val / props.totalInc * 100 }%</div>
                    <div className="item__delete">
                        <button className="item__delete--btn" onClick={ () => props.deleteEntry(expense, id) }>
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

const mapStateToProps = (state) => {
  return {
    expenses: state.budget.expenses,
    totalInc: state.budget.totalInc
  };
};

export default connect(mapStateToProps, { deleteItem })(ExpenseList);
