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
    score: 0,
    topScore: 0,
    clickedId: [],
    guess: "Click an image to begin"
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

  saveId = (id) => {
    // let newClickArray = {...this.state.clickedId + this.image.id}
    this.setState({clickedId: [...this.state.clickedId, id]})
    console.log("clickedId array:", this.state.clickedId)
  }



  renderScore = (id) => {
    this.randomizeCards()

    if(this.state.clickedId.includes(id)) {
      this.setState({guess: "You guessed incorrectly!"})
      this.setState({score: 0})
      this.setState({clickedId: []})
    } else {
      this.saveId(id)
      this.setState({guess: "You guessed correctly!"})
      this.setState({score: this.state.score + 1})
      this.setState({topScore: (this.state.topScore > this.state.score ? this.state.topScore : this.state.score + 1)})

    }
  }

  render() {
    return (
      <div >
      <Nav fixed={true} score={this.state.score} topScore={this.state.topScore}guess={this.state.guess}></Nav>
      <Header image={pinkRice}>
      </Header>
      <Row>
      <div className="container main">
        {
          this.state.images.map(image => (
            <ClickCard
              id={image.id}
              key={image.id}
              image={image.image}
              randomizeCards={this.randomizeCards}
              renderScore={this.renderScore}
              
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
