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
      </div>
      <div>
        <Link to="/home">
          <button className="buttonLogin">login</button>
        </Link>
      </div>
    </div>
  );
}

export default login;
