import { useState } from "react";
import { Link } from "react-router-dom";
import "./cadastro.css";

const CadastroProdutor = () => {
  const [form, setForm] = useState({
    nome: "",
    cnpj: "",
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

    if (!form.cnpj.trim()) {
      novosErros.cnpj = "CNPJ é obrigatório.";
    } else if (!/^\d{14}$/.test(form.cnpj.replace(/\D/g, ""))) {
      novosErros.cnpj = "CNPJ deve conter 14 dígitos numéricos.";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      alert("Cadastro de produtor realizado com sucesso!");
      // Aqui você pode enviar para o backend futuramente
    }
  };

  return (
    <div className="cadastro-container">
      <Link to="/" className="voltar">← Voltar</Link>
      <form className="form-box" onSubmit={handleSubmit}>
        <img src="/images/logo/miniLogo.png" alt="Logo" className="logo" />
        <h2><em>Cadastrar-se como Produtor</em></h2>

        <input
          name="nome"
          type="text"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
        />
        {erros.nome && <p className="erro">{erros.nome}</p>}

        <input
          name="cnpj"
          type="text"
          placeholder="CNPJ"
          value={form.cnpj}
          onChange={handleChange}
        />
        {erros.cnpj && <p className="erro">{erros.cnpj}</p>}

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

export default CadastroProdutor;

