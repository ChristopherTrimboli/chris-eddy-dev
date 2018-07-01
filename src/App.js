import React, { Component } from 'react';

import Navbar from "./components/navbar";
import TitleSection from "./components/titleSection";
import AboutSection from "./components/about";
import './css/App.css';
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <TitleSection/>
        <AboutSection/>
        <Footer/>
      </div>
    );
  }
}

export default App;
