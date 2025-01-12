import React from "react";

// important! Follow PascalCasing
function Greeting({ name }) {
  return (
    // JSX: JavaScript XML
    <div className="text-7xl text-purple-600 font-bold underline">
      Hello {name}! How are you?
    </div>
  );
}

export default Greeting;
