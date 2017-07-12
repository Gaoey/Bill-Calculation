import React, { Component } from 'react';
import './BillCalculation.css';

class CouponBox extends Component {
  render() {
    return (
      <div className="section">
        <p>{this.props.promotion.name}</p>
      </div>
    );
  }
}

export default CouponBox;
