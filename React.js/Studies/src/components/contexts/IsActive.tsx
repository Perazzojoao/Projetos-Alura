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

const IsActiveProvider = ({ children }: IsActiveProvider) => {
  const [ isActive, setIsActive ] = useState<IFormValues>({} as IFormValues);
  return ( 
    <IsActiveContext.Provider value={{isActive, setIsActive}}>
      {children}
    </IsActiveContext.Provider>
  );
}

export function useIsActive () {
  const { isActive, setIsActive } = useContext(IsActiveContext);

  function addIsActive ({ tarefa, tempo }: IFormValues) {
    // const inicialValue = {tarefa: '', tempo: ''}
    // setIsActive({tarefa: '', tempo: ''});
    
    setIsActive(prev => {
      if (prev.tarefa === tarefa) {
        return {tarefa: '', tempo: ''};
      }
      return { tarefa, tempo };
    })
    console.log(isActive);
  }

  return { isActive, addIsActive };
}
 
export default IsActiveProvider;