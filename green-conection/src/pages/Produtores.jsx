import style from "./Produtores.module.css";
import { Rodape } from "../componentes/rodape";
import { Cabecalho } from "../componentes/cabecalho";

const Produtores = () => {
  return (
    <div>
      <Cabecalho />

      <div className={style.container}>
        <h1 className={style.titulo}>
          Conheça nossos <em>Produtores</em>
        </h1>

        <div className={style.produtor}>
          <div className={style.colunaImagens}>
            <img src="/images/produtores/produtor.png" alt="Produtor" className={style.img} />
          </div>

          <div className={style.colunaTexto}>
            <h2 className={style.nome}><em>Sítio Irmãos Neto</em></h2>
            <p><strong>Localização:</strong> Chapada do Sol, MG</p>
            <p><strong>Fundação:</strong> 1972</p>
            <p><strong>Fundadores:</strong> Os irmãos Antônio, Francisco e Geraldo Neto</p>
            <h4 className={style.subtitulo}><em>História do Lote</em></h4>
            <p className={style.historia}>
              O Sítio Irmãos Neto foi fundado pelos três irmãos Neto, que herdaram terras do avô que o último pedido fora que suas plantações ajudassem eles e outras pessoas. Juntos, decidiram transformá-las em um negócio próspero. Começaram com o cultivo de repolho e escarola, mas, com o tempo, diversificaram a produção investindo em mais verduras como acelga e couve chinesa.
            </p>
          </div>
        </div>

        <div className={style.produtor}>
          <div className={style.colunaImagens}>
            <img src="/images/produtores/plantacao.png" alt="Produtor" className={style.img} />
          </div>

          <div className={style.colunaTexto}>
            <h2 className={style.nome}><em>Rancho Ganzarolli</em></h2>
            <p><strong>Localização:</strong> Campos de Cima da Serra, Rio Grande do Sul</p>
            <p><strong>Fundação:</strong> 2005</p>
            <p><strong>Fundadores:</strong> Matriarca Fernanda Ganzarolli e suas filhas Gloria, Stefani e Luiza</p>
            <h4 className={style.subtitulo}><em>História do Lote</em></h4>
            <p className={style.historia}>
            Nascido no coração da cultura gaúcha, o Rancho Ganzarolli foi fundado por Marta Ganzarolli, uma viúva que transformou luto em força. Com suas três filhas, criou um empreendimento que desafia estereótipos no campo com um modelo de agricultura 100% administrado por mulheres. Macieiras foram o início da história do rancho e depois expandiram para outros tipos de frutas, verduras e legumes.
            </p>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export { Produtores };
