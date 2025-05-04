import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./cabecalho.module.css";

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
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
        <h2>Criar conta</h2>
        <button>Como Cliente</button>
        <button>Como Produtor</button>
      </div>
    </>
  );
};

export { Cabecalho };
