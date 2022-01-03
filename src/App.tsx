import React from "react";
import Header from "js/containers/Header";
import "scss/App.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        Hello World
      </div>
    </div>
  );
}

export default App;
