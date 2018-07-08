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

    const freshThreadsDiv = document.getElementById('freshThreadsCol');
    const bulldogDiv = document.getElementById('bulldogCol');
    const exokitDiv = document.getElementById('exokitCol');

    if(event.target.value === 'freshthreads'){
      freshThreadsDiv.hidden = false;
      bulldogDiv.hidden = true;
      exokitDiv.hidden = true;
    }
    if(event.target.value === 'bulldog'){
      freshThreadsDiv.hidden = true;
      bulldogDiv.hidden = false;
      exokitDiv.hidden = true;
    }
    if(event.target.value === 'exokit'){
      freshThreadsDiv.hidden = true;
      bulldogDiv.hidden = true;
      exokitDiv.hidden = false;
    }

  }

  componentDidMount(){
    const freshThreadsDiv = document.getElementById('freshThreadsCol');
    const bulldogDiv = document.getElementById('bulldogCol');
    const exokitDiv = document.getElementById('exokitCol');
    freshThreadsDiv.hidden = false;
    bulldogDiv.hidden = true;
    exokitDiv.hidden = true;
  }

  render() {

    return (
      <div className="portfolioSection">
        <div className='row pt-5 pr-4 pl-4'>

          <div className='portfilioText col-lg-4 col-md-12 col-sm-12 col-xs-12'>
            <h3 className='subHeading display-4'>Portfolio</h3>
            <hr/>
            <p className='lead'>
              These websites are a collection of my top three favorite projects I have made to date.
            </p>
            <p className='lead'>
              All of the sites featured here were made with no templates excluding Bootstrap usage, but still no templates.
            </p>
            <p className='lead'>
              I have been having a blast making these websites and it just keeps getting better and better!.
            </p>
            <p className='lead'>
              If you want to see what im currently working on, visit my Github and take a look at my other projects.
            </p>
            <h2 className='pt-4'>Navigate</h2>
            <div className="btn-group" data-toggle="buttons">
              <button type="button" className="btn btn-secondary" value='freshthreads' onClick={ this.handleChange }>Fresh-Threads</button>
              <button type="button" className="btn btn-secondary" value='bulldog' onClick={ this.handleChange }>Bulldog Auto</button>
              <button type="button" className="btn btn-secondary" value='exokit' onClick={ this.handleChange }>Exokit</button>
            </div>
          </div>

          <div id='freshThreadsCol' className='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
            <div className="jumbotron jumbotron1"/>
            <h3>Fresh-Threads</h3>
            <p>A shopping-cart mock-up that I made... LAMP stack, PHP 7 and mySQL hosted on a AWS Lightsail server.</p>
            <a className="btn btn-primary btn-lg" href="https://www.fresh-threads.ca/fresh-threads/php/shop/shop.php" role="button">Visit Site</a>
          </div>

          <div id='bulldogCol' className='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
            <div className="jumbotron jumbotron2"/>
            <h3>Bulldog Autoworks</h3>
            <p>This was the first site I ever made, it is built with Bootstrap, Jquery, JS and features some interesting google reviews code.</p>
            <a className="btn btn-primary btn-lg" href="https://bulldogautoworks.ca/" role="button">Visit Site</a>
          </div>

          <div id='exokitCol' className='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
            <div className="jumbotron jumbotron3"/>
            <h3>Exokit</h3>
            <p>This is a landing page that is ongoing for the Exokit VR/AR browser. I am leading the site design on this project.</p>
            <a className="btn btn-primary btn-lg" href="https://exokit.webmr.io/" role="button">Visit Site</a>
          </div>

        </div>
      </div>
    );
  }
}

export default PortfolioSection;