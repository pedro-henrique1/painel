import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./page/Home/index";

function Rotas() {
  return (
    <BrowserRouter>
      <Route path="/home" component={Home}></Route>
    </BrowserRouter>
  );
}

export default Rotas;
