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
      editActive: false,
      current_index: 0,
    };

    this.submit = this.submit.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.calculation = this.calculation.bind(this);
    this.couponCodes = this.couponCodes.bind(this);
    this.selectCodeToUpdate = this.selectCodeToUpdate.bind(this);

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
    this.setState({
      promotion: bill_calculation(this.state.people, this.state.codeList),
    });
  }

  submit(e){
    // add the code in array
    var codeArray = this.state.codeList;
    if(codeArray.length == 0 || !isDuplicate(codeArray, this.state.code)){
      if(this.state.code !== null){
        codeArray.push(this.state.code);
      }
      if(codeArray.length <= 4){
        this.setState({
          codeList: codeArray,
          editActive: false,
        });
      }
    }
    e.preventDefault();
  }

  removeCode(index){
    var codeArray = this.state.codeList;
    codeArray.splice(index, 1);
    this.setState({
      codeList: codeArray,
    });
  }

  selectCodeToUpdate(index, event){
    this.setState({
        editActive: true,
        current_index: index,
    });
  }

  updateCode(index, e){
  var codeArray = this.state.codeList;
  codeArray[index] = e.target.value;
  this.setState({
    codeList: codeArray,
    code: null,
  });
  }

  couponCodes(){
    var codes = this.state.codeList;
    return this.state.codeList.map((code, index, arr)=>{
          return <span className='code-list'>
                  <span>{code}</span> |
                  <a href="#" name="edit" onClick={()=>this.selectCodeToUpdate(index)}> edit</a> |
                  <a href="#" onClick={() => this.removeCode(index)}>X</a>
                 &#09;&#09;</span> ;
    });
  }

  render() {

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
          {this.couponCodes()}
      </div>
      <div className={this.state.editActive ? "section visible-box editBox": "hidden-box" }>
          <input type="text" value={this.state.codeList[this.state.current_index]} name="edit-box" onChange={this.updateCode.bind(this, this.state.current_index)} onSubmit={this.submit} placeholder="edit here"/>
      </div>
      </form>
      </div>
    );
  }
}

export default BillCalculation;
