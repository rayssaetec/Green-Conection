import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarItem = (item) => {
    setCarrinho((atual) => {
      const existente = atual.find((p) => p.id === item.id);
      if (existente) {
        return atual.map((p) =>
          p.id === item.id ? { ...p, quantidade: p.quantidade + item.quantidade } : p
        );
      } else {
        return [...atual, item];
      }
    });
  };

  const total = carrinho.reduce(
    (acc, item) => acc + item.quantidade * parseFloat(item.preco.replace("R$", "").replace(",", ".")),
    0
  );

  const quantidadeTotal = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarItem, total, quantidadeTotal }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => useContext(CarrinhoContext);
