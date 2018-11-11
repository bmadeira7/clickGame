//importing needed files
import React from "react";
import Music from "./components/Music/Music"
import NavBar from "./components/NavBar";
import Pictures from "./components/Pictures";
import pictures from "./pictures.json";


class App extends React.Component {
  state = {
    score: 0,
    bestScore: 0,
    pictures
  };

  

  //endGame is a function that:
  //                1.Will alert the user that the game is over and display their score for that round
  //                2.updates the state of bestScore if your current score is higher than your previous bestScore

  endGame = () => {
    alert(`GAME OVER\n Your score is: ${this.state.score}`);
    this.setState({ score: 0 });
    this.state.pictures.forEach(pictures => {
      pictures.count = 0;
    });
    if (this.state.score > this.state.bestScore) {
      this.setState({ bestScore: this.state.score });
    }
    return true;
  };
// clickCount is a function that : 
//                                  1. Goes thru the pictures.json array and finds the picture with the matching pictures.id and IF the
// picture with that id has a count value of 0, it changes the count value to 1. 
//                                  2. Then it will increase the users current score by 1.
//                                  3. Then using .sort and Math.random it will randomly shuffle the objects in my pictures array.
  clickCount = id => {
    this.state.pictures.find((a, i) => {
      if (a.id === id) {
        if (pictures[i].count === 0) {
          pictures[i].count += 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
            if (this.state.score === 9){
                alert("CONGRATS - YOU WON!!!")
                this.setState({ score: 0 });
            }
          });
          this.state.pictures.sort(() => Math.random() - .42);
          return true;
        } else {
          this.endGame();
        }
      }
    });
  };
// here we render the NavBar component & the Pictures component. 
// the .map method is used to create a new pictures array and sets the values to each pictures object

  render() {
    return (
        <div>
        <NavBar score={this.state.score} bestScore={this.state.bestScore} />
        <Music></Music>
        <div className="container">
          <div className="row justify-content-center">
            {this.state.pictures.map(pictures => (
                <Pictures
                clickCount={this.clickCount}
                id={pictures.id}
                key={pictures.id}
                image={pictures.image}
                />
                ))}
          </div>
        </div>
       
      </div>
    );
}
}
//exports everything above to index.js to be rendered to the DOM
export default App;
