https://react-styleguidist.js.org/docs/thirdparties.html#css-modules-with-react-css-modules
https://webpack.js.org/loaders/html-loader/
https://github.com/styleguidist/react-styleguidist/issues/591
https://gorangajic.github.io/react-icons/
https://blog.iansinnott.com/managing-state-and-controlled-form-fields-with-react/


render() {

    return (
      
      <div className="App">
        
        <Welcome name="jatin" />       

          <div class="tokenpage">

              <div class="token-info">
                <h3>Generate Tokens</h3>
                <div class="info">
                  <div>To start posting to QualityHub, you will need to generate a token for each of your applications.</div>
                  <div>-  If you have multiple microservices, each should have its own token.</div>
                  <div>-  If you are using a Concourse pipeline, be sure to use the same name as from your buildConfig.json.</div>
                </div>
              </div>


              <div class="token-container">
                <div class="application-container cont">
                  <label for="name" class="tokenlabel">Application Name</label>
                  <input type="text" name="application" id="application" class="app tokeninput form-control required" />
                  <p class="fail validation-failed space">Application Name cannot contain spaces</p>
                  <p class="fail validation-failed char">Application name cannot contain special characters</p>
                  <p class="fail validation-failed dupes">Duplicate Application Name</p>

                </div>

                <div class="experience-container cont">
                  <label for="name" class="tokenlabel moreinfo" data-container="body" data-toggle="popover" data-placement="top" data-content="And here's some amazing content. It's very engaging. Right?">Experience Name <i class="fa fa-question-circle-o fa-lg" aria-hidden="true"></i></label>

                  <input type="text" name="experience" id="experience" class="exp tokeninput form-control required" />
                </div>

                <div class="email-container cont">
                  <label for="email" class="tokenlabel">Manager's Email Address</label>
                  <input type="text" name="manageremail" id="manageremail" class="email tokeninput form-control required" />
                </div>  
              </div>

              <div class="moreapps" id="more-apps">



              </div>

              <div class="add-application">
                <button id="add-application" name="addapplication" class="addapp btn btn-light">Add Another Application</button>
                <div class="move-icon"><i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i></div>
                
              </div>

              <div class="button-container">
                <button id="cancel" class="btncancelToken tokenbuttons btn btn-light">Cancel</button>
                <button id="generateToken" class="btnsubmitToken tokenbuttons btn btn-primary" disabled>Generate Token</button>
              </div>


            </div>      
 
      </div>
    );
  
  }