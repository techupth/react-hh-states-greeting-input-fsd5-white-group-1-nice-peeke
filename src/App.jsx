import "./App.css";
import { GreetingMessage } from "./component/Greeting";
function App() {
  return (
    <div className="App">
      {/* <div className="greeting-container">Greeting Message</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" />
      </div>

      <div className="buttons">
        <button>Update text</button>
      </div> */}
      <GreetingMessage></GreetingMessage>
    </div>
  );
}

export default App;
