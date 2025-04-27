import React, { useState } from "react";

function IncreaseDecreaseCount() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4 text-primary">Count: {count}</h2>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-success btn-lg" onClick={increaseCount}>
          Increase Count
        </button>
        <button className="btn btn-danger btn-lg" onClick={decreaseCount}>
          Decrease Count
        </button>
        <button className="btn btn-warning btn-lg" onClick={resetCount}>
          Reset Count
        </button>
      </div>
    </div>
  );
}

export default IncreaseDecreaseCount;









//using bootstrap
// import React, { useState } from "react";

// function IncreaseDecreaseCount() {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const decreaseCount = () => {
//     setCount((prevCount) => prevCount - 1);
//   };

//   const resetCount = () => {
//     setCount(0);
//   };

//   return (
//     <div className="container text-center mt-5">
//       <h2 className="mb-4 text-primary">Count: {count}</h2>

//       <div className="d-flex justify-content-center gap-3">
//         <button onClick={increaseCount} className="btn btn-success btn-lg">
//           Increase
//         </button>
//         <button onClick={decreaseCount} className="btn btn-danger btn-lg">
//           Decrease
//         </button>
//         <button onClick={resetCount} className="btn btn-warning btn-lg">
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

// export default IncreaseDecreaseCount;

























































































































//!using setState
// import React, { Component } from "react";

// class IncreaseDecreaseCount extends Component {
//   constructor(props) {
//     super(props);
//     // Initial state
//     this.state = {
//       count: 0,
//     };
//   }

//   // Increase the count
//   increaseCount = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   // Decrease the count
//   decreaseCount = () => {
//     this.setState((prevState) => ({
//       count: prevState.count - 1,
//     }));
//   };

//   // Reset the count to 0
//   resetCount = () => {
//     this.setState({
//       count: 0,
//     });
//   };

//   // Render the UI
//   render() {
//     return (
//       <div>
//         <h2 className="count">Count: {this.state.count}</h2>
//         <button onClick={this.increaseCount}>Increase</button>
//         <button onClick={this.decreaseCount}>Decrease</button>
//         <button onClick={this.resetCount}>Reset</button>
//       </div>
//     );
//   }
// }

// export default IncreaseDecreaseCount;
