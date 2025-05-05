import { createContext, useContext, useState } from "react";

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const sair = () => setUsuario(null);

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario, sair }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(UsuarioContext);
