import style from "./inicial.module.css";

import { Cabecalho } from "../cabecalho";
import { Botao } from "../botao";
import { Banner } from "../Banner";

const Inicial = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Cabecalho />
      <section id="home" className={style.SectionHome}>
        <div className={style.Container}>
          <img src="/images/logo/logo.png" alt="Logo" className={style.Img} />
          <img src="/images/logo/texto.png" alt="Texto" className={style.Img} />
        </div>
        <Botao texto="Saiba Mais" to="/saiba-mais" />
        <Botao texto="Produtos" to="/produtos" />
      </section>

      <section id="SaibaMais" className={style.Section}>
        <Banner/>
        <div className={style.BotoesContainer}>
          <Botao texto="Saiba Mais" to="/saiba-mais" />
          <BotaoGrande texto="Produtos" to="/produtos" />
        </div>
      </section>
    </>
  );
};

export { Inicial };
