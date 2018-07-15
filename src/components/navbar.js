import React, { Component } from 'react';
import '../css/navbar.css';
import logo from '../images/logo.jpg'

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
          <a className="navbar-brand">
            <img src={logo} width="30" height="30"
                 className=" logo d-inline-block align-top" alt="logo"/>
              Chris Eddy
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={() => {this.jumpTo('freelancing')}}>Freelancing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => {this.jumpTo('aboutMe')}}>About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => {this.jumpTo('contact')}}>Contact</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => {this.jumpTo('portfolio')}}>
                  Portfolio
                </a>
                <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="https://exokit.webmr.io/">Exokit site</a>
                  <a className="dropdown-item" href="https://www.fresh-threads.ca/fresh-threads/php/shop/shop.php">fresh-threads</a>
                  <a className="dropdown-item" href="https://bulldogautoworks.ca/">Bulldog Autoworks Ltd.</a>
                </div>
              </li>
            </ul>
            <a className="ml-2 mr-1 navSocial" href='https://github.com/ChrisEddy'><i className="fab fa-github-square fa-2x"/></a>
            <a className="ml-2 mr-1 navSocial" href='https://www.linkedin.com/in/chris-eddy-394784160/'><i className="fab fa-linkedin fa-2x"/></a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
