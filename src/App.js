import React, { Component } from "react";
import { Button } from "antd";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Button"
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.setState({
      text: "Hi"
    });
  };
  render() {
    return (
      <div className="App">
        <Button type="primary" onClick={this.clickHandler}>
          {" "}
          {this.state.text}{" "}
        </Button>{" "}
      </div>
    );
  }
}

export default App;
