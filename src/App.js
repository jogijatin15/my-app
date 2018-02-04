import React, { Component } from 'react';
import logo from './logo.svg';
import './GitHubCards.css';

//import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';
import GitHubCard from './githubCard';
import GitHubCardInput from './githubCardInput';
import GitHubCardList from './githubCardList';


/*
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
};
<button onClick={() => this.props.buttonClickReference(this.props.increementValue)}>+ {this.props.increementValue}</button>
 
*/  


class App extends Component {
 constructor(props){
    super(props);

    this.state = 
    {
     cards: [
        // { avatar_url: 'https://avatars1.githubusercontent.com/u/17865993?v=4',
        //   name: 'Jatin Jogi',
        //   company: 'Cognizant'}
        
    
    ]
  }

  this.onClickReference = this.onClickReference.bind(this);

    
  }
  
  //This reference becomes a prop inside the GitHubCardInput Component. 
  onClickReference(cardsData) {
    //console.log(cardsData);

    this.setState(prevState => ({
      cards: prevState.cards.concat(cardsData)

    }));

  }
 

  render() {
    return(

      <div>

          <GitHubCardInput onClick={this.onClickReference}/>
          
          {/*<GitHubCardList avatar_url_reference={this.state.avatar_url} name_reference={this.state.name} company_reference={this.state.company} />*/}
          <GitHubCardList cardsReference={this.state.cards} />       
      </div>
      
    );
  }
}
export default App;