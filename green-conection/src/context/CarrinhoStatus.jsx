import { useCarrinho } from "../context/CarrinhoContext"; 
import { useUsuario } from "../context/UsuarioContext";
import "./CarrinhoStatus.css";

const CarrinhoStatus = () => {
  const { usuario } = useUsuario();
  const { total, quantidade } = useCarrinho(); 

  if (!usuario || quantidade === 0) return null;

  return (
    <div className="carrinho-status">
      <img src="/images/icones/sacola-branca.png" alt="Carrinho" />
      <div>
        <strong>R$ {total.toFixed(2)}</strong>
        <p>{quantidade} item{quantidade > 1 ? "s" : ""}</p>
      </div>
    </div>
  );
};

export default CarrinhoStatus;
