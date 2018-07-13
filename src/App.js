import React, { Component } from 'react';

import Navbar from "./components/navbar";
import TitleSection from "./components/titleSection";
import AboutSection from "./components/about";
import './css/App.css';
import ContactSection from "./components/contactSection";
import PortfolioSection from "./components/portfolioSection";
import FreelanceSection from "./components/freelanceSection";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <TitleSection/>
        <AboutSection/>
        <PortfolioSection/>
        <FreelanceSection/>
        <ContactSection/>

      </div>
    );
  }
}

export default App;
