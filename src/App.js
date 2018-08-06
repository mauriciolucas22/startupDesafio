import React, { Component } from 'react';

import './styles/global';

import Login from './pages/login';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
