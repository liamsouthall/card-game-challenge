import React, { Component } from "react";
import Card from "./components/Card";
import "./App.css";
import Bowser from "./images/bowser.jpg";
import BabyMario from "./images/babymario.jpg";
import MarioBros from "./images/marioBros.jpg";
import Waluigi from "./images/waluigi.jpg";
import Wario from "./images/wario.jpg";
import Yoshi from "./images/yoshi.jpg";
import Toad from "./images/toad.jpg";
import Boo from "./images/boo.jpg";

class App extends Component {
  state = {
    message: "match the cards to win the game",
    messageChange: true,
    cards: [
      { flipped: false, image: Bowser },
      { flipped: false, image: BabyMario },
      { flipped: false, image: Bowser },
      { flipped: false, image: BabyMario },
      { flipped: false, image: MarioBros },
      { flipped: false, image: Waluigi },
      { flipped: false, image: MarioBros },
      { flipped: false, image: Waluigi },
      { flipped: false, image: Wario },
      { flipped: false, image: Yoshi },
      { flipped: false, image: Wario },
      { flipped: false, image: Yoshi },
      { flipped: false, image: Toad },
      { flipped: false, image: Boo },
      { flipped: false, image: Toad },
      { flipped: false, image: Boo }
    ],
    firstFlip: null,
    secondFlip: null,
    turns: 40
  };

  flipHandler = index => {
    if (this.state.firstFlip == null) {
      let newCards = this.state.cards;
      newCards[index].flipped = true;
      this.setState({ cards: newCards, firstFlip: index });
    } else if (this.state.secondFlip == null) {
      let newCards = this.state.cards;
      let turn = this.state.turns;
      turn -= 1;
      newCards[index].flipped = true;
      this.setState({ cards: newCards, secondFlip: index, turns: turn });
    }
  };

  //this is a React Lifecycle method - read the docs
  componentDidUpdate() {
    //object destructuring so I don't have to keep typing this.state.
    const { firstFlip, secondFlip, cards, message, messageChange } = this.state;

    if (firstFlip != null && secondFlip != null) {
      if (cards[firstFlip].image == cards[secondFlip].image) {
        this.setState({
          firstFlip: null,
          secondFlip: null,
          message: "That's a Match"
        });

        setTimeout(() => {
          this.setState({ message: "" });
        }, 1000);
      } else if (
        cards[firstFlip].image != cards[secondFlip].image &&
        messageChange != false
      ) {
        this.setState({ message: "Thats not a match", messageChange: false });

        setTimeout(() => {
          let newCards = this.state.cards;
          newCards[firstFlip].flipped = false;
          newCards[secondFlip].flipped = false;
          this.setState({
            cards: newCards,
            firstFlip: null,
            secondFlip: null,
            message: "",
            messageChange: true
          });
        }, 1000);
      }
    }
    this.winningLogic();
  }

  winningLogic = () => {
    //write a function that determines a winner (every card is turned over)
    //there's an array method called -every- which you might want to look up.
    //you then need to decided where the best place to call this method is.
  };

  render() {
    return (
      <div>
        <div className="board">
          {this.state.cards.map((card, index) => {
            return (
              <Card
                key={index}
                image={card.image}
                flipped={card.flipped}
                click={() => this.flipHandler(index)}
              />
            );
          })}
        </div>
        <div className="stats">
          <p>{`Turns: ${this.state.turns}`}</p>
        </div>
        <div className="stats">
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default App;
