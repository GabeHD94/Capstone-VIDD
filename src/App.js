import React, { Component } from 'react';
import axios from "axios";
import Navbar from './components/navbar/nav-container';
import Body from './components/pages/body/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Body />
      </div>
    );
  }
}
export default App;
