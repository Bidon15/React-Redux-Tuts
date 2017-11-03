import React, { Component } from 'react';

class InputData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      value: '',
      optionSelected: 'inc',
      toggleClass: '',
      toggleBtn: '',
    };
  }

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  }

  onChangeValue = (event) => {
    this.setState({ value: Number.parseInt(event.target.value) });
  }

  onChangeOption = (event) => {
    this.setState({ optionSelected: event.target.value });
    if (event.target.value === 'exp') {
      this.setState({ toggleClass: 'red-focus', toggleBtn: 'red' });
    } else {
      this.setState({ toggleClass: '', toggleBtn: '' });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    let data = {
      type: this.state.optionSelected,
      description: this.state.description,
      value: this.state.value,
    }
    this.props.addNewEntry(data);
    this.setState({ description: '', value: '' });
  }
  
  render() {
    return (
      <div className="add">
          <div className="add__container">
            <form onSubmit={this.onSubmit}>

              <select value={ this.state.optionSelected } onChange={ this.onChangeOption }
                className={ 'add__type ' + this.state.toggleClass }>
                  <option value="inc">+</option>
                  <option value="exp">-</option>
              </select>

              <input className={ 'add__description ' + this.state.toggleClass }
                placeholder="Add description"
                value={ this.state.description } onChange={ this.onChangeDescription }/>

              <input type="number" className={ 'add__value ' + this.state.toggleClass }
                placeholder="Value"
                value={ this.state.value } onChange={ this.onChangeValue }/>

              <button className={ 'add__btn ' + this.state.toggleBtn }>
                <i className="ion-ios-checkmark-outline"></i>
              </button>
            </form>
          </div>
      </div>
    );
  }
}

export default InputData;
