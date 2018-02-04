import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
};


  

  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {temperature: '10'};   

    this.checkBoilingPoint = this.checkBoilingPoint.bind(this);
  }
  

  checkBoilingPoint(event){
    this.setState({
      temperature: event.target.value
    });

  }


  render() {

    const scaleNames = {
      unit1: 'Celsius',
      unit2: 'Fahrenheit'
    };
    
    const unit = this.props.unit;
    
    return(

      <div className="email-container cont">
          <label for="email" className="tokenlabel">Enter temperature in {scaleNames.[unit]}</label>
          <input type="text" value={this.state.temperature} onChange={this.checkBoilingPoint} name="manageremail" id="manageremail" className="email tokeninput form-control required" />
          
          <label for="email" className="tokenlabel">Enter temperature in {scaleNames.[unit]}</label>
          <input type="text" value={this.state.temperature} onChange={this.checkBoilingPoint} name="manageremail" id="manageremail-2" className="email tokeninput form-control required" />
          <p>{this.state.temperature >= 100 ? 'Water would boil at this temperature' : ' '}</p>

      </div> 
      


    );
  }
}
export default App;
