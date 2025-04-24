import React, { useState, useEffect } from "react";

function UseEffectForTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will run only once when component mounts
    alert("Component is mounted");

    // Cleanup function (optional)
    return () => {
      document.title = "React App"; // Reset title when component unmounts
    };
  }, []); // Empty dependency array means this runs only on mount

  useEffect(() => {
    // This will run every time count changes
    document.title = `Count: ${count}`;
  }, [count]); // Dependency on count

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>Click me</button>
      <p className="count">Count: {count}</p>
    </div>
  );
}

export default UseEffectForTitle;
