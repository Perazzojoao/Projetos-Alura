import { ReactNode } from "react";
import BuscadorProvider from "./BuscadorContext";
import FiltroProvider from "./FiltroContext";
import OrdenadorProvider from "./OrdenadorContext";


type ContextProps = {
  children: ReactNode;
}

const ContextProvider = ({ children }: ContextProps) => {
  return ( 
    <BuscadorProvider>
      <FiltroProvider>
        <OrdenadorProvider>
          {children}
        </OrdenadorProvider>
      </FiltroProvider>
    </BuscadorProvider>
  );
}
 
export default ContextProvider;