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
          <div className='col'>

          </div>
        </div>

        <div className='row'>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
            <img src={websiteIcon} alt='websiteIcon'/>
            <p className='lead'>Website Development</p>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
            <img src={networkIcon} alt='networkIcon'/>
            <p className='lead'>SEO and Social Media</p>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
            <img src={responsiveIcon} alt='responsiveIcon' />
            <p className='lead'>Responsive Design</p>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
            <img src={codeIcon} alt='codeIcon' />
            <p className='lead'>Fixes and Tweaks</p>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
          </div>
          <div className='col'>
          </div>
        </div>

      </div>
    );
  }
}

export default FreelanceSection;