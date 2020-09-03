import React from "react";

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

function Home() {
  return (
    <div className="layout">
      <div className="Menu">
        <ul>
          <img src={IconHome} alt="" />
          <li>Home</li>
          <img className="orders" src={IconOrders} alt="" />
          <li>Orders</li>
          <img className="orders" src={IconCustomer} alt="" />
          <li>Customers</li>
          <img className="orders" src={IconShop} alt="" />
          <li>Products</li>
          <img className="analytic" src={IconAnalytic} alt="" />
          <li>Analytics</li>
        </ul>
        <div className="Premium">
          <p className="subtitle">
            Set <strong> Business</strong> account to explore premium features
          </p>
          <button type="button" className="buttonUpdate">
            Update for Business
          </button>
        </div>
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
    </div>
  );
}
export default Home;
