import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./cabecalho.module.css";

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  const alternarMenu = () => setMenuAberto(!menuAberto);

  const irParaCadastro = (rota) => {
    setMenuAberto(false);
    navigate(rota);
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
        <button className={style.btnFechar} onClick={alternarMenu}>×</button>
        <img src="/images/icones/perfil.png" alt="Ícone grande" />
        <h2>Criar conta</h2>
        
        <button onClick={() => irParaCadastro("/cadastro-cliente")} className={style.botao}>
          Como Cliente
        </button>
        <button onClick={() => irParaCadastro("/cadastro-produtor")} className={style.botao}>
          Como Produtor
        </button>
      </div>
    </>
  );
};

export { Cabecalho };
