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

  detectSite(site){
    console.log('Site is changing to:' + site);
  }

  handleChange(event) {

    this.setState({
      siteShown: event.target.value
    });

    this.detectSite(this.state.siteShown);

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

  render() {

    return (
      <div className="portfolioSection">

        <div className='row pt-4'>
          <div className='col-6'>
            <div id='radio' className="btn-group btn-group-toggle" data-toggle="buttons">
                <input type="radio" name="options" id="freshThreadsOption" value='freshthreads' autoComplete="off" onClick={ this.handleChange }/> Fresh-Threads

                <input type="radio" name="options" id="bulldogAutoOption" value='bulldog' autoComplete="off" onClick={ this.handleChange }/> Bulldog Autoworks

                <input type="radio" name="options" id="exokitOption" value='exokit' autoComplete="off" onClick={ this.handleChange }/> Exokit Website
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