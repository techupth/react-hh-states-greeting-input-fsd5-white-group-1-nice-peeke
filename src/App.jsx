import React, { useState } from "react";
import "./App.css";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [inputText, setInputText] = useState("");
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleUpdateText = () => {
    setGreetingMessage(inputText);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <div className="buttons">
        <button onClick={handleUpdateText}>Update text</button>
      </div>
    </div>
  );
}

export default App;
