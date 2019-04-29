import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tabs!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          <p>
            <img src="tabs.png" alt="tabs" />
          </p>

          <p>Add js/css/html to create tabs similar to the image above.</p>

          <p>
            <ul><b>Considerations:</b>
              <li>Clicking on a tab selects it, and displays its related content</li>
              <li>Selected tab should have different styling</li>
            </ul>
          </p>


        </p>
      </div>
    );
  }
}

export default App;
