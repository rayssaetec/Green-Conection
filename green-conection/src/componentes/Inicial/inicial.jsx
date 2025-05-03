import style from "./inicial.module.css";

import { Cabecalho } from "../cabecalho";
import { Botao } from "../botao";
import { Banner } from "../Banner";
import { BotaoGrande } from "../BotaoGrande";
import { Rodape } from "../rodape";

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
        <Botao texto="Saiba Mais" to="#" onClick={() => scrollToSection("SaibaMais")} />
      </section>

      <section id="SaibaMais" className={style.Section}>
        <Banner />
        <div className={style.BotoesContainer}>
          <BotaoGrande texto="Produtores" to="/produtores" />
          <BotaoGrande texto="Produtos" to="/produtos" />
        </div>
      </section>

      <Rodape />
    </>
  );
};

export { Inicial };
