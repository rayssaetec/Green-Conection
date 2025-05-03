import style from "./banner.module.css";

const Banner = () => {
    return (
      <div className={style.Banner}>
        <div className={style.Texto}>
          <h1>Bem-vindo ao Meu Site</h1>
          <p>Esse é o meu banner com uma caixa de texto por cima da imagem.</p>
        </div>
      </div>
    );
  };
  
  export { Banner };