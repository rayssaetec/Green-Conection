import { useParams } from "react-router-dom";
import { Cabecalho } from "../componentes/cabecalho";
import { useState } from "react";
import "./produto.css";

const produtos = [
  {
    id: "1",
    nome: "Alface Crespa",
    preco: "R$ 6,85",
    unidade: "Kg",
    descricao: "Alface Crespa, colhida fresca sem agrotóxicos.",
    imagem: "/images/produtos/alface-crespa.jpg",
    produtor: "Fazenda Pereira",
    colheita: "01/04/25",
  },
  {
    id: "2",
    nome: "Tomate",
    preco: "R$ 8,00",
    unidade: "Kg",
    descricao: "Tomate maduro e suculento, ideal para saladas.",
    imagem: "/images/produtos/tomate.jpg",
    produtor: "Fazenda São José",
    colheita: "10/04/25",
  },
  {
    id: "3",
    nome: "Cenoura",
    preco: "R$ 4,80",
    unidade: "Kg",
    descricao: "Cenoura crocante e doce, perfeita para sucos.",
    imagem: "/images/produtos/cenoura.jpg",
    produtor: "Sítio Verde",
    colheita: "06/02/25",
  },
  {
    id: "4",
    nome: "Repolho Roxo",
    preco: "R$ 7,00",
    unidade: "Kg",
    descricao: "Repolho roxo fresco, ideal para saladas e refogados.",
    imagem: "/images/produtos/repolho-roxo.jpg",
    produtor: "Fazenda Nova",
    colheita: "24/02/25",
  },
];

const Produto = () => {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === id);
  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };
  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <>
      <Cabecalho />
      <div className="conteudo-produto">
        <div className="card-detalhes">
          <div className="imagem-container">
            <img src={produto.imagem} alt={produto.nome} />
            <h1 className="titulo-produto">{produto.nome}</h1>
          </div>
          <div className="info">
            <h1 className="preco">
              {produto.preco} <span>{produto.unidade}</span>
            </h1>
            <p className="info-menor">
              <strong>{produto.produtor}</strong>
            </p>
            <p className="descricao">{produto.descricao}</p>
            <p className="info-menor">Colheita: {produto.colheita}</p>
            <div className="quantidade">
              <span>Quantidade (UND)</span>
              <div className="quantidade-container">
                <button className="btn-quantidade" onClick={diminuirQuantidade}>
                  -
                </button>
                <span className="quantidade-display">{quantidade}</span>
                <button className="btn-quantidade" onClick={aumentarQuantidade}>
                  +
                </button>
              </div>
            </div>
            <button className="btn-carrinho">Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Produto;
