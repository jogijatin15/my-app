import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
};

function Display(props) {
  const temp = props.mydata.map((each,index) =>
    <div key={index}>
      <p><strong>{each.id} {' ----- '} {each.name}</strong> {each.lastname}</p>
    </div>
  );
  return temp
};



const mydata = [
    {id:"1", name:"jatin", lastname: "jogi"},
    {id:"2", name:"john",  lastname: "smith"}
];
  
class App extends Component {
  render() {
    return(
      <Display mydata={mydata} />


    );
  }
}
export default App;
