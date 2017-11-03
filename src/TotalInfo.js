import React, { Component } from 'react';

class TotalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  render() {
    let now = new Date();
    let month = now.getMonth();
    return (
      <div className="top">
        <div className="budget">
            <div className="budget__title">
                Available Budget in <span className="budget__title--month">{ month }</span>:
            </div>

            <div className="budget__value">+ 2,345.64</div>

            <div className="budget__income clearfix">
                <div className="budget__income--text">Income</div>
                <div className="right">
                    <div className="budget__income--value">+ 4,300.00</div>
                    <div className="budget__income--percentage">&nbsp;</div>
                </div>
            </div>

            <div className="budget__expenses clearfix">
                <div className="budget__expenses--text">Expenses</div>
                <div className="right clearfix">
                    <div className="budget__expenses--value">- 1,954.36</div>
                    <div className="budget__expenses--percentage">45%</div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default TotalInfo
