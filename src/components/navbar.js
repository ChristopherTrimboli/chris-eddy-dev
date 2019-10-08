import React, { Component } from 'react';
import '../css/navbar.css';
import logo from '../images/me.jpg'

class Navbar extends Component {

  jumpTo(section){
    let div = document.getElementById(section);
    let distanceToTop = div.getBoundingClientRect().top;
    window.scrollBy({
      top: distanceToTop - 50, // could be negative value
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div className="navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">
            <img src={logo} width="30" height="30"
                 className=" logo d-inline-block align-top" alt="logo"/>
              Chris Eddy
          </span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <span className="nav-link" onClick={() => {this.jumpTo('aboutMe')}}>About Me</span>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => {this.jumpTo('portfolio')}}>
                  Portfolio
                </span>
                <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="https://exokit.org/">Exokit</a>
                  <a className="dropdown-item" href="https://chriseddy.github.io/threejs-webvr-solarsystem/">Solar-System</a>
                  <a className="dropdown-item" href="http://dev.taskoli.com/">Taskoli</a>
                </div>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={() => {this.jumpTo('contact')}}>Contact</span>
              </li>
            </ul>
            <a className="ml-2 mr-1 navSocial" href='https://github.com/ChrisEddy' target='_blank' rel="noopener noreferrer"><i className="fab fa-github-square fa-2x"/></a>
            <a className="ml-2 mr-1 navSocial" href='https://www.linkedin.com/in/chris-eddy-394784160/' target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"/></a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
