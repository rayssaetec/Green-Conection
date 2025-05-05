import { Link } from "react-router-dom";
import React from "react";

import "./cadastro.css"; 

const Confirmacao = () => {
  return (
    <div className="confirmacao-container">
      <Link to="/" className="voltar">← Voltar</Link>
      <div className="box-confirmado">
        <img src="/images/logo/miniLogo.png" alt="Logo" />
        <p><em>Cadastro Realizado!</em></p>
      </div>
    </div>
  );
};

export default Confirmacao;
