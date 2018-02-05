import React, { Component } from 'react';

import './Rows.css';
import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';


class UserTopDefault extends Component {

 	constructor(props){
 		super(props);    
  }

 render() {

    return (
 
          <div className="tokenpage">

              <div className="token-info">
                <h3>Generate Users</h3>                
              </div>

              <div className="token-container">
                
                  <div className="application-container cont">
                    <label htmlFor="name" className="tokenlabel">User Name</label>
                    <input type="text" name="application" id="application" className="app tokeninput form-control required" />
                    <p className="fail validation-failed space">User Name cannot contain spaces</p>
                    <p className="fail validation-failed char">User name cannot contain special characters</p>
                    <p className="fail validation-failed dupes">Duplicate User Name</p>
                  </div>

                  <div className="experience-container cont">
                    <label htmlFor="name" className="tokenlabel moreinfo" data-container="body" data-toggle="popover" data-placement="top" data-content="And here's some amazing content. It's very engaging. Right?">User Group <i className="fa fa-question-circle-o fa-lg" aria-hidden="true"></i></label>
                    <input type="text" name="experience" id="experience" className="exp tokeninput form-control required" />
                  </div>

                  <div className="email-container cont">
                    <label htmlFor="email" className="tokenlabel">Email Address</label>
                    <input type="text" name="manageremail" id="manageremail" className="email tokeninput form-control required" />
                  </div>  
              
              </div>

              


            </div>      
 
      
    );
  
  }



}
export default UserTopDefault;