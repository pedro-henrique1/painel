import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Login from "./page/Orders/Index";

function App() {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
}

export default App;
