import React, { Component } from 'react';
import axios from "axios";
import ReactPlayer from 'react-player'
import Navbar from './components/navbar/nav-container';
import Body from './components/pages/body/body';
import Video from './components/video/videoplayer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Video />
        <Body />
      </div>
    );
  }
}
export default App;
