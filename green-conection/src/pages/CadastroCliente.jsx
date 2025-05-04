import { useState } from "react";
import { Link } from "react-router-dom";
import "./cadastro.css";

const CadastroCliente = () => {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    senha: "",
  });

  const [erros, setErros] = useState({});

  const validar = () => {
    const novosErros = {};

    if (!form.nome.trim()) {
      novosErros.nome = "Nome é obrigatório.";
    } else if (form.nome.length < 2) {
      novosErros.nome = "Nome deve ter pelo menos 2 letras.";
    }

    if (!form.cpf.trim()) {
      novosErros.cpf = "CPF é obrigatório.";
    } else if (!/^\d{11}$/.test(form.cpf.replace(/\D/g, ""))) {
      novosErros.cpf = "CPF deve ter 11 dígitos numéricos.";
    }

    if (!form.telefone.trim()) {
      novosErros.telefone = "Telefone é obrigatório.";
    } else if (!/^\(?\d{2}\)? ?\d{4,5}-?\d{4}$/.test(form.telefone)) {
      novosErros.telefone = "Formato de telefone inválido.";
    }

    if (!form.email.trim()) {
      novosErros.email = "Email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      novosErros.email = "Email inválido.";
    }

    if (!form.senha.trim()) {
      novosErros.senha = "Senha é obrigatória.";
    } else if (form.senha.length < 6) {
      novosErros.senha = "Senha deve ter no mínimo 6 caracteres.";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      alert("Cadastro realizado com sucesso!");
      // Aqui você pode enviar para o backend, se desejar
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="cadastro-container">
      <Link to="/" className="voltar">← Voltar</Link>
      <form className="form-box" onSubmit={handleSubmit}>
        <img src="/images/logo/miniLogo.png" alt="Logo" className="logo" />
        <h2><em>Cadastrar-se como Cliente</em></h2>

        <input
          name="nome"
          type="text"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
        />
        {erros.nome && <p className="erro">{erros.nome}</p>}

        <input
          name="cpf"
          type="text"
          placeholder="CPF"
          value={form.cpf}
          onChange={handleChange}
        />
        {erros.cpf && <p className="erro">{erros.cpf}</p>}

        <input
          name="telefone"
          type="tel"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
        />
        {erros.telefone && <p className="erro">{erros.telefone}</p>}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {erros.email && <p className="erro">{erros.email}</p>}

        <input
          name="senha"
          type="password"
          placeholder="Crie uma senha"
          value={form.senha}
          onChange={handleChange}
        />
        {erros.senha && <p className="erro">{erros.senha}</p>}

        <button type="submit" className="btn-cadastrar">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;

