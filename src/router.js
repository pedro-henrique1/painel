import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./page/Index";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/home" exact component={Home} />
      <Redirect to="/home" />
    </BrowserRouter>
  );
}

export default Routes;
