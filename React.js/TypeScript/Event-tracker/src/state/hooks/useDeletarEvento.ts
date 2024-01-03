import { IEvento } from 'interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from 'state/atom';

const useDeletarEvento = () => {
	const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

	return (evento: IEvento) => {
		setListaDeEventos(listaAntiga => [...listaAntiga.filter(event => event.id !== evento.id)]);
	};
};

export default useDeletarEvento;
