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

export function useFormularioContext () {
  const { formValues, setFormValues } = useContext(FormularioContext);
  function formHandler (submitValue: IFormValues) {
    setFormValues?.((prev: IFormValues[]): IFormValues[] => [...prev, submitValue]);
  }

  return { formValues, formHandler }
}

export default FormProvider;