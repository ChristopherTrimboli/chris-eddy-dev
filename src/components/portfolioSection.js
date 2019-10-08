import React, { Component } from 'react';
import '../css/portfolioSection.css';

class PortfolioSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      siteShown: "exokit"
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      siteShown: event.target.value
    });

    const solarSystemDiv = document.getElementById('solarSystemCol');
    const exokitDiv = document.getElementById('exokitCol');
    const taskoliDiv = document.getElementById('taskoliCol');

    if(event.target.value === 'solarsystem'){
      solarSystemDiv.hidden = false;
      exokitDiv.hidden = true;
      taskoliDiv.hidden = true;
    }
    if(event.target.value === 'exokit'){
      solarSystemDiv.hidden = true;
      exokitDiv.hidden = false;
      taskoliDiv.hidden = true;
    }
    if(event.target.value === 'taskoli'){
      solarSystemDiv.hidden = true;
      exokitDiv.hidden = true;
      taskoliDiv.hidden = false;
    }

  }

  componentDidMount(){
    const solarSystemDiv = document.getElementById('solarSystemCol');
    const exokitDiv = document.getElementById('exokitCol');
    const taskoliDiv = document.getElementById('taskoliCol');
    solarSystemDiv.hidden = true;
    exokitDiv.hidden = false;
    taskoliDiv.hidden = true;
  }

  render() {

    return (
      <div id='portfolio' className="portfolioSection">
        <div className='row pt-5 pr-2 pl-2 pb-5'>

          <div className='portfilioText col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4'>
            <h3 className='subHeading display-4'>My Portfolio</h3>
            <hr/>
            <p className='lead'>
              These projects are a collection of my top three public projects I have made to date.
            </p>
            <p className='lead'>
              Feel free to take a gander and have a peek. Each site has an accompanied Github link if you would like to see the code.
            </p>
            <p className='lead'>
              My Github ranges from fun stuff to more serious professional projects.
            </p>
            <p className='lead'>
              If you want to see what im currently working on, visit my <a href='https://github.com/ChrisEddy' target='_blank' rel="noopener noreferrer">Github</a> and take a look at my other projects.
            </p>
            <p className='lead'>
              Most professional work I've done is not able to be presented online like this, so if you would like my resume and more information about my work history, contact me.
            </p>
          </div>

          <div id='solarSystemCol' className='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
            <h4>Navigate</h4>
            <div className="btn-group pb-1" data-toggle="buttons">
              <button type="button" className="btn btn-success focus active" aria-pressed='true' value='solarsystem' onClick={ this.handleChange }>Solar System</button>
              <button type="button" className="btn btn-secondary" value='exokit' onClick={ this.handleChange }>Exokit</button>
              <button type="button" className="btn btn-primary" value='taskoli' onClick={ this.handleChange }>Taskoli</button>
            </div>
            <div className="jumbotron jumbotron1"/>
            <h3>Three.js + WebVR Solar System</h3>
            <p className='text-left'>This is a fun project I played with that utilizes Three.js for the 3D rendering and WebVR for the VR support. 100% Javascript and runs in Browser. Was lots of fun to make, in VR you can fly around.</p>
            <a className="btn btn-primary btn-lg mr-2" href="https://chriseddy.github.io/threejs-webvr-solarsystem/" role="button" target='_blank' rel="noopener noreferrer">Visit Website</a>
            <a className="btn btn-secondary btn-lg" href="https://github.com/ChrisEddy/threejs-webvr-solarsystem" role="button" target='_blank' rel="noopener noreferrer">Github Repo</a>
          </div>

          <div id='exokitCol' className='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
            <h4>Navigate</h4>
            <div className="btn-group pb-1" data-toggle="buttons">
              <button type="button" className="btn btn-success" value='solarsystem' aria-pressed='false' onClick={ this.handleChange }>Solar System</button>
              <button type="button" className="btn btn-secondary focus active" aria-pressed='true' value='exokit' onClick={ this.handleChange }>Exokit
              </button>
              <button type="button" className="btn btn-primary" value='taskoli' aria-pressed='false' onClick={ this.handleChange }>Taskoli</button>
            </div>
            <div className="jumbotron jumbotron2"/>
            <h3>Exokit Landing Page</h3>
            <p className='text-left'>I created the frontend for Exokit's landing page. It features custom parralax code for moving elements on scroll. Design comes from a designer. Three.js is used for the 3D scenes. Exokit is a 3D VR/AR company who specialzes in bringing VR/AR to the web.
            </p>
            <a className="btn btn-primary btn-lg mr-2" href="https://exokit.org/" role="button" target='_blank' rel="noopener noreferrer">Visit Website</a>
            <a className="btn btn-secondary btn-lg" href="https://github.com/webmixedreality/webmr-docs" role="button" target='_blank' rel="noopener noreferrer">Github Repo</a>
          </div>

          <div id='taskoliCol' className='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
            <h4>Navigate</h4>
            <div className="btn-group pb-1" data-toggle="buttons">
              <button type="button" className="btn btn-success" value='solarsystem' aria-pressed='false' onClick={ this.handleChange }>Solar System</button>
              <button type="button" className="btn btn-secondary" value='exokit' aria-pressed='false' onClick={ this.handleChange }>Exokit</button>
              <button type="button" className="btn btn-primary focus active" value='taskoli' aria-pressed='true' onClick={ this.handleChange }>Taskoli
              </button>
            </div>
            <div className="jumbotron jumbotron3"/>
            <h3>Taskoli</h3>
            <p className='text-left'>I did some work for Taskoli. I rewrote their UI/Frontend from designer mockups, instant messaging, emails, user account creation, CSS refactors, and more. This was very a full-stack job, did lots of everything while focusing on the UI. Built in Angular and Node with MariaDB.</p>
            <a className="btn btn-primary btn-lg mr-2" href="http://dev.taskoli.com/" role="button" target='_blank' rel="noopener noreferrer">Visit Website</a>
            <span className="btn btn-secondary btn-lg disabled" href="" role="button">Code is Private</span>
          </div>

        </div>
      </div>
    );
  }
}

export default PortfolioSection;
