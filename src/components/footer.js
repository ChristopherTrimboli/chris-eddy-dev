import React, { Component } from 'react';
import '../css/footer.css';


class Footer extends Component {
  render() {
    return (
      <div className="footerSection">
        <div className='row'>
          <div className='col-12'>
            <p className='copyright'>Chris Eddy <i className="far fa-copyright"/> 2018</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;