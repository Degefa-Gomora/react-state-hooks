//!Questions on React State
    // 1. Create a class component called "MyCounter.js" that depends on another
    // class component, "CounterDisplayer.js".
    // "MyCounter.js" keeps track of then click count value in the state, and this is where you initialize your state,
    // which holds the click counts.
    // Create a function named "allClicksCounter()" in "MyCounter.js" that will
    // update or increase your state by one anytime the button in the "MyCounter.js" component is clicked.
// !Hint:
    // ● The primary function of "CounterDisplayer.js" is to show how many times the button in the "MyCounter.js" component has been clicked.
    // That is, you need to use props to pass the updated click data from "MyCounter.js" to "CounterDisplayer.js".
    // ● Display the number of clicks exactly below the button.


    //!with constructor function for Q#1
// import React, { Component } from "react";
// import CounterDisplayer from "./CounterDisplayer";

// class MyCounter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       clickCounts: 0,
//     };
//   }

//   allClicksCounter = () => {
//     this.setState((prevState) => ({
//       clickCounts: prevState.clickCounts + 1,
//     }));
//   };

//   render() {
//     const { clickCounts } = this.state; // destructuring state
//     return (
//       <div>
//         <button
//           className="btn btn-success btn-lg"
//           onClick={this.allClicksCounter}
//         >
//           Click here
//         </button>
//         <CounterDisplayer data={clickCounts} />
//       </div>
//     );
//   }
// }
// export default MyCounter;





//!update for 2
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
    return {
      clickCount: newClickCount,
      evenClickCount:
        newClickCount % 2 === 0 ? newClickCount : prevState.evenClickCount,
    };
  });
};
//Uses the previous state directly from React's update queue; Prevents issues if multiple clicks happen before state updates complete
  render() {
    return (
      <div>
        <button
          className="btn btn-success btn-lg"
          onClick={this.allClicksCounter}
        >
          Click here
        </button>
        <div className="d-flex justify-content-center gap-3">
          <CounterDisplayer data={this.state.clickCount} />{" "}
          <EvenCounterDisplayer evenClickCount={this.state.evenClickCount} />
        </div>
      </div>
    );
  }
}

export default MyCounter;

























//!with out prevstate
// import React, { Component } from "react";

// class MyCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clickCount: 0,
//       evenClickCount: 0,
//     };
//   }

//   // ❌ Problem: Uses `this.state` directly (can lead to stale state)
//   allClicksCounter = () => {
//     const newClickCount = this.state.clickCount + 1; // Depends on current state (may be outdated)
//     console.log("Before update (stale state):", this.state.clickCount);

//     this.setState(
//       {
//         clickCount: newClickCount,
//         evenClickCount:
//           newClickCount % 2 === 0 ? newClickCount : this.state.evenClickCount,
//       },
//       () => {
//         console.log("After update:", this.state.clickCount); // Correct, but too late
//       }
//     );
//   };

//   render() {
//     return (
//       <div>
//         <h3>Without prevState (Try rapid clicks!)</h3>
//         <button
//           className="btn btn-danger btn-lg"
//           onClick={this.allClicksCounter}
//         >
//           Click here (Broken)
//         </button>
//         <div className="d-flex justify-content-center gap-3 mt-3">
//           <div>
//             <strong>Total Clicks:</strong> {this.state.clickCount}
//           </div>
//           <div>
//             <strong>Even Clicks:</strong> {this.state.evenClickCount}
//           </div>
//         </div>
//         <p className="text-muted mt-3">
//           <strong>Issue:</strong> Rapid clicks may be missed because
//           `this.state` is stale.
//         </p>
//       </div>
//     );
//   }
// }

// export default MyCounter;
























































































































//!without constructor function
// import React, { Component } from "react";
// import CounterDisplayer from "./CounterDisplayer";
// import EvenCounterDisplayer from "./EvenCounterDisplayer";

// class MyCounter extends Component {
//   state = {
//     clickCount: 0,
//     evenClickCount: 0,
//   };

//   allClicksCounter = () => {
//     // Calculate the new total click count
//     const newClickCount = this.state.clickCount + 1;
//     // Update state
//     this.setState({
//       // Always increment the total click count/Always sets the total click count to the newly calculated value
//       clickCount: newClickCount,
//       // Update evenClickCount only if newClickCount is even/If true: evenClickCount = newClickCount (update with new even number)If false: evenClickCount = this.state.evenClickCount (keep previous value)
//       evenClickCount:
//         newClickCount % 2 === 0 ? newClickCount : this.state.evenClickCount,
//     });
//   };

