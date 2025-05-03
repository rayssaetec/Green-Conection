import style from "./banner.module.css";

const Banner = () => {
  return (
    <div className={style.Banner}>
      <img
        src="../../../public/images/elementos/Banner.jpg"
        alt="Banner"
        className={style.BannerImg}
      />
      <div className={style.Texto}>
        <h1>Produtores Familiares</h1>
        <p>A agricultura familiar é a força que 
          cuida da terra e alimenta o Brasil com 
          responsabilidade. Com práticas sustentáveis, 
          ela preserva o meio ambiente, protege a 
          biodiversidade e mantém vivas as tradições 
          do campo. É geração de renda, emprego e qualidade 
          de vida no interior. Valorize quem cultiva com 
          respeito e consciência.</p>
      </div>
    </div>
  );
};

export { Banner };
