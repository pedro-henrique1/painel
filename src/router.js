import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Home from "./page/Home/Index";
import Login from "./page/login/Index";
import Customers from "./page/Customers/Index";
import Products from "./page/Product/Index";
import Analytics from "./page/Analytics/Index";
// import Orders from "./page/Orders/Index";

function Rotas() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}></Route>
      <Route path="/home" component={Home}></Route>
      {/* <Route path="/orders" component={Orders}></Route> */}
      <Route path="/customers" component={Customers}></Route>
      <Route path="/products" component={Products}></Route>
      <Route path="/analytics" component={Analytics}></Route>
      <Redirect to="/" />
    </BrowserRouter>
  );
}

export default Rotas;
