import React, { Component } from 'react';
import logo from './logo.svg';
import './GitHubCards.css';

//import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';
import GitHubCard from './githubCard';


//{this.props.cardsReference.map((each) => <GitHubCard {...each} />)}


class GitHubCardList extends Component {
 constructor(props){
    super(props);

    
  }
  

  
  render() {
    return(

      <div>
        
        {this.props.cardsReference.map((each,index) => <GitHubCard key={index.toString()}avatar_url={each.avatar_url} name={each.name} company={each.company}/>)}


        {/*<GitHubCard avatar_url={this.props.avatar_url_reference} name={this.props.name_reference} company={this.props.company_reference} />*/}
        {/*<GitHubCard avatar_url='https://avatars1.githubusercontent.com/u/17865993?v=4' name='Jatin Jogi' company='Cognizant' />*/}

      </div>
      
    );
  }
}
export default GitHubCardList;