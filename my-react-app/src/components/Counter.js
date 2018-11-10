import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleMultiply = () => {
    this.setState({ count: this.state.count * 10 });
  };
  handlePi = () => {
    this.setState({ count: this.state.count * 3.14 });
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          ReactJS Click Game
          <p className="card-text">Click Count: {this.state.count}</p>
        </div>
        <div className="card-body">
          
          <button className="btn btn-dark" onClick={this.handleIncrement}>
            GO UP!!!!!!!!!!!!!!!
          </button>
          <button className="btn btn-success" onClick={this.handleDecrement}>
            GO DOWN!!!!!!!!!!!!!
          </button>
          <button className="btn btn-danger" onClick={this.handleMultiply}>
            Multiply by 10
          </button>
          <button className="btn btn-outline-primary" onClick={this.handlePi}>
            Multiply by Pi
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
