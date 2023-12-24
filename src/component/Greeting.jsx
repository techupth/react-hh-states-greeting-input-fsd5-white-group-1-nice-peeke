/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

export function GreetingMessage() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  return (
    <>
      <div className="ShowMessage">{greetingMessage}</div>
      <div>
        <button
          onClick={(text) => {
            setGreetingMessage((text = "สวัสดี!"));
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={(text) => {
            setGreetingMessage((text = "Hi!"));
          }}
        >
          Hi!
        </button>
        <button
          onClick={(text) => {
            setGreetingMessage((text = "你好!"));
          }}
        >
          你好!
        </button>
      </div>
    </>
  );
}
