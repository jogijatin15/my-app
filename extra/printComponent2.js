import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';

  
class PrintComponent extends Component {
  
  render() {
  
    return(

      <div>
        The value of the counter is {this.props.printingReference}
      </div>

    );
  }
}
export default PrintComponent;