import React from "react";

import "./Styles.css";

function Orders(props) {
  return (
    <div className="p1">
      <div className="width">
        <h1>{props.title}</h1>
        <div className="image">
          <img src={props.image} alt="" />
        </div>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Orders;
