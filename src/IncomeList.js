import React from 'react';

const IncomeList = (props) => {
  return(
    <div className="income">
        <h2 className="icome__title">Income</h2>
        <div className="income__list">
        {
          props.incomes.map((income, i) => {
            return (<div className="item clearfix" key={ 'income-'+ i }>
                <div className="item__description">{ income.description }</div>
                <div className="right clearfix">
                    <div className="item__value">+ { income.value }</div>
                    <div className="item__delete">
                        <button className="item__delete--btn" onClick={ () => { props.deleteEntry(income, i) } }>
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
}

export default IncomeList;
