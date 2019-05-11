import React, { Component } from 'react';
import '../css/resume.css';
import firebase from 'firebase';

class Resume extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedOn: false,
      email: '',
      password: '',
    };
    this.signIn = this.signIn.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.toggleElement = this.toggleElement.bind(this);
  }

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDccju9d-s0dFtMSIb4BSTwjDqatvOWjaA",
      authDomain: "portfilio-37246.firebaseapp.com",
      databaseURL: "https://portfilio.firebaseio.com",
      projectId: "portfilio-37246",
      storageBucket: "portfilio-37246.appspot.com",
      messagingSenderId: "711328526240"
    };
    firebase.initializeApp(config);
    this.toggleElement('spinner', true);
    this.toggleElement('loginButton', false);
    this.toggleElement('resumeButton', true);
  }

  handleEmail(event){
    this.setState({email: event.target.value});
    document.getElementById('passForm').style.border = '1px solid #ced4da';
    document.getElementById('emailForm').style.border = '1px solid #ced4da';
  }

  handlePassword(event){
    this.setState({password: event.target.value});
    document.getElementById('passForm').style.border = '1px solid #ced4da';
    document.getElementById('emailForm').style.border = '1px solid #ced4da';
  }

  toggleElement(elementID, boolean){
    let element = document.getElementById(elementID);
    if(element){
      element.hidden = boolean;
    }
    else{
      console.log('Element does not exist')
    }
  }

  signIn(e){
    e.preventDefault();
    this.toggleElement('spinner', false);
    this.toggleElement('loginButton', true);
    this.toggleElement('resumeButton', true);
    console.log('Signing In...')
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      console.log('Succesful Sign-In!');
      document.getElementById('passForm').style.border = '1px solid green';
      document.getElementById('emailForm').style.border = '1px solid green';
      this.toggleElement('spinner', true);
      this.toggleElement('loginButton', true);
      this.toggleElement('resumeButton', false);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        document.getElementById('passForm').style.border = '1px solid red';
        document.getElementById('emailForm').style.border = '1px solid red';
      }
      if (errorCode === 'auth/user-not-found') {
        document.getElementById('passForm').style.borderColor = 'red';
        document.getElementById('emailForm').style.borderColor = 'red';
      }
      if (errorCode === 'auth/invalid-email') {
        document.getElementById('passForm').style.borderColor = 'red';
        document.getElementById('emailForm').style.borderColor = 'red';
      }
      else {
        console.log(errorMessage);
      }
      this.toggleElement('spinner', true);
      this.toggleElement('loginButton', false);
      this.toggleElement('resumeButton', true);
      console.log(error);
      })
    }

  render() {
    return (
      <div className="Resume">

      <div className="modal fade bd-example-modal-lg text-left" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content p-2">
          <div className="modal-header">
            <h5 className="modal-title">Chris Eddy's Resume</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <br/>
          <h4>Education</h4>
          <h5>Information and Computer Systems Technology</h5>
          <p>Camosun College 2017 – Now</p>
          <p>I am currently in the 2nd year of the diploma program.</p>
          <p>Info: <a href='http://camosun.ca/learn/programs/information-computer-systems/'>http://camosun.ca/learn/programs/information-computer-systems/</a></p>
          <hr/>

          <h4>Work Experience</h4>

          <h5>Full-Stack Web Developer</h5>
          <p>Exokit, VR/AR JavaScript Engine | May 2018 – Now</p>
          <p>I have been working as an open-source contributor on various projects for Exokit.
          Exokit is a tech start-up with team members currently working remotely across North America.
          </p>
          <p>Exokit Documentation Site: <a href='https://docs.webmr.io/'>https://docs.webmr.io/</a></p>
          <p>I have 2 other big projects for Exokit that are currently not-released.</p>
          <hr/>

          <h5>Freelance Web Developer</h5>
          <p>New Island Highway, local political organization| July – Aug 2018</p>
          <p>New Island Highway started with a client’s vision of building a bridge across to Vancouver and Salt
          Spring Island.</p>
          <p> A notable technology point in the website is the voting section. I used Firebase as the
database and prevent users from voting more then once. Frontend is made in React and uses Bootstrap.</p>
          <p></p>
          <p>New Island Highway Site: <a href='https://www.new-island-highway.ca/'>https://www.new-island-highway.ca/</a></p>
          <hr/>

          <h5>Freelance Web Developer</h5>
          <p>Bulldog Autoworks, mechanic shop in Langford | Jan – Feb 2018</p>
          <p>I designed and built the entire website of their company. This included using Bootstrap and HTML/CSS
with some JavaScript to handle the Google reviews section.</p>
          <p>This website was my first gig. I’ve grown since as a developer, but it is still noteworthy I think.</p>
          <p></p>
          <p>Bulldog Autoworks Site: <a href='https://bulldogautoworks.ca/'>https://bulldogautoworks.ca/</a></p>
          <hr/>

          <h4>Noteworthy Side-Projects</h4>
          <p>Fresh-Threads | Shopping Cart Web App | PHP, MySQL, Bootstrap, JavaScript, AWS</p>
          <p>Fresh-Threads Site: <a href='http://www.fresh-threads.ca/fresh-threads/php/shop/shop.php'>http://www.fresh-threads.ca/fresh-threads/php/shop/shop.php</a></p>
          <p>My Portfolio Website | React, Bootstrap, AWS, Font Awesome</p>
          <p>Portfolio Site: <a href='https://www.chris-eddy.ca/'>https://www.chris-eddy.ca/</a></p>
          </div>
        </div>
      </div>

        <div className='row pr-2 pl-2'>
          <div className='col-12'>
            <h3 className='subHeading display-4 pt-5'>Resume</h3>
            <hr/>
          </div>
        </div>

        <div className='row'>

          <div className='col'>
            <br/>
            <form className='justify-content-center'>
            <p>Authenticate to view my personal resume.</p>
              <div className="form-group pl-3 pr-3">
                <div className='row'>
                  <div className='col'>
                    <input id='emailForm' onChange={this.handleEmail} value={this.state.email} type="email" className="form-control d-inline" aria-describedby="emailHelp"
                           placeholder="Enter Email"/>
                  </div>
                </div>
              </div>
              <div className="form-group pl-3 pr-3">
                <div className='row justify-content-center'>
                  <div className='col'>
                    <input id='passForm' onChange={this.handlePassword} value={this.state.password} type="password" className="form-control d-inline" placeholder="Password"/>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                <button id='resumeButton' data-toggle="modal" data-target=".bd-example-modal-lg" type="button" className="btn btn-primary">View Resume</button>
                <button id='loginButton' type="submit" className="btn btn-primary" onClick={this.signIn}>Sign-In</button>
                <div id='spinner' className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default Resume;
