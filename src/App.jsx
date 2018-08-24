import React, { Component } from 'react';
import NavBar from './NavBar.jsx'
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, click here.
        </p>
      </div>
    );
  }
}

export default App;
