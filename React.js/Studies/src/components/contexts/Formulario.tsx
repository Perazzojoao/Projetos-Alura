import { ReactElement, createContext, useContext, useRef, useState } from 'react';
import { IFormValues } from '../../interfaces/IFormValues';

interface FormProviderProps {
	children: ReactElement | ReactElement[];
}

interface IContext {
  formValues?: IFormValues[];
  setFormValues?: (value: IFormValues[]) => void
}

const FormularioContext = createContext({});

const FormProvider = ({ children }: FormProviderProps) => {
	const [formValues, setFormValues] = useState();

	return (
		<FormularioContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </FormularioContext.Provider>
	);
};

export function useFormularioContext () {
  const { formValues, setFormValues }: IContext = useContext(FormularioContext);
  const listaAtual = useRef<IFormValues[]>([]);

  function formHandler (submitValue: IFormValues) {
    listaAtual.current.push(submitValue);
    setFormValues?.([...listaAtual.current]);
  }

  return { formValues, formHandler }
}

export default FormProvider;