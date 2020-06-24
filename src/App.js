import React, { Component } from 'react';
import Navbar from './components/navbar/nav-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main style={{marginTop: '64px'}}>
        <p>page content</p>
        </main>
      </div>
    );
  }
}
export default App;
