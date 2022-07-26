// CONTEXT PERMITE UTILIZAR UM MESMO VALOR ENTRE VÁRIOS COMPONENTES (VARIÁVEL GLOBAL)

import { createContext } from "react";

export const SomeContext = createContext();

export const HookUseContext = ({ children }) => {
  const contextValue = "testing context";

  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  );
};