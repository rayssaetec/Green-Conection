import { createContext, useContext, useState, useEffect } from "react";

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const salvo = localStorage.getItem("usuario");
    return salvo ? JSON.parse(salvo) : null;
  });

  const [usuariosCadastrados, setUsuariosCadastrados] = useState(() => {
    const salvos = localStorage.getItem("usuariosCadastrados");
    return salvos ? JSON.parse(salvos) : [];
  });

  const cadastrarUsuario = (novoUsuario) => {
    const atualizados = [...usuariosCadastrados, novoUsuario];
    setUsuariosCadastrados(atualizados);
    localStorage.setItem("usuariosCadastrados", JSON.stringify(atualizados));
    setUsuario(novoUsuario);
    localStorage.setItem("usuario", JSON.stringify(novoUsuario));
  };

  const loginUsuario = (credenciais) => {
    const achado = usuariosCadastrados.find((u) =>
      u.tipo === credenciais.tipo &&
      ((u.tipo === "cliente" && u.email === credenciais.email) ||
       (u.tipo === "produtor" && u.cnpj === credenciais.cnpj)) &&
      u.senha === credenciais.senha
    );

    if (achado) {
      setUsuario(achado);
      localStorage.setItem("usuario", JSON.stringify(achado));
      return true;
    }
    return false;
  };

  const sair = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  return (
    <UsuarioContext.Provider value={{ usuario, cadastrarUsuario, loginUsuario, sair }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(UsuarioContext);
