import React, { Component } from 'react';
import './BillCalculation.css';
import {isDuplicate, bill_calculation} from './Calculate.js';


class BillCalculation extends Component {

  constructor(){
    super();
    this.state = {
      people: 0,
      code:"",
      codeList:[],
      promotion: "",
    };

    this.submit = this.submit.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.calculation = this.calculation.bind(this);

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

  clearInput(e){
    this.setState({
      codeList:[],
    })
  }

  calculation(){
    console.log(this.state.people);
    console.log(this.state.codeList);
    this.setState({
      promotion: bill_calculation(this.state.people, this.state.codeList),
    });
  }

  submit(e){
    // add the code in array
    var codeArray = this.state.codeList;
    if(codeArray.length == 0 || !isDuplicate(codeArray, this.state.code)){
      codeArray.push(this.state.code);
      if(codeArray.length <= 4){
        this.setState({
          codeList: codeArray,
        });
      }
    }
    e.preventDefault();
  }


  render() {
    var codes = this.state.codeList;
    var codeList = codes.map(function(code){
                        return <span className='code-list'>{code}&#09;&#09;</span> ;
                  })
    return (
      <div>
      <form onSubmit={this.submit}>
      <div className="section">
      <h1>BILL CALCULATION</h1>
      </div>
      <div className="section">
      <input type="text" className="question" name="people" id="pp" required autoComplete="off" onChange={this.handleInputChange.bind(this)}/>
      <label htmlFor="pp"><span>HOW MANY PEOPLE?</span></label>
      </div>
      <div className="section">
      <input name="code" className="question" rows="2" id="cd" required autoComplete="off" onChange={this.handleInputChange.bind(this)}></input>
      <label htmlFor="cd"><span>COUPON CODE</span></label>
      </div>
      <div className="section">
        <input type="submit" value="ADD" />
        <input type="reset" value="CLEAR" onClick={this.clearInput}/>
        <input type="submit" value="CALCULATE"  onClick={this.calculation}/>
      </div>
      <div className="section">
          {codeList}
      </div>
      </form>
      </div>
    );
  }
}

export default BillCalculation;
