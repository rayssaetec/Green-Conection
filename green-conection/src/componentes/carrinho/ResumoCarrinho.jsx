import { useCarrinho } from "../../context/CarrinhoContext";
import { Link } from "react-router-dom";
import "./ResumoCarrinho.css";

const ResumoCarrinho = () => {
  const { carrinho } = useCarrinho();

  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);

  const totalPreco = carrinho.reduce((soma, item) => {
    const preco = parseFloat(item.preco.replace("R$", "").replace(",", "."));
    return soma + preco * item.quantidade;
  }, 0).toFixed(2).replace(".", ",");

  if (carrinho.length === 0) return null;

  return (
    <div className="resumo-carrinho">
      <span>{totalItens} item(s) | Total: R$ {totalPreco}</span>
      <Link to="/carrinho" className="botao-carrinho">Ver carrinho</Link>
    </div>
  );
};

export default ResumoCarrinho;
