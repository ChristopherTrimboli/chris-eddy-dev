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
      user: null
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
      console.log('Succesful Sign-In!')
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

        <div className='row pr-2 pl-2'>
          <div className='col-12'>
            <h3 className='subHeading display-4 pt-5'>Resume</h3>
            <hr/>
          </div>
        </div>

        <div className='row'>

          <div className='col'>
            <h4>Sign-In and view my Resume!</h4>
            <br/>
            <br/>
            <form className='justify-content-center'>
              <div className="form-group pl-3 pr-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <div className='row'>
                  <div className='col'>
                    <input id='emailForm' onChange={this.handleEmail} value={this.state.email} type="email" className="form-control d-inline" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                  </div>
                </div>
              </div>
              <div className="form-group pl-3 pr-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <div className='row justify-content-center'>
                  <div className='col'>
                    <input id='passForm' onChange={this.handlePassword} value={this.state.password} type="password" className="form-control d-inline" placeholder="Password"/>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.signIn}>Sign-In</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default Resume;
