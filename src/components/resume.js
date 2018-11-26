import React, { Component } from 'react';
import '../css/resume.css';

class Resume extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedOn: false
    };
    this.signIn = this.signIn.bind(this)
  }

  signIn(){
    console.log('signing in...')
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
            <small>Email me for credentials</small>
            <br/>
            <br/>

            <form>
              <div className="form-group pl-5 pr-5">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email"/>
              </div>
              <div className="form-group pl-5 pr-5">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
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