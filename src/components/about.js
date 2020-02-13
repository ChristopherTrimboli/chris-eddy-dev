import React, { Component } from 'react';
import '../css/aboutSection.css';

class AboutSection extends Component {
  render() {
    return (
      <div id='aboutMe' className="aboutSection">

        <div className='row pr-2 pl-2'>

          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>

            <h3 className='subHeading display-4 pt-5'>About Me</h3>
            <hr/>
            <p className='lead'>Passionate, ambitious and professional Software Engineer with 5 years of software development experience.</p>
            <p className='lead'>My area of specialty is in Web Application development.</p>
            <p className="lead">I am skilled in React, Node.js, various Javascript frameworks/libraries, fullstack web programming and SQL databases.</p>
            <p className="lead">My goals for 2020 are to have more fun with Rust and WebAssembly, implement more Typescript code, and maybe go skydiving!</p>
            <p className="lead">Currently, I am living and working in the beautiful city of Vancouver, BC.</p>
            <p className='lead'>I am happily employed with <a href='https://www.ecoation.com/' target='_blank' rel="noopener noreferrer">Ecoation</a> as a Software Engineer working to revolutionize the way humans grow food!</p>
          </div>

          <div className='skillsGrid col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            <i className="mdi mdi-bell"/>

            <h3 className='subHeading display-4 pt-5'>My Skills</h3>
            <hr/>

            <div className='row'>
              <div className='iconCol col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                <i className="fab fa-react fa-4x"/>
                <p>React</p>
              </div>
              <div className='iconCol col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                <i className="fab fa-python fa-4x"/>
                <p>Python</p>
              </div>
              <div className='iconCol col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                <i className="fab fa-node fa-4x"/>
                <p>Node</p>
              </div>
              <div className='iconCol col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                <i className="fab fa-aws fa-4x"/>
                <p>AWS</p>
              </div>
            </div>

            <div className='row pb-5'>
              <div className='iconCol col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                <i className="fab fa-js-square fa-4x"/>
                <p>Javascript</p>
              </div>
              <div className='iconCol col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                <i className="fab fa-html5 fa-4x"/>
                <p>HTML5</p>
              </div>
              <div className='iconCol col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                <i className="fab fa-css3 fa-4x"/>
                <p>CSS3</p>
              </div>
              <div className='iconCol col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                <i className="fab fa-angular fa-4x"/>
                <p>Angular</p>
              </div>
            </div>

            <div className='row pr-4 pl-4 pb-5'>
              <div className='col-12'>
                <span className="badge badge-pill badge-primary m-2">SQL</span>
                <span className="badge badge-pill badge-success m-2">Linux</span>
                <span className="badge badge-pill badge-dark m-2">Bootstrap</span>
                <span className="badge badge-pill badge-warning m-2">Redux</span>
                <span className="badge badge-pill badge-info m-2">Bash</span>
                <span className="badge badge-pill badge-danger m-2">Git</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default AboutSection;
