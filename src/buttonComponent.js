import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';

/*
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
};
<button onClick={() => this.props.buttonClickReference(this.props.increementValue)}>+ {this.props.increementValue}</button>
*/  

  
class ButtonComponent extends Component {

 	constructor(props){
 		super(props);
 		
 		this.doThisOnClick = this.doThisOnClick.bind(this);
 	}
 	
	doThisOnClick() {
  		this.props.buttonClickReference(this.props.increementValue);
  	};  


  
  render() {
  
    return(

      <div>
        <button onClick={this.doThisOnClick}> + {this.props.increementValue}</button>
      
      </div>


    );
  }
}
export default ButtonComponent;