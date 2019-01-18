import React, { Component } from 'react';
import './App.css';

// components
import Header from "./components/Header";
import Card from "./components/Card";

// data
import orange from "../src/data/orange.json";
import blue from "../src/data/blue.json";
import green from "../src/data/green.json";
import purple from "../src/data/purple.json";

class App extends Component {
  state = {
    ins: "Click on a colour to earn points, but don't click on any more than once! There are 4 levels. Colours change each level.",
    score: 0,
    lives: 50,
    array: [],
    orange,
    blue,
    green,
    purple
  }

  componentDidMount() {
    this.setColour();    
  }

  componentDidUpdate() {
    this.changeColour();
    this.loss();
  }

  // loss
  loss = () => {
    switch(this.state.lives) {
      case 0:
      this.setState({
        ins: "You lost. Play again?",
        score: 0,
        lives: 20,
        array: this.state.orange
      })
    break;
    }
  }

  // set the initial colour of the cards to orange
  setColour = () => {
    let newColour = this.state.orange;
    this.setState({
      array: newColour
    });
  }

  // change the colour of the cards
  changeColour = () => {

    let newScore;

    switch(this.state.score) {

      // blue
      case 12:
        newScore = this.state.score + 10;
        this.setState({
          array: this.state.blue,
          score: newScore
        })
      break;

      // green
      case 34:
        newScore = this.state.score + 10;
        this.setState({
          array: this.state.green,
          score: newScore
        })
      break;

      // purple
        case 56:
        newScore = this.state.score + 10;
        this.setState({
          array: this.state.purple,
          score: newScore
        })
      break;

      // win
      case 78:
      this.setState({
        ins: "You won! Play again?",
        score: 0,
        lives: 20,
        array: this.state.orange
      })

    }
  }

  // shuffle the colours
  shuffleColours = (arr) => {

    let i, 
        j, 
        temp;

    for (i=arr.length-1; i>0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      
    }

    this.setState(arr);
    
  }

  // set the clicked to true or false
  changeClicked = (id) => {
    this.state.array.map(hue => hue.id === id ? hue.clicked = true : false);
  }

  // check if the card has been and adjust score or lives
  scoreCounter = (id) => {

    let lives = this.state.lives;
    let score = this.state.score;
    
    this.state.array.map(hue => {
      if ((hue.id === id) && (hue.clicked === true)) {
        lives--;
        this.setState({ lives });
      }
      else if ((hue.id === id) && (hue.clicked === false)) {
        score++;
        this.setState({ score });
      }
    })
  }

  // calls all functions
  handleClick = (id, arr) => {
    this.scoreCounter(id);
    this.changeClicked(id);
    this.shuffleColours(arr);
  }

  render() {
    return (
      <div className="App" style={app}>
        <Header 
          ins={this.state.ins}
          score={this.state.score}
          lives={this.state.lives}
        />
        <div style={frag}>
          {this.state.array.map(hue => (
            <Card
              arr={this.state.array}
              key={hue.id} 
              id={hue.id}
              style={hue.style}
              clicked={hue.clicked}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

const frag = {
  width: '70%',
  margin: '0 auto',
  height: '0vh'
}

const app = {
  backgroundColor: 'black',
  color: 'white'
}

export default App;
