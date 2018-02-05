import React, { Component } from 'react';
import './GitHubCards.css';

//import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';
import UserTopDefault  from './userTopDefault';
import UserBottomDefault from './userBottomDefault';
import UserRow from './userRow';
import UserRowList from './userRowList';


class App extends Component {
 constructor(props){
    super(props);    
  }
 

  render() {
    return(

      <div>          
          <UserTopDefault /> 
          <UserRowList />
      </div>
      
    );
  }
}

export default App;