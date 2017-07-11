import React, { Component } from 'react';
import './BillCalculation.css';
import Box from './CouponBox.js'


class BillCalculation extends Component {

  constructor(){
    super();
    this.state = {
      people: 0,
      code:"",
      codeList:[]
    };

    this.submit = this.submit.bind(this);

  }


  handleInputChange(e){
    const target = e.target;
    const name = target.name;
    if(name === "people"){
      this.setState({
        people: e.target.value,
      });
    }else if(name === "code"){
      this.setState({
        code: e.target.value,
      })
    }
  }

  submit(e){
    // add the code in array
    var codeArray = this.state.codeList;
    codeArray.push(this.state.code);
    this.setState({
      codeList: codeArray,
    });
    e.preventDefault();
  }


  render() {
    var codes = this.state.codeList;
    var codeList = codes.map(function(code){
                        return <li>{code}</li>;
                  })
    return (
      <div>
      <h1>Bill Calculation</h1>
      <form onSubmit={this.submit}>
      <div className="section">
      <input type="text" className="question" name="people" id="pp" required autoComplete="off" onClick={this.handleInputChange.bind(this)}/>
      <label htmlFor="pp"><span>HOW MANY PEOPLE?</span></label>
      </div>
      <div className="section">
      <input name="code" className="question" rows="2" id="cd" required autoComplete="off" onChange={this.handleInputChange.bind(this)}></input>
      <label htmlFor="cd"><span>COUPON CODE</span></label>
      </div>
      <div className="section">
      <input type="submit" value="ADD" />
      </div>
      <div className="section">
        <ul className="code-list">
          {codeList}
        </ul>
      </div>
      </form>
      </div>
    );
  }
}

export default BillCalculation;
