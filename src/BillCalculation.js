import React, { Component } from 'react';
import './BillCalculation.css';

class BillCalculation extends Component {
  render() {
    return (
      <div>
      <h1>Bill Calculation</h1>
      <form>
        <div className="section">
        <input type="text" className="question" name="name" id="nme" required autoComplete="off" />
        <label htmlFor="nme"><span>HOW MANY PEOPLE?</span></label>
        </div>
        <div className="section">
        <input name="message" className="question" rows="2" id="msg" required autoComplete="off"></input>
        <label htmlFor="msg"><span>COUPON CODE</span></label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
      </div>
    );
  }
}

export default BillCalculation;
