import React from 'react';

const TotalInfo = (props) => {
  let checkNaN = () => {
    if (props.totalExp === 0) {
      return 0;
    } else {
      return props.totalExp / props.totalInc * 100;
    }
  }
  let now = new Date();
  let month = now.getMonth();

  return (
    <div className="top">
      <div className="budget">
          <div className="budget__title">
              Available Budget in <span className="budget__title--month">{ month }</span>:
          </div>

          <div className="budget__value">{ props.totalInc - props.totalExp }</div>

          <div className="budget__income clearfix">
              <div className="budget__income--text">Income</div>
              <div className="right">
                  <div className="budget__income--value">+ { props.totalInc }</div>
                  <div className="budget__income--percentage">&nbsp;</div>
              </div>
          </div>

          <div className="budget__expenses clearfix">
              <div className="budget__expenses--text">Expenses</div>
              <div className="right clearfix">
                  <div className="budget__expenses--value">- { props.totalExp }</div>
                  <div className="budget__expenses--percentage">
                    { Math.round(checkNaN()) }%
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default TotalInfo
