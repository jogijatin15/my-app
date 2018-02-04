import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';
import ButtonComponent from './buttonComponent';
import PrintComponent from './printComponent';

  
class App extends Component {
  constructor(props) {

    super(props);
    this.state = {counter: 0};   
    this.IncreementCounter = this.IncreementCounter.bind(this);
  }
  

  IncreementCounter(increementValue){
    const temp = this.state.counter + increementValue;
    this.setState({
      counter: temp
    });
  }


  render() {
    return(

      <div>
          <ButtonComponent buttonClickReference={this.IncreementCounter} increementValue={10} />
          
          <ButtonComponent buttonClickReference={this.IncreementCounter} increementValue={50} />
          
          <PrintComponent printingReference = {this.state.counter}/>    
      </div>
    );
  }
}
export default App;