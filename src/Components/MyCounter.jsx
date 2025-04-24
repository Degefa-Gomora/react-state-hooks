// import React, { Component } from "react";
// import CounterDisplayer from "./CounterDisplayer";

// class MyCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clickCount: 0,
//     };
//   }

//   allClicksCounter = () => {
//     this.setState((prevState) => ({
//       clickCount: prevState.clickCount + 1,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.allClicksCounter}>Click me</button>
//         <CounterDisplayer clickCount={this.state.clickCount} />
//       </div>
//     );
//   }
// }

// export default MyCounter;

//update for 2
import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";

class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      evenClickCount: 0,
    };
  }

  allClicksCounter = () => {
    this.setState((prevState) => {
      const newClickCount = prevState.clickCount + 1;
      const newEvenClickCount =
        newClickCount % 2 === 0 ? newClickCount : prevState.evenClickCount;
      return {
        clickCount: newClickCount,
        evenClickCount: newEvenClickCount,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.allClicksCounter}>Click me</button>
        <CounterDisplayer clickCount={this.state.clickCount} />
        <EvenCounterDisplayer evenClickCount={this.state.evenClickCount} />
      </div>
    );
  }
}

export default MyCounter;
