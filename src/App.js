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

  countTotalExpense = () => {
    let total = 0;
    this.state.allExpenses.forEach((el) => {
      total += el.value;
    });
    this.setState({ totalExp: total });
  }

  addNewEntry = (data) => {
    if (data.type === 'inc') {
      this.setState({ allIncomes: [...this.state.allIncomes, data] });
      this.countTotalIncome();
    } else {
      this.setState({ allExpenses: [...this.state.allExpenses, data] });
    }
  }

  deleteEntry = (data, id) => {
    console.log(data);
    console.log(id);
    if (data.type === 'inc') {
      const index = this.state.allIncomes.indexOf(data);
      if (index !== -1) {
        this.setState({ allIncomes: this.state.allIncomes.splice(index, 1) });
        this.countTotalIncome();
      }
    } else {
      this.setState({ allExpenses: this.state.allExpenses.splice(id, 1) });
    }
    console.log(this.state.allIncomes);
  }

  render() {
    return (
      <div>
        <TotalInfo/>
        <div className="bottom">
          <InputData addNewEntry={ this.addNewEntry }/>
          <div className="container clearfix">
              <IncomeList incomes={ this.state.allIncomes } deleteEntry={ this.deleteEntry } />
              <ExpenseList expenses={ this.state.allExpenses } totalInc={ this.state.totalInc }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
