import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const arr = [];
for (let i = 0; i < 850; i++) {  
  arr.push(i); 
}

ReactDOM.render(
  <App arr={arr} amountEl={50} />,
  document.querySelector("#root")
);
