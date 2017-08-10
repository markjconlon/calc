import React, {Component} from 'react';

class Calc extends Component {
  constructor (props){
    super()
    this.state = {
      result: ""
    }
  }

  changeResult(e){
    let firstNum = parseInt(document.getElementById('first').value);
    let secondNum = parseInt(document.getElementById('second').value);
    this.setState({
      result: (firstNum + secondNum)
    });
  }
  render() {
    let displayedResult = ""
    if (isNaN(this.state.result)) {
      displayedResult = "Enter a number in each field."
    } else {
      displayedResult = this.state.result
    }
    return(
      <div className="container">
        <h1>Add with React!</h1>

        <div onChange={(e) => this.changeResult(e)} className= "add">
          <input id="first" type="text" />
          <span>+</span>
          <input id="second" type="text" />
          <span>=</span>
          <h3>{displayedResult}</h3>
        </div>
      </div>
    )
  }
}

export default Calc;
