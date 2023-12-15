import { ReactElement, createContext, useContext, useState } from 'react';
import { IFormValues } from '../../interfaces/IFormValues';

interface FormProviderProps {
	children: ReactElement;
}

interface IContext {
  formValues?: IFormValues | {};
  setFormValues?: (value: IFormValues) => void
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

  function formHandler (submitValue: IFormValues) {
    setFormValues?.(submitValue);
  }

  return { formValues, formHandler }
}

export default FormProvider;