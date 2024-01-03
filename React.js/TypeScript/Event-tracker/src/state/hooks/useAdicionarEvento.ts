import { IEvento } from 'interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from 'state/atom';
import { obterId } from 'util.ts';

const useAdicionarEvento = () => {
	const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

	return (evento: IEvento) => {
		evento.id = obterId();
		const hoje = new Date();
		if (evento.inicio < hoje) {
			throw new Error('Eventos não podem ser cadastrados com data retroativa!');
		}

		return setListaDeEventos(listaAntiga => {
			fetch('http://localhost:8080/eventos', {
				method: 'POST',
				body: JSON.stringify(evento),
				headers: { 'Content-type': 'application/json; charset=UTF-8' },
			})
				.then(() => console.log('Evento criado com sucesso!'))
				.catch(error => console.log(error));

			return [...listaAntiga, evento];
		});
	};
};

export default useAdicionarEvento;
