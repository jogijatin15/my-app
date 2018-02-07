import React, { Component } from 'react';


import './Rows.css';
import './fa/css/font-awesome.min.css';
import './bootstrap.min.css';


class UserBottomDefault extends Component {

 	constructor(props){
 		super(props);

    this.onClickAddButton = this.onClickAddButton.bind(this);

  }


  onClickAddButton() {
    //const rowValue = new Date().toLocaleTimeString();
    const rowValue = Math.floor(Math.random() * 9999);
    
    const newEntry = {
      row : rowValue,
      application: ' ',
      experience: ' '};
    this.props.onClick(newEntry);
  }

  

 render() {

    return (
 
          <div className="starting">

              <div className="add-application">
                  <button id="add-application" name="addapplication" className="addapp btn btn-light" onClick={this.onClickAddButton}>Add Another Userdataset</button>
                  <div className="move-icon"><i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i></div>
                
              </div>

              <div className="button-container">
                  <button id="cancel" className="btncancelToken tokenbuttons btn btn-light">Cancel</button>
                  <button id="generateToken" className="btnsubmitToken tokenbuttons btn btn-primary">Generate User</button>
              </div>


            </div>      
 
      
    );
  
  }

}
export default UserBottomDefault;