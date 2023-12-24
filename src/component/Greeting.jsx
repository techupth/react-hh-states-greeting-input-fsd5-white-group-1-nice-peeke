/**@jsxImportSource @emotion/react */
import { useState } from "react";

export function GreetingMessage() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [inputMessage, setInputMessage] = useState("");

  return (
    <>
      <h1 className="ShowMessage">{greetingMessage}</h1>
      <div>
        <label htmlFor="greetingInput">New Greeting Message</label>
        <input
          id="greetingInput"
          type="text"
          onChange={(event) => {
            setInputMessage(event.target.value);
          }}
          value={inputMessage}
        ></input>
      </div>

      <button
        onClick={() => {
          setGreetingMessage(inputMessage);
        }}
      >
        Update text
      </button>
    </>
  );
}
