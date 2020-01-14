import React from "react";
import ReactDOM from "react-dom";
import StatusBar from "./components/StatusBar";


function App() {
  return <StatusBar />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
