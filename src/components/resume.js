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

  signIn(e){
    e.preventDefault();
    console.log('signing in...')
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      console.log('Succesful Sign-In!');
      document.getElementById('passForm').style.border = '1px solid green';
      document.getElementById('emailForm').style.border = '1px solid green';

    })
    .catch(function(error) {
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
      console.log(error);
      })
    }

  render() {
    return (
      <div className="Resume">

      <div className="modal fade bd-example-modal-lg text-left" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content p-2">
          <div className="modal-header">
            <h5 className="modal-title">My Resume</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <br/>
          <h4>Education</h4>
          <h5>Information and Computer Systems Technology</h5>
          <p>Camosun College 2017 – Now</p>
          <p>I am currently in the 2nd year of the diploma program.</p>
          <p>Info: <a href='http://camosun.ca/learn/programs/information-computer-systems/'>http://camosun.ca/learn/programs/information-computer-systems/</a></p>

          <h4>Work Experience</h4>
          <h5>Full-Stack Web Developer</h5>
          <p>Exokit, VR/AR JavaScript Engine | May 2018 – Now</p>
          <p>I have been working as an open-source contributor on various projects for Exokit.
Exokit is a tech start-up with team members currently working remotely across North America.
</p>
<p>Exokit Documentation Site: <a href='https://docs.webmr.io/'>https://docs.webmr.io/</a></p>

                    

I have 2 other big projects for Exokit that are currently not-released.
Freelance Web Developer | New Island Highway, local political organization| July – Aug 2018
New Island Highway started with a client’s vision of building a bridge across to Vancouver and Salt
Spring Island. A notable technology point in the website is the voting section. I used Firebase as the
database and prevent users from voting more then once. Frontend is made in React and uses Bootstrap.
New Island Highway Site: https://www.new-island-highway.ca/
Freelance Web Developer | Bulldog Autoworks, mechanic shop in Langford | Jan – Feb 2018
I designed and built the entire website of their company. This included using Bootstrap and HTML/CSS
with some JavaScript to handle the Google reviews section. This website was my first gig. I’ve grown
since as a developer, but it is still noteworthy I think.
Bulldog Autoworks Site: https://bulldogautoworks.ca/
Noteworthy Side-Projects I Made
Fresh-Threads | Shopping Cart Web App | PHP, MySQL, Bootstrap, JavaScript, AWS
Fresh-Threads Site: http://www.fresh-threads.ca/fresh-threads/php/shop/shop.php
My Portfolio Website | React, Bootstrap, AWS, Font Awesome
Portfolio Site: https://www.chris-eddy.ca/
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
              <button data-toggle="modal" data-target=".bd-example-modal-lg" type="submit" className="btn btn-primary" onClick={this.signIn}>Sign-In</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default Resume;
