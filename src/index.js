// 1) import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
 
// 2) Reference the div with ID ROOT
const el = document.getElementById("root");
 
// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);
// 4) Create a component
function App() {
  const inputType = "number";
  const minValue = 5

  return <textarea autoFocus/>
}
// 5) Show the component in the screen
root.render(<App />);
