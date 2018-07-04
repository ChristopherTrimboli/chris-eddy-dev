import React, { Component } from 'react';
import '../css/portfolioSection.css';

class PortfolioSection extends Component {

  radioClick(button){

    const radio = document.getElementById('radio');
    const freshThreadsRadio = document.getElementById('freshThreadsOption');
    const freshThreadsDiv = document.getElementById('freshThreadsCol');
    const bullDogRadio = document.getElementById('bulldogAutoOption');
    const bulldogDiv = document.getElementById('bulldogCol');
    const exokitRadio = document.getElementById('exokitOption');
    const exokitDiv = document.getElementById('exokitCol');

    if(button === 'freshThreads'){
      freshThreadsDiv.hidden = false;
      bulldogDiv.hidden = true;
      exokitDiv.hidden = true;
    }
  }

  render() {
    return (
      <div className="portfolioSection">

        <div className='row pt-4'>
          <div className='col-6'>
            <div id='radio' className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary active">
                <input type="radio" name="options" id="freshThreadsOption" autoComplete="off" onClick={this.radioClick('freshThreads')}/> Fresh-Threads
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="bulldogAutoOption" autoComplete="off"/> Bulldog Autoworks
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="exokitOption" autoComplete="off"/> Exokit Website
              </label>
            </div>
          </div>
        </div>

        <div className='row'>

          <div id='freshThreadsCol' className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <div className="jumbotron jumbotron1">
              <h1 className="display-4">Fresh-Threads</h1>
              <hr className="my-4"/>
                <p>A shopping-cart mock-up that I made... LAMP stack, PHP 7 and mySQL hosted on a AWS Lightsail server.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
          </div>

          <div id='bulldogCol' className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <div className="jumbotron jumbotron2">
              <h1 className="display-4">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                attention to featured content or information.</p>
              <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger
                  container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
          </div>

          <div id='exokitCol' className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <div className="jumbotron jumbotron3">
              <h1 className="display-4">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                attention to featured content or information.</p>
              <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger
                  container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default PortfolioSection;