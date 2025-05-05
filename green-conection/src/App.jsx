import { Routes, Route } from "react-router-dom";
import { Inicial } from "./componentes/Inicial";
import Produtos from "./pages/Produtos";
import Produto from "./pages/Produto";
import { Sobre } from "./pages/Sobre";
import { ContatarProdutor } from "./pages/ContatarProdutor";
import { Produtores } from "./pages/Produtores";
import CadastroCliente from "./pages/CadastroCliente";
import CadastroProdutor from "./pages/CadastroProdutor";
import CadastroSucesso from "./pages/CadastroSucesso";
import LoginCliente from "./pages/LoginCliente";
import LoginProdutor from "./pages/LoginProdutor";
import Carrinho from "./pages/Carrinho"; 
import ResumoCarrinho from "./componentes/carrinho/ResumoCarrinho"; 
import "./App.css";

const App = () => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contatar-produtor" element={<ContatarProdutor />} />
        <Route path="/produtores" element={<Produtores />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
        <Route path="/cadastro-produtor" element={<CadastroProdutor />} />
        <Route path="/cadastro-sucesso" element={<CadastroSucesso />} />
        <Route path="/login-cliente" element={<LoginCliente />} />
        <Route path="/login-produtor" element={<LoginProdutor />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>

      <ResumoCarrinho /> {}
    </div>
  );
};

export { App };
