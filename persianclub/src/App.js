import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Navbar from '../src/pages/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" component={Homepage} exact />
          <Route path="/about" component={About} />

        </div>
      </Router>

    );
  }
}

export default App;
