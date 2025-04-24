import React from "react";
import MyCounter from "./Components/MyCounter.jsx";
import IncreaseDecreaseCount from "./Components/IncreaseDecreaseCount.jsx";
import UseEffectForTitle from "./Components/UseEffectForTitle.jsx";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>React State and Hooks Practice</h1>

      <h2>Question 1 & 2: Counter with Even Count Display</h2>
      <MyCounter />

      <h2>Question 3: Increase/Decrease Counter</h2>
      <IncreaseDecreaseCount />

      <h2>Question 4: useEffect for Document Title</h2>
      <UseEffectForTitle />
    </div>
  );
}

export default App;
