import { ReactNode, createContext, useContext, useState } from 'react';
import { IFormValues } from '../../interfaces/IFormValues';

interface FormProviderProps {
	children: ReactNode;
}

interface IContext {
  formValues: IFormValues[];
  setFormValues: (value: IFormValues[] | (ICallBack)) => void;
}

type ICallBack = (prev: IFormValues[]) => IFormValues[];

const FormularioContext = createContext({} as IContext);
FormularioContext.displayName = 'valorForm';

const FormProvider = ({ children }: FormProviderProps) => {
	const [formValues, setFormValues] = useState<IFormValues[]>([]);

	return (
		<FormularioContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </FormularioContext.Provider>
	);
};

// Hook para receber os valores do formulário e formar uma lista.
export function useFormularioContext () {
  const { formValues, setFormValues } = useContext(FormularioContext);
  function formHandler (submitValue: IFormValues) {
    setFormValues((prev: IFormValues[]): IFormValues[] => [...prev, submitValue]);
  }

  return { formValues, formHandler }
}

// Hook para deletar um card.
export function useDeleteCard () {
  const { formValues, setFormValues } = useContext(FormularioContext);

  function deleteCard (tarefa: string) {
    const novaLista = formValues.filter(item => item.tarefa !== tarefa);
    setFormValues(novaLista);
  }

  return deleteCard;
}

export default FormProvider;