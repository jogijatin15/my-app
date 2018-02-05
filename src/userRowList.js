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
  }
  
 
  onClickAddReference(cardsData) {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardsData)
    }));
  }
  
  
  onClickDeleteReference(indexData){   
    this.setState(prevState => ({
      cards: prevState.cards.splice(indexData,1)
    }));    
  }

  render() {
    
    const getState = this.state.cards;
    console.log(getState);

    return(

      <div>
        
        {/* {this.state.cards.map((each,index) => <UserRow key={index.toString()} id={index.toString()} onClick={this.onClickDeleteReference}/>)} */ }

        {/* Both the commands */}
        {this.state.cards.map((each,index) => <UserRow key={index.toString()} id={index.toString()} onClick={this.onClickDeleteReference}/>)}
        
        <UserBottomDefault onClick={this.onClickAddReference} /> 
        
        {/*   {this.props.cardsReference.map((each,index) => <GitHubCard key={index.toString()}avatar_url={each.avatar_url} name={each.name} company={each.company}/>)}  */}
        { /*  <GitHubCard avatar_url={this.props.avatar_url_reference} name={this.props.name_reference} company={this.props.company_reference} />*/}
        {/*   <GitHubCard avatar_url='https://avatars1.githubusercontent.com/u/17865993?v=4' name='Jatin Jogi' company='Cognizant' />*/}
      
      </div>
      
    );
  }
}

export default UserRowList;