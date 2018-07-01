import React, { Component } from 'react';
import '../css/aboutSection.css';


class AboutSection extends Component {
  render() {
    return (
      <div className="aboutSection">

        <div className='row pt-4'>
          <div className='col-12'>
            <h1 className='display-4'>About Me</h1>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <h3 className='display-4 pt-5'>My Life</h3>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <h3 className='display-4 pt-5'>My Skills</h3>
          </div>
        </div>

      </div>
    );
  }
}

export default AboutSection;