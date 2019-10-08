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
            <p className='lead'>I first got into programming about 4 years ago, doing some basic Python stuff.  I had fun with learning programming and decided to take it further as a career. I went on to study at <a href='http://camosun.ca/' target='_blank' rel="noopener noreferrer">Camosun College</a> in <a href='http://camosun.ca/learn/programs/information-computer-systems/' target='_blank' rel="noopener noreferrer">Information and Computer Systems</a>.</p>
            <p className='lead'>My passion for coding revolves around full-stack web development in Javascript. I enjoy making things work and bringing everything together.</p>
            <p className='lead'>I'm currently employed as a Frontend Developer for <a href='https://www.conetec.com/' target='_blank' rel="noopener noreferrer">ConeTec</a> in Vancouver, BC.</p>
            <p className='lead'>Always learning, always growing.</p>
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
