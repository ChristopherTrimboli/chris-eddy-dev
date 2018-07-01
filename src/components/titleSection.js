import React, { Component } from 'react';
import '../css/titleSection.css';
import profileImage from '../images/me.png';
import fish from '../images/fish.png';


class TitleSection extends Component {

  componentDidMount(){
    const elem = document.getElementById("fish");
    elem.style.webkittransform = 'scaleX(-1)';
    elem.style.transform = 'scaleX(-1)';
    let pos = 0;
    let limit = window.innerWidth;
    elem.style.top = '50%';
    elem.style.left = '100%';
    let id = setInterval(frame, 10);

    function frame() {
      if (pos == limit) {
        clearInterval(id);
      }
      else {
        pos++;
        elem.style.left = pos + 'px';
      }
    }
  }


  render() {
    return (
      <div className="titleSection d-flex">
        <img src={fish} id='fish' />
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
                Software Developer.
              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default TitleSection;