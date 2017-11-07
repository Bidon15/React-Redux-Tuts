import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalInfo extends Component {
  checkNaN = () => {
    if (this.props.budget.totalExp === 0) {
      return 0;
    } else {
      return this.props.budget.totalInc / this.props.budget.totalExp * 100;
    }
  }
  render() {
    return (
      <div className="top">
        <div className="budget">
            <div className="budget__title">
                Available Budget in <span className="budget__title--month">November</span>:
            </div>

            <div className="budget__value">{ this.props.budget.totalInc }</div>

            <div className="budget__income clearfix">
                <div className="budget__income--text">Income</div>
                <div className="right">
                    <div className="budget__income--value">+ { this.props.budget.totalInc }</div>
                    <div className="budget__income--percentage">&nbsp;</div>
                </div>
            </div>

            <div className="budget__expenses clearfix">
                <div className="budget__expenses--text">Expenses</div>
                <div className="right clearfix">
                    <div className="budget__expenses--value">- { this.props.budget.totalExp }</div>
                    <div className="budget__expenses--percentage">
                      {Math.round(this.checkNaN())}0%
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    budget: state.budget
  };
}

export default connect(mapStateToProps)(TotalInfo);
