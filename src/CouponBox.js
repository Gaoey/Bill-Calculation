import React, { Component } from 'react';
import './BillCalculation.css';
import {bill_calculation} from './Calculate.js';

class CouponBox extends Component {
  constructor(){
    super();
    this.state = {
      promotion: "",
    }

    this.calculation = this.calculation.bind(this);
  }

  calculation(){
    this.setState({
      promotion: bill_calculation(this.props.people, this.props.codeList),
    });
  }

  render() {
    return (
      <div className="section">
        <p>{this.state.promotion.name}</p>
        <button name="cal" value="calculate" onClick={this.calculation}>calculate</button>
      </div>
    );
  }
}

export default CouponBox;
