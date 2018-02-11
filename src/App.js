import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from "./pokemon/containers/pokemon"
import "./bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container col-md-12">
        <div className="container col-md-8 warning offset-2">
        <Pokemon />
        </div>
      </div>
    );
  }
}

export default App;
