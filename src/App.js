import React, { Component } from 'react';
import './style.css';

import TotalInfo from './TotalInfo';
import InputData from './InputData';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allExpenses: [],
      allIncomes: [],
      totalInc: 0,
      totalExp: ''
    };
  }

  countTotalIncome = () => {
    let total = 0;
    this.state.allIncomes.forEach((el) => {
      total += el.value;
    });
    this.setState({ totalInc: total });
  }

  addNewEntry = (data) => {
    if (data.type === 'inc') {
      this.setState({ allIncomes: [...this.state.allIncomes, data] });
    } else {
      this.setState({ allExpenses: [...this.state.allExpenses, data] });
    }
    this.countTotalIncome();
  }

  deleteEntry = (data) => {

  }

  render() {
    return (
      <div>
        <TotalInfo/>
        <div className="bottom">
          <InputData addNewEntry = { this.addNewEntry }/>
          <div className="container clearfix">
              <IncomeList incomes = { this.state.allIncomes } />
              <ExpenseList expenses = { this.state.allExpenses } totalInc = { this.state.totalInc }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
