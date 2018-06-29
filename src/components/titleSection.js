import React, { Component } from 'react';
import '../css/titleSection.css';
import profileImage from '../images/me.png';


class TitleSection extends Component {
  render() {
    return (
      <div className="titleSection d-flex">
        <div className='centeredDiv justify-content-center align-self-center'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center align-self-center'>
              <img src={profileImage} className='profileImage' alt='profileImage'/>
            </div>
            <div className='col-12 d-flex justify-content-center align-self-center'>
              <h1 className='display-4'>Chris Eddy</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleSection;