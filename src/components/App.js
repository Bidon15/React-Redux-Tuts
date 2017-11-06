import React, { Component } from 'react';
import '../style.css';

import TotalInfo from '../containers/TotalInfo';
import InputData from '../containers/InputData';
import IncomeList from '../containers/IncomeList';
import ExpenseList from '../containers/ExpenseList';

class App extends Component {
  render() {
    return (
      <div>
        <TotalInfo/>
        <div className="bottom">
          <InputData/>
          <div className="container clearfix">
              <IncomeList/>
              <ExpenseList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
