/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";

import "./Styles.css";

function login() {
  return (
    <div>
      <div className="Login">
        <input
          className="inputEmail"
          type="text"
          placeholder="Digite seu email"
        />
        <input
          className="inputSenha"
          type="text"
          placeholder="Digite seu senha"
        />
        <Link to="/home">
          <button className="buttonLogin">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default login;
