import React, { Component } from "react";

class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <p>Clicked {this.props.clickCount} times</p>
      </div>
    );
  }
}

export default CounterDisplayer;
