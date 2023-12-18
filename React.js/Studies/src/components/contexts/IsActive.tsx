import { ReactNode, createContext, useContext, useState } from "react";
import { IFormValues } from '../../interfaces/IFormValues';

interface IsActiveProvider {
  children: ReactNode;
}

interface IContext {
  isActive: IFormValues;
  setIsActive: (value: IFormValues | (CallBack)) => void;
}

type CallBack = (prev: IFormValues) => IFormValues;

const IsActiveContext = createContext({} as IContext);

// eslint-disable-next-line
const IsActiveProvider = ({ children }: IsActiveProvider) => {
  const [ isActive, setIsActive ] = useState({} as IFormValues);
  return ( 
    <IsActiveContext.Provider value={{isActive, setIsActive}}>
      {children}
    </IsActiveContext.Provider>
  );
}

export function useIsActive () {
  const { isActive, setIsActive } = useContext(IsActiveContext);

  function addIsActive ({ tarefa, tempo }: IFormValues) {
    
    setIsActive(prev => {
      if (prev.tarefa === tarefa) {
        return {tarefa: '', tempo: ''};
      }
      return { tarefa, tempo };
    })
  }

  return { isActive, addIsActive };
}
 
export default IsActiveProvider;