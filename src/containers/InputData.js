import React, { Component } from 'react';
import { addItem } from '../actions/add-item';
import { connect } from 'react-redux';

class InputData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'inc',
      desc: '',
      val: '',
      redgroup: '',
      redbtn: '',
    }
  }

  onChange = (e) => {
    if (e.target.name === 'type') {
      switch (e.target.value) {
        case 'inc':
          this.setState({ redgroup: '', redbtn: '' });
          break;
        case 'exp':
          this.setState({ redgroup: 'redgroup', redbtn: 'red' });
          break;
      }

    }
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="add">
          <div className="add__container">
              <select name="type" value={ this.state.type }
                className='add__type' onChange= { this.onChange }>
                  <option value="inc">+</option>
                  <option value="exp">-</option>
              </select>

              <input name="desc" className={ 'add__description' }
                placeholder="Add description"
                value={ this.state.description } onChange={ this.onChange }/>

              <input name="val" type="number" className={ 'add__value ' }
                placeholder="Value"
                value={ this.state.val } onChange={ this.onChange }/>

              <button className={ 'add__btn' } onClick={ () => this.props.addItem(this.state) }>
                <i className="ion-ios-checkmark-outline"></i>
              </button>
          </div>
      </div>
    );
  }
}

export default connect(null, {addItem})(InputData);
