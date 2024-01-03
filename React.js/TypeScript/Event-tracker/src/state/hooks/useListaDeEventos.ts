import { useRecoilValue } from "recoil";
import { eventosFiltradosState } from "state/seletores";

const useListaDeEventos = () => {
  return useRecoilValue(eventosFiltradosState);
}

export default useListaDeEventos;