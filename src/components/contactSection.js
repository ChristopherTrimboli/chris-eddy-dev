import React, { Component } from 'react';
import '../css/contactSection.css';
import lake from '../images/gallery/lake.jpg';
import trail from '../images/gallery/trail.jpg';
import forest from '../images/gallery/forest.jpg';
import view from '../images/gallery/view.jpg';
import champ from '../images/gallery/champ.jpg';
import goose from '../images/gallery/goose.jpg';
import exokitNew from '../images/gallery/exokitNew.PNG';
import react from '../images/gallery/react.jpg';
import '../css/hover-min.css';

class ContactSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalImage: '',
      modalTitle: ''
    };
    this.changeImage = this.changeImage.bind(this)
  }

  changeImage(image, title){
    this.setState({
      modalImage: image,
      modalTitle: title
    });
  }

  render() {
    return (
      <div id='contact' className="contactSection pb-3">
        <div className='row pt-5 pr-2 pl-2 pb-4'>
          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            <h3 className='subHeading display-4'>Contact Me</h3>
            <hr/>
            <div className='p-4'>
              <a href='mailto:chris.eddy.dev@gmail.com' target='_blank' rel="noopener noreferrer">
                <i className="far fa-envelope-open fa-2x mb-3"/>
                <p className='lead'>chris.eddy.dev@gmail.com</p>
              </a>
            </div>

            <div className='p-4'>
              <a href='tel:+16047640869' type="tel" target='_blank' rel="noopener noreferrer">
                <i className="fas fa-phone fa-2x mb-3"/>
                <p className='lead'>604-764-0869</p>
              </a>
            </div>

            <div className='socialRow row'>
              <div className='col-4'>
                <a href='https://github.com/ChrisEddy' target='_blank' rel="noopener noreferrer">
                  <i className="fab fa-github-square fa-2x"/> Github
                </a>
              </div>
              <div className='col-4'>

              </div>
              <div className='col-4'>
                <a href='https://www.linkedin.com/in/chris-eddy-394784160/' target='_blank' rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-2x"/> LinkedIn
                </a>
              </div>
            </div>

          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            <h3 className='subHeading display-4'>Gallery</h3>
            <hr/>
            <div className='row'>
              <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-4'>
                <img src={lake} alt="Lake" onClick={() => {this.changeImage(lake, 'Thetis Lake')}}
                     className="img-thumbnail rounded hvr-grow" data-toggle="modal" data-target="#galleryModal"/>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-4'>
                <img src={view} alt="Trail" onClick={() => {this.changeImage(view, 'A Nice View')}}
                     className="img-thumbnail rounded hvr-grow" data-toggle="modal" data-target="#galleryModal"/>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-4'>
                <img src={forest} alt="Forest" onClick={() => {this.changeImage(forest, 'Pretty Forest')}}
                     className="img-thumbnail rounded hvr-grow" data-toggle="modal" data-target="#galleryModal"/>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-4'>
                <img src={trail} alt="Trail" onClick={() => {this.changeImage(trail, 'Hiking the Trail')}}
                     className="img-thumbnail rounded hvr-grow" data-toggle="modal" data-target="#galleryModal"/>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-4'>
                <img src={champ} alt="Champ" onClick={() => {this.changeImage(champ, 'Ascended')}}
                     className="img-thumbnail rounded hvr-grow" data-toggle="modal" data-target="#galleryModal"/>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-4'>
                <img src={react} alt="React Conference" onClick={() => {this.changeImage(react, 'React Conference Vancouver')}}
                     className="img-thumbnail rounded hvr-grow" data-toggle="modal" data-target="#galleryModal"/>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-4'>
                <img src={goose} alt="Goose Trail" onClick={() => {this.changeImage(goose, 'Galloping Goose')}}
                     className="img-thumbnail rounded hvr-grow" data-toggle="modal" data-target="#galleryModal"/>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-4'>
                <img src={exokitNew} alt="Exokit" onClick={() => {this.changeImage(exokitNew, 'Exokit')}}
                     className="img-thumbnail rounded hvr-grow" data-toggle="modal" data-target="#galleryModal"/>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="galleryModal" tabIndex="-1" role="dialog" aria-labelledby="galleryModal" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="galleryModalTitle">{this.state.modalTitle}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img id='modalImage' src={this.state.modalImage} alt=''/>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ContactSection;