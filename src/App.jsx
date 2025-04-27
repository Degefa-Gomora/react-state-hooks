import React from "react";
import MyCounter from "./Components/MyCounter.jsx";
import IncreaseDecreaseCount from "./Components/IncreaseDecreaseCount.jsx";
import UseEffectForTitle from "./Components/UseEffectForTitle.jsx";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>React State and Hooks Practice</h1>

      <h1>
        <b>Question 1 & 2: Counter with Even Count Display</b>
      </h1>
      <MyCounter />

      <h1>
        <b>Question 3: Increase/Decrease Counter</b>
      </h1>
      <IncreaseDecreaseCount />

      <h3>
        <b>Question 4: useEffect for Document Title</b>
      </h3>
      <UseEffectForTitle />
    </div>
  );
}

export default App;
