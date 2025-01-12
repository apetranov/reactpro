import { useState } from "react";
import Greeting from "./Greeting";

// Vite monitors files for changes
// When a change is made it auto refreshes the page in the browser

function App() {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState(false);
  const name = "John";

  return (
    <div className="flex space-y-5 h-screen flex-col justify-center items-center">
      <h1 className="text-7xl font-bold underline">Hello world!</h1>
      {greeting ? <Greeting name={name}></Greeting> : null}
      <h2 className="text-5xl">{count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-600 text-white rounded-lg p-5 text-2xl"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(0)}
        className="bg-red-600 text-white rounded-lg p-5 text-2xl"
      >
        Reset
      </button>
      <button
        onClick={() => setGreeting(true)}
        className="bg-purple-600 text-white rounded-lg p-5 text-2xl"
      >
        Greeting
      </button>
      <button
        onClick={() => setGreeting(false)}
        className="bg-purple-600 text-white rounded-lg p-5 text-2xl"
      >
        Hide Greeting
      </button>
    </div>
  );
}

export default App;
