import Texto from "../../img/logo/texto.png";
import Logo from "../../img/logo/logo.png";
import style from "./inicial.module.css";

import { Cabecalho } from "../cabecalho";
import { Botao } from "../botao";

const Inicial = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Cabecalho />
      <section id="home" className={style.SectionHome}>
        <div className={style.Container}>
          <img src={Logo} alt="Logo" className={style.Img} />
          <img src={Texto} alt="Texto" className={style.Img} />
        </div>
        <Botao texto="Saiba Mais" to="/saiba-mais" />
        <Botao texto="Produtos" to="/produtos" />
      </section>

      <section id="SaibaMais" className={style.Section}>
        <div>Saiba Mais</div>
      </section>
    </>
  );
};

export { Inicial };
