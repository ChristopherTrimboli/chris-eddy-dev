import React, { Component } from 'react';
import '../css/portfolioSection.css';

class PortfolioSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      siteShown: "docs"
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      siteShown: event.target.value
    });

    const freshThreadsDiv = document.getElementById('freshThreadsCol');
    const docsDiv = document.getElementById('docsCol');
    const bulldogDiv = document.getElementById('bulldogCol');

    if(event.target.value === 'freshthreads'){
      freshThreadsDiv.hidden = false;
      docsDiv.hidden = true;
      bulldogDiv.hidden = true;
    }
    if(event.target.value === 'docs'){
      freshThreadsDiv.hidden = true;
      docsDiv.hidden = false;
      bulldogDiv.hidden = true;
    }
    if(event.target.value === 'bulldog'){
      freshThreadsDiv.hidden = true;
      docsDiv.hidden = true;
      bulldogDiv.hidden = false;

    }

  }

  componentDidMount(){
    const freshThreadsDiv = document.getElementById('freshThreadsCol');
    const docsDiv = document.getElementById('docsCol');
    const bulldogDiv = document.getElementById('bulldogCol');
    freshThreadsDiv.hidden = false;
    docsDiv.hidden = true;
    bulldogDiv.hidden = true;
  }

  render() {

    return (
      <div id='portfolio' className="portfolioSection">
        <div className='row pt-5 pr-2 pl-2 pb-5'>

          <div className='portfilioText col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4'>
            <h3 className='subHeading display-4'>My Portfolio</h3>
            <hr/>
            <p className='lead'>
              These websites are a collection of my top three favorite projects I have made to date.
            </p>
            <p className='lead'>
              All of the sites featured were made with no templates excluding some Bootstrap usage.
            </p>
            <p className='lead'>
              Some of these sites are mock-ups and others are in production, I think both types show my work well.
            </p>
            <p className='lead'>
              If you want to see what im currently working on, visit my <a href='https://github.com/ChrisEddy'>Github</a> and take a look at my other projects.
            </p>

          </div>

          <div id='freshThreadsCol' className='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
            <h4>Navigate</h4>
            <div className="btn-group pb-1" data-toggle="buttons">
              <button type="button" className="btn btn-success focus active" aria-pressed='true' value='freshthreads' onClick={ this.handleChange }>Fresh-Threads</button>
              <button type="button" className="btn btn-secondary" value='docs' onClick={ this.handleChange }>Exokit Docs</button>
              <button type="button" className="btn btn-primary" value='bulldog' onClick={ this.handleChange }>Bulldog Auto</button>
            </div>
            <div className="jumbotron jumbotron1"/>
            <h3>Fresh-Threads</h3>
            <p className='text-left'>This site is a shopping-cart mock-up that I made in school. It is a LAMP stack, built with Bootstrap and hosted on a AWS Lightsail server.</p>
            <a className="btn btn-primary btn-lg mr-2" href="https://www.fresh-threads.ca/fresh-threads/php/shop/shop.php" role="button">Visit Website</a>
            <a className="btn btn-secondary btn-lg" href="https://github.com/ChrisEddy/fresh-threads" role="button">Github Repo</a>
          </div>

          <div id='docsCol' className='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
            <h4>Navigate</h4>
            <div className="btn-group pb-1" data-toggle="buttons">
              <button type="button" className="btn btn-success" value='freshthreads' aria-pressed='false' onClick={ this.handleChange }>Fresh-Threads</button>
              <button type="button" className="btn btn-secondary focus active" aria-pressed='true' value='docs' onClick={ this.handleChange }>Exokit Docs</button>
              <button type="button" className="btn btn-primary" value='bulldog' aria-pressed='false' onClick={ this.handleChange }>Bulldog Auto</button>
            </div>
            <div className="jumbotron jumbotron2"/>
            <h3>Exokit Docs</h3>
            <p className='text-left'>I am a main developer for the Exokit technical documentation. This stack is built with Docusaurus, React and features Algolia search functionality.</p>
            <a className="btn btn-primary btn-lg mr-2" href="https://docs.webmr.io/" role="button">Visit Website</a>
            <a className="btn btn-secondary btn-lg" href="https://github.com/webmixedreality/webmr-docs" role="button">Github Repo</a>
          </div>

          <div id='bulldogCol' className='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
            <h4>Navigate</h4>
            <div className="btn-group pb-1" data-toggle="buttons">
              <button type="button" className="btn btn-success" value='freshthreads' aria-pressed='false' onClick={ this.handleChange }>Fresh-Threads</button>
              <button type="button" className="btn btn-secondary" value='docs' aria-pressed='false' onClick={ this.handleChange }>Exokit Docs</button>
              <button type="button" className="btn btn-primary focus active" value='bulldog' aria-pressed='true' onClick={ this.handleChange }>Bulldog Auto</button>
            </div>
            <div className="jumbotron jumbotron3"/>
            <h3>Bulldog Autoworks Ltd.</h3>
            <p className='text-left'>This was the first site I ever made, it is built with Bootstrap, Jquery, JS and features some interesting google reviews code.</p>
            <a className="btn btn-primary btn-lg mr-2" href="https://bulldogautoworks.ca/" role="button">Visit Website</a>
            <a className="btn btn-secondary btn-lg" href="https://github.com/ChrisEddy/bulldog-autowork" role="button">Github Repo</a>
          </div>

        </div>

      </div>
    );
  }
}

export default PortfolioSection;
