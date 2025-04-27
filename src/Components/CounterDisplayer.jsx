import React, { Component } from "react";

class CounterDisplayer extends Component {
  render() {
    const { data } = this.props; // destructuring 
    return (
      <div>
        <h2>All Clicks counter: {data}</h2>
      </div>
    );
  }
}

export default CounterDisplayer;


//Notes
{
  /*if the entire state was passed from the parent to this components /*use {this.props.data.clickCount}  or destructuring will give cleaner code*/
}





























//!destructuring if the entire state passed to it
// import React, { Component } from "react";

// class CounterDisplayer extends Component {
//   render() {
//     const { clickCount } = this.props.someData; // created a new local variable called clickCount that holds the value of this.props.someData.clickCount.
    
//     return (
//       <div>
//         <p>Clicked {clickCount} times</p>
//       </div>
//     );
//   }
// }

// export default CounterDisplayer;

