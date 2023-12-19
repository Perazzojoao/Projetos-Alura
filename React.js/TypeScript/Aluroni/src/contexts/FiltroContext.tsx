import { ReactNode, createContext, useState } from "react";

type BuscadorProps = {
  children: ReactNode;
}

type Context = {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export const FiltroContext = createContext({} as Context);

const FiltroProvider = ({ children }: BuscadorProps) => {
  const [ filtro, setFiltro ] = useState<null | number>(null);

  return ( 
    <FiltroContext.Provider value={{ filtro, setFiltro }}>
      {children}
    </FiltroContext.Provider>
  );
}
 
export default FiltroProvider;