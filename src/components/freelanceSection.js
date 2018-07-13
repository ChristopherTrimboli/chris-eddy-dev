import React, { Component } from 'react';
import '../css/freelanceSection.css';
import websiteIcon from '../images/websiteIcon.svg'
import networkIcon from '../images/networkIcon.svg';
import responsiveIcon from '../images/responsiveIcon.svg';
import codeIcon from '../images/codeIcon.svg';


class FreelanceSection extends Component {
  render() {
    return (
      <div id='freelancing' className="freelanceSection">

        <div className='row pr-2 pl-2'>
          <div className='col-12'>
            <h3 className='subHeading display-4 pt-5'>Freelancing</h3>
            <hr/>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-4 pl-4'>
            <h3 className='p-4'>Whatever You Need</h3>
            <p className='infoText'>I am offering freelance web development services to help you get whatever you need accomplished.</p>
            <p className='infoText'>I am also open to long-term employment opportunities that are limited to part-time hours.</p>
            <p className='infoText'>I wish to finish school and will not be accepting full-time positions at this time.</p>
            <p className='infoText'>I am currently on the prowl for an internship.</p>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-4 pl-4'>
            <h3 className='p-4'>Big or Small</h3>
            <p className='infoText'>Big or small jobs, I can take a look at your project and help you out.</p>
            <p className='infoText'>Social media struggles? Is your website slow? Having IT problems? I can help.</p>
            <p className='infoText'>I am willing to work remote and/or on-call.</p>
            <p className='infoText'>Reasonably priced, educated and friendly service.</p>
          </div>
        </div>

        <div className='row pt-3 pb-4'>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12 p-2'>
            <img src={websiteIcon} alt='websiteIcon'/>
            <p className='lead'>Website Development</p>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12 p-2'>
            <img src={networkIcon} alt='networkIcon'/>
            <p className='lead'>SEO and Social Media</p>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12 p-2'>
            <img src={responsiveIcon} alt='responsiveIcon' />
            <p className='lead'>Responsive Design</p>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12 p-2'>
            <img src={codeIcon} alt='codeIcon' />
            <p className='lead'>Fixes and Tweaks</p>
          </div>
        </div>



      </div>
    );
  }
}

export default FreelanceSection;