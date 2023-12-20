import { ReactNode, createContext, useState } from "react";

type OrdenadorProps = {
  children: ReactNode;
}

type Context = {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export const OrdenadorContext = createContext({} as Context);

const OrdenadorProvider = ({ children }: OrdenadorProps) => {
  const [ ordenador, setOrdenador ] = useState<string>('');

  return ( 
    <OrdenadorContext.Provider value={{ ordenador, setOrdenador }}>
      {children}
    </OrdenadorContext.Provider>
  );
}
 
export default OrdenadorProvider;