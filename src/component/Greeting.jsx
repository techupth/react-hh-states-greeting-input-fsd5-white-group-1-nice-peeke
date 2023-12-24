import { useState } from "react";

export function GreetingMessage() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [inputMessage, setInputMessage] = useState("");

  function handleInputChange(event) {
    setInputMessage(event.target.value);
  }

  function handleUpdateClick() {
    setGreetingMessage(inputMessage);
  }

  return (
    <div>
      <h1 className="greeting-container">{greetingMessage}</h1>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={handleInputChange}
          value={inputMessage}
        ></input>
      </div>

      <div className="buttons">
        <button onClick={handleUpdateClick}>Update text</button>
      </div>
    </div>
  );
}
