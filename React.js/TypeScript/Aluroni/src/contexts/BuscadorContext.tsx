import { ReactNode, createContext, useState } from "react";

type BuscadorProps = {
  children: ReactNode;
}

type Context = {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export const BuscadorContext = createContext({} as Context);

const BuscadorProvider = ({ children }: BuscadorProps) => {
  const [ busca, setBusca ] = useState('');
  return ( 
    <BuscadorContext.Provider value={{ busca, setBusca }}>
      {children}
    </BuscadorContext.Provider>
  );
}
 
export default BuscadorProvider;