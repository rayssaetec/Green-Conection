import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UsuarioProvider } from "./context/UsuarioContext";
import { CarrinhoProvider } from "./context/CarrinhoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsuarioProvider>
        <CarrinhoProvider>
          <App />
        </CarrinhoProvider>
      </UsuarioProvider>
    </BrowserRouter>
  </React.StrictMode>
);
