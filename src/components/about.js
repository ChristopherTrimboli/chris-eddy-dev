import React, { Component } from 'react';
import '../css/aboutSection.css';


class AboutSection extends Component {
  render() {
    return (
      <div className="aboutSection">

        <div className='row pt-5'>
          <div className='col-12'>
            <h1 className='display-4'>About Me</h1>
          </div>
        </div>

        <div className='row'>
          <div className='col-6'>
            <h3 className='display-4'>My Life</h3>
          </div>
        </div>

      </div>
    );
  }
}

export default AboutSection;