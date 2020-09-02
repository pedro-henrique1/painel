import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Page from "./page/Index";
import Home from "./page/Home/Index";

function Rotas() {
  reactDom.render(
    <Router>
      <Route path="/home" component={Home}></Route>
    </Router>
  );
}

export default Rotas;
