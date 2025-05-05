import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUsuario } from "../../context/UsuarioContext";
import style from "./cabecalho.module.css";

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();
  const { usuario, sair } = useUsuario();

  const alternarMenu = () => setMenuAberto(!menuAberto);
  const irParaCadastro = (rota) => {
    setMenuAberto(false);
    navigate(rota);
  };

  const handleSair = () => {
    if (usuario?.tipo === "cliente") {
      sair();
      setMenuAberto(false);
      navigate("/login-cliente");
    } else if (usuario?.tipo === "produtor") {
      sair();
      setMenuAberto(false);
      navigate("/login-produtor");
    } else {
      sair();
      setMenuAberto(false);
      navigate("/");
    }
  };

  return (
    <>
      <header className={style.Cabecalho}>
        <img
          src="/images/logo/miniLogo.png"
          alt="Logo"
          className={style.logo}
        />
        <Link to="/sobre" className={style.link}>
          Conheça nossa empresa
        </Link>
        <input
          type="text"
          placeholder="Pesquisar..."
          className={style.search}
        />
        <Link to="/contatar-produtor" className={style.link}>
          Contate um produtor
        </Link>
        <img
          src="/images/icones/perfil.png"
          alt="Perfil"
          className={style.perfil}
          onClick={alternarMenu}
        />
      </header>

      <div className={`${style.menuLateral} ${menuAberto ? style.ativo : ""}`}>
        <button className={style.btnFechar} onClick={alternarMenu}>
          ×
        </button>
        <img src="/images/icones/perfil.png" alt="Ícone grande" />

        {usuario ? (
          <div className={style.dadosUsuario}>
            <p>
              <strong>Nome:</strong> {usuario.nome}
            </p>
            {usuario.cpf && (
              <p>
                <strong>CPF:</strong> {usuario.cpf}
              </p>
            )}
            {usuario.cnpj && (
              <p>
                <strong>CNPJ:</strong> {usuario.cnpj}
              </p>
            )}
            <p>
              <strong>Telefone:</strong> {usuario.telefone}
            </p>
            <p>
              <strong>Email:</strong> {usuario.email}
            </p>

            {/* botão sem fundo */}
            <button onClick={handleSair} className={style.sair}>
              Sair
            </button>
          </div>
        ) : (
          <>
            <h2>Criar conta</h2>
            <button
              onClick={() => irParaCadastro("/cadastro-cliente")}
              className={style.botao}
            >
              Como Cliente
            </button>
            <button
              onClick={() => irParaCadastro("/cadastro-produtor")}
              className={style.botao}
            >
              Como Produtor
            </button>
          </>
        )}
      </div>
    </>
  );
};

export { Cabecalho };
