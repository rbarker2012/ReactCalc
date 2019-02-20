import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as math from "mathjs";

import "./styles.css";

import Button from "./components/button";
import Input from "./components/input";
import ClearBtn from "./components/clear";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calc: "",
      ops: [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "+"],
        ["^", "0", ".", "-"]
      ]
    };
  }

  addToCalc = val => {
    this.setState({
      calc: this.state.calc + val
    });
  };

  handleEqual = () => {
    this.setState({
      calc: math.eval(this.state.calc)
    });
  };

  renderButtons = () => {
    return this.state.ops.map(row => {
      return (
        <div className="row">
          {row.map(digit => {
            return <Button handleClick={this.addToCalc}>{digit}</Button>;
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="app">
        <Input problem={this.state.calc} />
        {this.renderButtons()}
        <div className="row">
          <ClearBtn handleClick={() => this.setState({ calc: "" })}>
            AC
          </ClearBtn>
          <Button handleClick={() => this.handleEqual()}>=</Button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
