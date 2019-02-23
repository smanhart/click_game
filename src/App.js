import React, { Component } from 'react';
import {Row} from "react-materialize"
import pinkRice from "./images/pink_rice.png"
import Nav from "./components/Nav/Nav"
import Header from "./components/Header/Header"
import ClickCard from "./components/Main/Main"
import images from "./cardImage.json";

import './App.css';

class App extends Component {

  state = {
    images,
    score: 0
  };

  randomizeCards = () => {
    var input = this.state.images;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    console.log(input);
    this.setState({images:input});
  }

  renderScore = () => {
    
  }

  render() {
    return (
      <div >
      <Nav fixed={true}></Nav>
      <Header image={pinkRice}>
      </Header>
      <Row>
      <div className="container main">
        {
          this.state.images.map(image => (
            <ClickCard
              id={image.id}
              image={image.image}
              randomizeCards={this.randomizeCards}
            />
          ))
          
          
        }
        </div>
      </Row>
        
      </div>
    );
  }
}

export default App;
