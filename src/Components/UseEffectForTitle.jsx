import React, { useState, useEffect } from "react";

function UseEffectForTitle() {
  //array destructuring
  const [count, setCount] = useState(0);
  useEffect(() => {
    // This will run only once when component mounts
    alert("Component is mounted");
    // Cleanup function
    return () => {
      document.title = "React App"; // Reset title when component unmounts
    };
  }, []); // Empty dependency array means this runs only on mount or initially

  useEffect(() => {
    document.title = `TitleCount: ${count}`;
  }); // This will run at every render

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };


  return (
    <>
      <div>
        <button className="btn btn-success btn-lg" onClick={incrementCount}>
          Click here
        </button>
        <p className="count">Count Displayer: {count}</p>
      </div>
    </>
  );
}

export default UseEffectForTitle;
