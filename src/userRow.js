import React, { Component } from 'react';
import './Rows.css';
import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';


class UserRow extends Component {

 	constructor(props){
 		super(props);

    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);        
  }

  onClickDeleteButton(event){
     var elem = event.target.parentElement.parentElement;
     var elem_index = elem.getAttribute("id");
    this.props.onClick(elem_index);
  }

  render() {
  
    return(
         
         
          <div className="starting dyrow" id={this.props.id}>
                
                  <div className="application-container cont">
                    <label htmlFor="name" className="tokenlabel">User Name</label>
                    <input type="text" name="application" id="application" className="app tokeninput form-control required"/>
                    <p className="fail validation-failed sapce">User Name cannot contain spaces</p>
                    <p className="fail validation-failed char">User name cannot contain special characters</p>
                    <p className="fail validation-failed dupes">Duplicate User Name</p>
                  </div>

                  <div className="experience-container cont">
                    <label htmlFor="name" className="tokenlabel">User Group</label>
                    <input type="text" name="experience" id="experience" className="exp tokeninput form-control required" />
                  </div>
                  
                  <div className="delete-icon" onClick={this.onClickDeleteButton}>
                    <i className="fa fa-minus fa-2x" aria-hidden="true"></i>
                  </div>

                 
                               
          </div>




    );
  }
}
export default UserRow;