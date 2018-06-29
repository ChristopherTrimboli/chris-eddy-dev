import React, { Component } from 'react';
import './css/App.css';
import Navbar from "./components/navbar";
import TitleSection from "./components/titleSection";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <TitleSection/>
      </div>
    );
  }
}

export default App;
