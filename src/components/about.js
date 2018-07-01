import React, { Component } from 'react';
import '../css/aboutSection.css';


class AboutSection extends Component {
  render() {
    return (
      <div className="aboutSection">

        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            <h3 className='subHeading display-4 pt-5'>About Me</h3>
            <hr/>
            <p className='lead'>I first got into programming about 2 years ago, doing some basic Python stuff.  I had fun with learning programming and decided to take it further as a career. I am now studying in my 2nd year of Information and Computer Systems at Camosun College.</p>
            <p className='lead'></p>
            <p className='lead'></p>
            <p className='lead'>Proudly born and raised in British Columbia. Im all about the Vancouver Island life and enjoy hiking the trails and coastlines.</p>
            <p className='lead'>My major long term goals include: Finishing my diploma at Camosun College. Getting a Suburu WRX STI. Getting back into snowboarding. And writing some damn good code.</p>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            <h3 className='subHeading display-4 pt-5'>My Skills</h3>
            <ul>
              <li>Web Development/Design</li>
              <ul>
                <li>React</li>
                <li>Bootstrap v4</li>
                <li>Node</li>
                <li>Amazon Web Services</li>
                <li>Javascript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>PHP 7</li>
                <li>Responsive Design</li>
              </ul>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default AboutSection;