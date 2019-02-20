import React, { Component } from 'react';
import pinkRice from "./images/pink_rice.png"
import Nav from "./components/Nav"
import Header from "./components/Header"

import './App.css';

class App extends Component {
  render() {
    return (
      <div >
      <Nav fixed={true}></Nav>
      <Header image={pinkRice}>
      </Header>
        
      </div>
    );
  }
}

export default App;
