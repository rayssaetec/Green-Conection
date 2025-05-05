import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUsuario } from "../context/UsuarioContext";
import "./cadastro.css";

const LoginCliente = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const { loginUsuario } = useUsuario();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sucesso = loginUsuario({ tipo: "cliente", email, senha });
    if (sucesso) {
      navigate("/");
    } else {
      setErro("Email ou senha inválidos.");
    }
  };

  return (
    <div className="cadastro-container">
      <Link to="/" className="voltar">← Voltar</Link>
      <form className="form-box" onSubmit={handleSubmit}>
        <img src="/images/logo/miniLogo.png" alt="Logo" className="logo" />
        <h2><em>Entrar como Cliente</em></h2>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        {erro && <p className="erro">{erro}</p>}
        <button type="submit" className="btn-cadastrar">Entrar</button>
      </form>
    </div>
  );
};

export default LoginCliente;
