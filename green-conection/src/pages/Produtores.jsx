import style from "./produtores.module.css";
import { Cabecalho } from "../componentes/cabecalho";

const Produtores = () => {
  return (
    <div>
      <Cabecalho />
      <h1 className={style.Titulo}>Conheça Nossos Produtores</h1>
    </div>
  );
}

export { Produtores };