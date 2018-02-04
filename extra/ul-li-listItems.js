import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
};


function ListItems(props) {
  const numbers = props.numbers;
  const returnNumbers = numbers.map((each) =>
    <div className="my"><ul><li>{each}</li></ul></div>
  );

  return returnNumbers

};

const numbers = [1,2,3];
  
class App extends Component {

  render() {
    return(

      <ListItems numbers={numbers} />
    );
  }


  

}

export default App;
