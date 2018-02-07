import React, { Component } from 'react';
import './GitHubCards.css';
import './bootstrap.min.css';
import GitHubCard from './githubCard';
import UserRow from './userRow';
import UserBottomDefault from './userBottomDefault';



class UserRowList extends Component {
 constructor(props){
    super(props);
    this.state = {

      cards:[        
        //{row: 1}
      ]    
    }
    
    this.onClickAddReference = this.onClickAddReference.bind(this);
    this.onClickDeleteReference = this.onClickDeleteReference.bind(this);
    this.onChangeApplicationTextBoxReference = this.onChangeApplicationTextBoxReference.bind(this);
    this.onChangeExperienceTextBoxReference = this.onChangeExperienceTextBoxReference.bind(this);
    this.onChangeTextBoxReference = this.onChangeTextBoxReference.bind(this);

  }
  
 
  onClickAddReference(cardsData) {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardsData)
    }));
  }
  
  onClickDeleteReference(indexData){
    
    const currentState = this.state.cards;
    indexData = parseInt(indexData);
    currentState.splice(indexData,1);   
    
    this.setState({
      cards: currentState
    })
  }


  onChangeApplicationTextBoxReference(ind, app) {
    console.log(ind);
    console.log(app);
    const currentState = this.state.cards;

    currentState[ind].application = app;

    console.log(currentState);

    this.setState({
      cards: currentState
    })    
  }


   onChangeExperienceTextBoxReference(ind, exp) {
    console.log(ind);
    console.log(exp);
    const currentState = this.state.cards;

    currentState[ind].experience = exp;

    console.log(currentState);

    this.setState({
      cards: currentState
    })    
  }

  onChangeTextBoxReference(elem_index, type, enteredValue) {
    console.log(elem_index);
    console.log(type);
    console.log(enteredValue);

    const currentState = this.state.cards;
    if (type == "application") {
        currentState[elem_index].application = enteredValue;
    } else {
        currentState[elem_index].experience = enteredValue;
    }

    console.log(currentState);
    console.table(currentState);

    this.setState({
      cards: currentState
    })    
  }


  render() {

      let temp = this.state.cards;
      console.log(temp);

    return(

      <div>
        

        {this.state.cards.map((each,index) => 

          <UserRow key={index} id={index} appvalue={each.application} expvalue={each.experience}
          
          onClick={this.onClickDeleteReference} 
          onChange={this.onChangeTextBoxReference} 
          
          
          />)}
        <UserBottomDefault onClick={this.onClickAddReference} />      
       
      
      </div>
      
    );
  }
}

export default UserRowList;