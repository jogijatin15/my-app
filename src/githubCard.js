import React, { Component } from 'react';
import logo from './logo.svg';

import './GitHubCards.css';
import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';


class GitHubCard extends Component {

 	constructor(props){
 		super(props);    
  }

  render() {
  
    return(
          <div className="rows toplevel">
              <div className="img-container">
                  <img src={this.props.avatar_url} width="75" />
              </div>

              <div className ="user-container">
                <p className="printname para"><strong>{this.props.name}</strong></p>
                <p className="company para">{this.props.company}</p>
              </div>
          </div>    
    );
  }
}
export default GitHubCard;