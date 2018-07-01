import React, { Component } from 'react';
import '../css/portfolioSection.css';


class PortfolioSection extends Component {
  render() {
    return (
      <div className="portfolioSection">
        <div className='row pt-4'>
          <div className='col-12'>
            <h1 className='display-4'>My Portfolio</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioSection;