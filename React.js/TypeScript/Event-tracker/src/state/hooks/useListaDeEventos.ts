import { useRecoilValue } from "recoil";
import { listaDeEventosState } from "state/atom";

const useListaDeEventos = () => {
  return useRecoilValue(listaDeEventosState);
}

export default useListaDeEventos;