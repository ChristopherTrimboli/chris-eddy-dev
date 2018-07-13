import React, { Component } from 'react';
import '../css/titleSection.css';
import profileImage from '../images/me.png';
import '../css/Hover-master/css/hover.css';

class TitleSection extends Component {

  // componentDidMount(){
  //   const fish = document.getElementById("fish");
  //   let x = 0;
  //   let y = 100;
  //
  //   let direction = 'right';
  //   fish.style.top = '15%';
  //   let swimDown = false;
  //
  //   setInterval(swim, 5);
  //
  //
  //   function swim(){
  //     let screenWidth = window.innerWidth - 150;
  //     let screenHeightLimit = window.innerHeight - 200;
  //
  //     // y = (Math.sin(x)) * 100;
  //
  //     if(x <= screenWidth && direction === 'right'){
  //       fish.style.webkittransform = 'scaleX(-1)';
  //       fish.style.transform = 'scaleX(-1)';
  //       x++;
  //
  //       if(swimDown === false){
  //         // fish.style.transform = 'skew(15deg, 15deg)';
  //         y--;
  //         if(y === 0){
  //           swimDown = true;
  //         }
  //       }
  //       else{
  //         y++;
  //         if(y === screenHeightLimit){
  //           swimDown = false;
  //         }
  //       }
  //
  //       fish.style.top = y + 'px';
  //       fish.style.left = x + 'px';
  //     }
  //     else{
  //       direction = 'left';
  //     }
  //     if(x >= 1 && direction === 'left'){
  //       fish.style.webkittransform = 'scaleX(1)';
  //       fish.style.transform = 'scaleX(1)';
  //       x--;
  //       fish.style.left = x + 'px';
  //     }
  //     else{
  //       direction = 'right';
  //     }
  //
  //   }
  // }

  jumpTo(section){
    let div = document.getElementById(section);
    let distanceToTop = div.getBoundingClientRect().top;
    window.scrollBy(0,(distanceToTop - 50));
    console.log(distanceToTop);
  }

  render() {
    return (
      <div id='titleSection' className="titleSection d-flex">

          {/*<img src={fish} id='fish' alt='fish'/>*/}

        <div className='centeredDiv justify-content-center align-self-center'>
          <p>[ This site is under development.]</p>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center align-self-center'>
              <img src={profileImage} className='profileImage hvr-bob' alt='profileImage'/>
            </div>
            <div className='col-12 d-flex justify-content-center align-self-center'>
              <h1 className='display-4'>Chris Eddy</h1>
            </div>
            <div className='col-12 d-flex justify-content-center align-self-center'>
              <p className='lead'>
                Software Developer
              </p>
            </div>
            <div className='col-12 d-flex justify-content-center align-self-center'>
              <p className='locationText'>
                Victoria, B.C. | Camosun College
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