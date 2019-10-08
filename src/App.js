import React, { Component } from 'react';
import './css/App.css';

import Navbar from "./components/navbar";
import TitleSection from "./components/titleSection";
import AboutSection from "./components/about";
import ContactSection from "./components/contactSection";
import PortfolioSection from "./components/portfolioSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <TitleSection/>
        <AboutSection/>
        <PortfolioSection/>
        <ContactSection/>
      </div>
    );
  }
}

export default App;
