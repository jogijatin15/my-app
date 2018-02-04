import React, { Component } from 'react';
import logo from './logo.svg';

import './GitHubCards.css';
import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';
import axios from 'axios';

 
class GitHubCardInput extends Component {

 	constructor(props){
 		super(props);
    this.state = {
      user:''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);

 	}

  onInputChange(event) {
    this.setState({      
      user: event.target.value
    });
  }

  onInputSubmit(){
    const currentUser = this.state.user;
    const url = 'https://api.github.com/users/'+currentUser;


    axios.get(url).then(response => {
      this.props.onClick(response.data);
     
     // console.log(response);
      
    });

    // console.log(currentUser);
    // console.log(url);
  }
 
  render() {
  
    return(
      
      <div className="toplevel">
                  
          <div className="form-container">            
              <input type="text" id="userid" className="userid form-control" onChange={this.onInputChange} value={this.state.user} />
              <button id="submit" className="submit btn btn-primary" onClick={this.onInputSubmit}>Submit</button>
          </div>

      </div>
      

    );
  }
}
export default GitHubCardInput;