import React from "react";
import "./App.scss";
import Content from "./components/Content/Content";
import ErrorMessageComponent from "./ErrorMessageComponent/ErrorMessageComponent";

function App() {
  return (
    <div className="App">
      <h1>Streamers Spotlight</h1>
      <Content />
      <ErrorMessageComponent />
    </div>
  );
}

export default App;
