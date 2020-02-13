import React, { Component } from 'react';
import '../css/titleSection.css';
import profileImage from '../images/me.jpg';

class TitleSection extends Component {

  jumpTo(section){
    let div = document.getElementById(section);
    let distanceToTop = div.getBoundingClientRect().top;
    window.scrollBy({
      top: distanceToTop - 50, // could be negative value
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div id='titleSection' className="titleSection d-flex">

        <div className='centeredDiv justify-content-center align-self-center'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center align-self-center'>
              <img src={profileImage} className='profileImage' alt='profileImage'/>
            </div>
            <div className='col-12 d-flex justify-content-center align-self-center'>
              <h1 className='display-4'>Chris Eddy</h1>
            </div>
            <div className='col-12 d-flex justify-content-center align-self-center'>
              <p className='lead'>
                Software Engineer
              </p>
            </div>
            <div className='col-12 d-flex justify-content-center align-self-center'>
              <p className='locationText'>
                Vancouver, BC
              </p>
            </div>
          </div>
        </div>
          <i className="fas fa-angle-down" onClick={() => {this.jumpTo('aboutMe')}}/>
      </div>
    );
  }
}

export default TitleSection;
