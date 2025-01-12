import { useState } from "react";
import Greeting from "./Greeting";

// Vite monitors files for changes
// When a change is made it auto refreshes the page in the browser

function App() {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState(true);
  const [firstName, setFirstName] = useState("");
  const name = "John";

  return (
    <div className="flex space-y-5 h-screen flex-col justify-center items-center">
      <input
        className="border border-black"
        value={firstName} // ...force the input's value to match the state variable...
        onChange={(e) => setFirstName(e.target.value)} // ... and update the state variable on any edits!
      />
      {firstName && greeting ? (
        <Greeting name={firstName}></Greeting>
      ) : (
        <h1 className="text-7xl text-purple-600 font-bold underline">
          Hello World!
        </h1>
      )}
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
    </div>
  );
}

export default App;
