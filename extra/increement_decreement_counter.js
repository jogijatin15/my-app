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

    this.state = {counter: 0};   

    this.onIncreementClick = this.onIncreementClick.bind(this);
    this.onDecreementClick = this.onDecreementClick.bind(this);

  }
  

  onIncreementClick(){
    this.setState({
      counter: this.state.counter+1
    });

  }

  onDecreementClick(){
    this.setState({
      counter: this.state.counter-1
    });

  }

  render() {

    
    
    return(

      <div>
          <div>
              <button onClick={this.onIncreementClick}>Increement Counter</button>
          </div>
          <div>
              <button onClick={this.onDecreementClick}>Decreement Counter</button>
          </div>
          
          <p>The value of the counter is {this.state.counter}</p>
      </div>


    );
  }
}
export default App;
