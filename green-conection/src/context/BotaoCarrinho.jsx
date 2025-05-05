import { useUsuario } from "../context/UsuarioContext";
import { useCarrinho } from "../context/CarrinhoContext"; 

const BotaoCarrinho = () => {
  const { usuario } = useUsuario();
  const { total, quantidade } = useCarrinho(); 

  if (!usuario) return null; 

  return (
    <div className="botao-carrinho">
      <img src="/images/icones/sacola.png" alt="Sacola" />
      <div>
        <p>R$ {total.toFixed(2)}</p>
        <small>{quantidade} item{quantidade > 1 && "s"}</small>
      </div>
    </div>
  );
};

export default BotaoCarrinho;
