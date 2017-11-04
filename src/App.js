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
      totalExp: 0
    };
  }

  addNewEntry = (data) => {
    if (data.type === 'inc') {
      this.setState({
        allIncomes: [...this.state.allIncomes, data],
        totalInc: this.state.totalInc + data.value
      });
    } else {
      this.setState({
        allExpenses: [...this.state.allExpenses, data],
        totalExp: this.state.totalExp + data.value
      });
    }
  }

  deleteEntry = (data) => {
    if (data.type === 'inc') {
      this.setState({ allIncomes: this.state.allIncomes.filter((income) => {
        return (income !== data);
      }) });
    } else {
      this.setState({ allExpenses: this.state.allExpenses.filter((expense) => {
        return (expense !== data);
      }) });
    }
  }

  render() {
    return (
      <div>
        <TotalInfo totalInc={ this.state.totalInc } totalExp={ this.state.totalExp }/>
        <div className="bottom">
          <InputData addNewEntry={ this.addNewEntry }/>
          <div className="container clearfix">
              <IncomeList incomes={ this.state.allIncomes } deleteEntry={ this.deleteEntry } />
              <ExpenseList expenses={ this.state.allExpenses } totalInc={ this.state.totalInc }
                deleteEntry={ this.deleteEntry }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