//   render() {
//     const { clickCount, evenClickCount } = this.state;

//     return (
//       <div>
//         <button className="btn btn-success btn-lg" onClick={this.allClicksCounter}>
//           Click here
//         </button>
//         <div className="d-flex justify-content-center gap-3">
//           <CounterDisplayer count={clickCount} />
//           <EvenCounterDisplayer evenClickCount={evenClickCount} />
//         </div>
//       </div>
//     );
//   }
// }

// export default MyCounter;





































//react hook
// import React, { useState } from "react";
// import CounterDisplayer from "./CounterDisplayer";
// import EvenCounterDisplayer from "./EvenCounterDisplayer";

// const MyCounter = () => {
//   const [clickCount, setClickCount] = useState(0);
//   const [evenClickCount, setEvenClickCount] = useState(0);

//   const allClicksCounter = () => {
//     const newClickCount = clickCount + 1;
//     setClickCount(newClickCount);
    
//     if (newClickCount % 2 === 0) {
//       setEvenClickCount(newClickCount);
//     }
//   };

//   return (
//     <div>
//       <button
//         className="btn btn-success btn-lg"
//         onClick={allClicksCounter}
//       >
//         Click here
//       </button>
//       <div className="d-flex justify-content-center gap-3">
//         <CounterDisplayer count={clickCount} />
//         <EvenCounterDisplayer evenClickCount={evenClickCount} />
//       </div>
//     </div>
//   );
// };

// export default MyCounter;
//yile in render
// const { count } = this.props;
// let evenCount;
// if (count % 2 === 0) {
//   evenCount = count;
// } else {
//   evenCount = count - 1;
// }

//mihre
// componentDidUpdate(prevprops, prevstates)
//     {
//         if(prevprops.count!== this.props.count){
//             if(this.props.count %2 ===0)
//             {
//                 this.setState((state)=>{
//                     return {even:this.props.count}
//             })
//             }
//         }

//!without constructor function
// import React, { Component } from "react";
// import CounterDisplayer from "./CounterDisplayer";

// class MyCounter extends Component {
//   //Direct state initialization without constructor
//   state = {
//     clickCounts: 0,
//   };

//   // Arrow function automatically binds 'this'/ = () => syntax helps to bind
//   allClicksCounter = () => {
//     this.setState((prevState) => ({
//       clickCounts: prevState.clickCounts + 1,
//     }));
//   };

//   render() {
//     const { clickCounts } = this.state; // destructuring state
//     return (
//       <div>
//         <button
//           className="btn btn-success btn-lg"
//           onClick={this.allClicksCounter}
//         >
//           Click here
//         </button>
//         <CounterDisplayer data={clickCounts} />
//       </div>
//     );
//   }
// }

// export default MyCounter;




















//if you are not using arrow function which is autobinder like :
          // allClicksCounter() {
          //   this.setState((prevState) => ({ clickCount: prevState.clickCount + 1 }));
          // }
          //you have to bind methods in constructors like:

























































































//using bootstrap 5

// import React, { Component } from "react";
// import CounterDisplayer from "./CounterDisplayer";
// import EvenCounterDisplayer from "./EvenCounterDisplayer";

// class MyCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clickCount: 0,
//       evenClickCount: 0,
//     };
//   }

//   allClicksCounter = () => {
//     this.setState((prevState) => {
//       const newClickCount = prevState.clickCount + 1;
//       const newEvenClickCount =
//         newClickCount % 2 === 0 ? newClickCount : prevState.evenClickCount;
//       return {
//         clickCount: newClickCount,
//         evenClickCount: newEvenClickCount,
//       };
//     });
//   };

//   render() {
//     return (
//       <div className="container text-center mt-5">
//         <h1 className="mb-4 text-primary">My Bootstrap Counter</h1>
//         <button
//           onClick={this.allClicksCounter}
//           className="btn btn-success btn-lg mb-4"
//         >
//           Click me
//         </button>

//         <div className="row">
//           <div className="col-md-6">
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <CounterDisplayer data={this.state.clickCount} />
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6 mt-4 mt-md-0">
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <EvenCounterDisplayer
//                   evenClickCount={this.state.evenClickCount}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default MyCounter;
