import React, { Component } from 'react';
import './BillCalculation.css';

class CouponBox extends Component {
  render() {
    var string = function(props){
      if(props.length != 0){
        alert('Your promotion should be "'+props.name+'", You Got '+props.detail);
      }
      return "";
    }
    return (
      <div className="section coupon-box">
        <p>{string(this.props.promotion)}</p>
      </div>
    );
  }
}

export default CouponBox;
