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

    this.state = {
      textFieldValue: ' '
    };

    this.onUserInput = this.onUserInput.bind(this); 

  }

  onUserInput(event){
    this.setState(
      {textFieldValue: event.target.value}
    );
  }


  render() {
    return(
      <div className="app-container">
          <label htmlFor="name" className="tokenlabel">Application Name</label>
          <input name="user" id="user" className="app tokeninput form-control required" value={this.state.textFieldValue} onChange={this.onUserInput} />
      </div> 
    );
  }
}
export default App;
