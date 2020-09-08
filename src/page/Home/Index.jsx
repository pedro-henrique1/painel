/* eslint-disable react/style-prop-object */
import React from "react";
import { NavLink } from "react-router-dom";

import "./Styles.css";
import "../../index.css";
import IconHome from "../../assets/image/home-24px.svg";
import IconOrders from "../../assets/image/receipt-24px.svg";
import IconCustomer from "../../assets/image/account_circle-24px.svg";
import IconShop from "../../assets/image/loyalty-24px.svg";
import IconAnalytic from "../../assets/image/insert_chart_outlined-24px.svg";
import sacola from "../../assets/image/icons8-shopping-bag-100.png";
import binoculo from "../../assets/image/icons8-binoculars-52.png";
import email from "../../assets/image/icons8-secured-letter-64.png";
import Get from "../../components/orders/Index";
import Gráfico from "../../components/graficos/Index";
import Orders from "../../components/graficos/Orders";
import Ganho from "../../components/graficos/Ganhos";

function Home() {
  function click() {
    console.log("hello");
  }
  return (
    <div className="layout">
      <div className="Menu">
        <ul>
          <img src={IconHome} alt="" />
          <li>
            <NavLink
              to="/home"
              activeStyle={{
                color: "#fff",
                backgroundColor: "transparent",
                textDecoration: "none",
              }}
            >
              Home
            </NavLink>
          </li>
          <img className="orders" src={IconOrders} alt="" />
          <li>
            <NavLink
              to="/orders"
              activeStyle={{
                color: "#fff",
                backgroundColor: "transparent",
                textDecoration: "none",
              }}
            >
              Orders
            </NavLink>
          </li>
          <img className="orders" src={IconCustomer} alt="" />
          <li>
            <NavLink
              to="/Customers"
              activeStyle={{
                color: "#fff",
                backgroundColor: "transparent",
                textDecoration: "none",
              }}
            >
              Customers
            </NavLink>
          </li>
          <img className="orders" src={IconShop} alt="" />
          <li>
            <NavLink
              to="/Products"
              activeStyle={{
                color: "#fff",
                backgroundColor: "transparent",
                textDecoration: "none",
                width: 50,
              }}
            >
              Products
            </NavLink>
          </li>
          <img className="analytic" src={IconAnalytic} alt="" />
          <li>
            <NavLink
              to="/Analytics"
              activeStyle={{
                color: "#fff",
                backgroundColor: "transparent",
                textDecoration: "none",
              }}
            >
              Analytics
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="title">Overview</div>
      <Get className="image" title="90" image={sacola} text="product ..." />
      <Get
        className="image product"
        title="180"
        image={binoculo}
        text="product ..."
      />
      <Get
        className="image email"
        title="60"
        image={email}
        text="product ..."
      />
      <div className="grafico">
        <h1>Current Balance</h1>
        <div className="EarningsMonth">
          <h1>Earnings this Month </h1>
          <p className="simbolo">$</p>
          <p>600.000</p>
          <div className="renda">
            <Gráfico />
          </div>
        </div>
      </div>

      <div className="grafico2">
        <div className="EarningsMonth">
          <h1>total orders this Month </h1>
          <p className="simbolo">$</p>
          <p>600.000</p>
          <div className="graficoOrders">
            <Orders />
          </div>
        </div>
      </div>
      <div className="rendaTotal">
        <h1>Earnings Summary</h1>
        <div className="ganhosQuadro">
          <div className="graficosGanhos">
            <Ganho />
          </div>
          <div className="button">
            <button className="bg-bottom">One Week</button>
            <button className="bg-bottom">One Month</button>
            <button className="bg-bottom">three Month</button>
            <button className="bg-bottom active" onClick={click}>
              One year
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
