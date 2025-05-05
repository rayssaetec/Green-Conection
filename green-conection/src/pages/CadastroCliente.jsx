import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUsuario } from "../context/UsuarioContext";
import "./cadastro.css";

const CadastroCliente = () => {
  const [form, setForm] = useState({ nome: "", cpf: "", telefone: "", email: "", senha: "" });
  const [erros, setErros] = useState({});
  const navigate = useNavigate();
  const { setUsuario } = useUsuario();

  const validar = () => {
    const e = {};
    if (!form.nome.trim()) e.nome = "Nome é obrigatório.";
    if (!form.cpf.trim()) e.cpf = "CPF é obrigatório.";
    if (!form.telefone.trim()) e.telefone = "Telefone é obrigatório.";
    if (!form.email.includes("@")) e.email = "Email inválido.";
    if (!form.senha || form.senha.length < 6) e.senha = "Mínimo 6 caracteres.";
    setErros(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      setUsuario({ ...form, tipo: "cliente" });
      navigate("/");
    }
  };

  return (
    <div className="cadastro-container">
      <Link to="/" className="voltar">← Voltar</Link>
      <form className="form-box" onSubmit={handleSubmit}>
        <img src="/images/logo/miniLogo.png" alt="Logo" className="logo" />
        <h2><em>Cadastrar-se como Cliente</em></h2>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
        {erros.nome && <p className="erro">{erros.nome}</p>}
        <input name="cpf" placeholder="CPF" value={form.cpf} onChange={handleChange} />
        {erros.cpf && <p className="erro">{erros.cpf}</p>}
        <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} />
        {erros.telefone && <p className="erro">{erros.telefone}</p>}
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        {erros.email && <p className="erro">{erros.email}</p>}
        <input name="senha" type="password" placeholder="Senha" value={form.senha} onChange={handleChange} />
        {erros.senha && <p className="erro">{erros.senha}</p>}
        <button type="submit" className="btn-cadastrar">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;
