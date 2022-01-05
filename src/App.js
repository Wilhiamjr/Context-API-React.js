import React from "react";
import Conter from "./components/conter";
import Espelho from "./components/espelhoConter";

import './App.css';
import CountProvider from "./components/context/count";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <CountProvider>
          <h1>Utilizando o Context API</h1>
          <br />
          <h2>Componente Contador</h2>
          <Conter />
          <hr />
          <h2>Espelho Contador</h2>
          <Espelho />
        </CountProvider>
      </div>
    </div>
  );
}
export default App;
