import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Navbar from '../src/pages/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" component={Homepage} exact />
          <Route path="/About" component={About} />

        </div>
      </Router>

    );
  }
}

export default App;
