import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Greeting from "./Greeting";

function App() {
  const [count, setCount] = useState(0);
  const name = "John";

  return (
    <div className="flex space-y-5 h-screen flex-col justify-center items-center">
      <h1 className="text-7xl font-bold underline">Hello world!</h1>
      <Greeting name={name}></Greeting>
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
