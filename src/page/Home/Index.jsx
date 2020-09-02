import React from "react";

import "./Styles.css";
import "../../index.css";
import IconHome from "../../assets/image/home-24px.svg";
import IconOrders from "../../assets/image/receipt-24px.svg";
import IconCustomer from "../../assets/image/account_circle-24px.svg";
import IconShop from "../../assets/image/loyalty-24px.svg";
import IconAnalytic from "../../assets/image/insert_chart_outlined-24px.svg";
import Get from "../../components/orders/Index";

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
      <Get title="90" image={IconAnalytic} text="product ..." />
      <Get title="180" image={IconAnalytic} text="product ..." />
      <Get title="60" image={IconAnalytic} text="product ..." />
    </div>
  );
}
export default Home;
