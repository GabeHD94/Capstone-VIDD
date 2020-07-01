import React, { Component } from 'react';
import axios from "axios";
import Navbar from './components/navbar/nav-container';
import Video from './components/videoplayer/videoplayer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Video/>
      </div>
    );
  }
}
export default App;
