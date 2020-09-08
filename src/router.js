import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

// import Page from "./page/Index";

import Home from "./page/Home/index";

function Rotas() {
  ReactDOM.render(
    <Switch>
      <Route path="/home" component={Home}></Route>
    </Switch>
  );
}

export default Rotas;
