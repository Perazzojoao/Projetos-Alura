import { IFormValues } from '../../interfaces/IFormValues';

export function tarefaRepetida (formValues: IFormValues[], tarefa: string) {
  return formValues.some(item => item.tarefa.toLowerCase() === tarefa.toLowerCase());
}