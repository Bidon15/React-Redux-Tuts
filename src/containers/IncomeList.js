import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/delete-item';

const IncomeList = (props) => {
  return(
    <div className="income">
        <h2 className="icome__title">Income</h2>
        <div className="income__list">
        {
          props.incomes.map((income, i) => {
            return (<div className="item clearfix" key={ 'income-'+ i }>
                <div className="item__description">{ income.desc }</div>
                <div className="right clearfix">
                    <div className="item__value">+ { income.val }</div>
                    <div className="item__delete">
                        <button className="item__delete--btn" onClick={ () => { console.log('test'); props.deleteItem(income, i) } }>
                            <i className="ion-ios-close-outline"></i>
                        </button>
                    </div>
                </div>
            </div>)
          })
        }
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    incomes: state.budget.incomes
  }
};

export default connect(mapStateToProps, { deleteItem })(IncomeList);
