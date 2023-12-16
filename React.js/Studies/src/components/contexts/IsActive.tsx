import { ReactNode, createContext, useContext, useState } from "react";

interface IsActiveProvider {
  children: ReactNode;
}

interface IContext {
  isActive: string;
  setIsActive: (value: string | (CallBack)) => void;
}

type CallBack = (prev: string) => string;

const IsActiveContext = createContext({} as IContext);

const IsActiveProvider = ({ children }: IsActiveProvider) => {
  const [ isActive, setIsActive ] = useState<string>('');
  return ( 
    <IsActiveContext.Provider value={{isActive, setIsActive}}>
      {children}
    </IsActiveContext.Provider>
  );
}

export function useIsActive () {
  const { isActive, setIsActive } = useContext(IsActiveContext);

  function addIsActive (tarefa: string) {
    if (isActive === '') {
      setIsActive(tarefa);
    } else {
      setIsActive(prev => {
        if (prev === tarefa) {
          return '';
        }
        return tarefa;
      })
    }
    console.log(tarefa);
  }

  return { isActive, addIsActive };
}
 
export default IsActiveProvider;