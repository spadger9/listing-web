import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ListBoard from './components/ListBoard';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar /> 
      <ListBoard />
      </div>
    );
  }
}

export default App;
