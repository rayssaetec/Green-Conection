import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./cabecalho.module.css";

const MenuLateral = () => {
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
        <a href="#" className={style.link}>
          Contatar um produtor
        </a>
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

        <Link
          to="/cadastro-cliente"
          className={style.botao}
          onClick={alternarMenu}
        >
          Como Cliente
        </Link>

        <Link
          to="/cadastro-produtor"
          className={style.botao}
          onClick={alternarMenu}
        >
          Como Produtor
        </Link>
      </div>
    </>
  );
};

export { MenuLateral };
