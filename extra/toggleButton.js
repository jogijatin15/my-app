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
    this.state =  {
      toggleValue : true
    };

     this.onClickButton = this.onClickButton.bind(this);
  }


  
  onClickButton() {
    let value = this.state.toggleValue=='true' ? 'false' : 'true';
      this.setState({
        toggleValue: value
        });
  }


  render() {
    return(
      <button className="primarybtn btn btn-primary" id="primary" onClick={this.onClickButton}>
        {this.state.toggleValue =='true'? "ON" : "OFF"}
      </button>
    );
  }  

}

export default App;
