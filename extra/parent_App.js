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
  

  IncreementCounter(){
    this.setState({
      counter: this.state.counter+1
    });
  }


  render() {
    return(

      <div>
          <ButtonComponent buttonClickReference={this.IncreementCounter}/>
          <PrintComponent printingReference = {this.state.counter}/>    
      </div>
    );
  }
}
export default App;