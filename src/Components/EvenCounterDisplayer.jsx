//for q 2
import React, { Component } from "react";

class EvenCounterDisplayer extends Component {
  render() {
    const {evenClickCount} = this.props;
    return (
      <div>
        <h2 className=" p-3 text-primary fw-bold">
          Even clicks Counter: {evenClickCount}
        </h2>
      </div>
    );
  }
}

export default EvenCounterDisplayer;