import { useCarrinho } from "../context/CarrinhoContext";
import { Cabecalho } from "../componentes/cabecalho";
import style from "./carrinho.module.css";

const agruparPorProdutor = (itens) => {
  const grupos = {};
  itens.forEach((item) => {
    if (!grupos[item.produtor]) grupos[item.produtor] = [];
    grupos[item.produtor].push(item);
  });
  return grupos;
};

const Carrinho = () => {
  const { carrinho } = useCarrinho();

  const total = carrinho.reduce((soma, item) => {
    const precoNum = parseFloat(item.preco.replace("R$", "").replace(",", "."));
    return soma + precoNum * item.quantidade;
  }, 0);

  const grupos = agruparPorProdutor(carrinho);

  return (
    <>
      <Cabecalho />
      <div className={style.container}>
        <h1 className={style.titulo}>Carrinho</h1>

        {Object.entries(grupos).map(([produtor, itens]) => (
          <div key={produtor} className={style.grupo}>
            <h2 className={style.produtor}>{produtor}</h2>
            {itens.map((item, index) => (
              <div key={index} className={style.item}>
                <img src={item.imagem} alt={item.nome} className={style.img} />
                <span className={style.nome}>{item.nome}</span>
                <span className={style.preco}>{item.preco} {item.unidade}</span>
                <span className={style.qtd}>x{item.quantidade}</span>
              </div>
            ))}
          </div>
        ))}

        <div className={style.rodape}>
          <span className={style.totalLabel}>Total</span>
          <span className={style.total}>R$ {total.toFixed(2).replace(".", ",")}</span>
          <button className={style.pagar}>Pagar</button>
        </div>
      </div>
    </>
  );
};

export default Carrinho;
