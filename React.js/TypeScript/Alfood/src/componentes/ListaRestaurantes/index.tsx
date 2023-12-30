import { useCallback, useEffect, useState } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import axios, { AxiosRequestConfig } from 'axios';
import { IPaginacao } from '../../interfaces/IPaginacao';
import { Button, TextField } from '@mui/material';

type CarregarDados = (url: string, options?: AxiosRequestConfig<ParamsBusca>) => void;

type ParamsBusca = {
	ordering?: string;
	search?: string;
};

const ListaRestaurantes = () => {
	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
	const [proxPagina, setProxPagina] = useState('');
	const [busca, setBusca] = useState('');

	const carregarDados: CarregarDados = useCallback((url, options = {}) => {
		axios
			.get<IPaginacao<IRestaurante>>(url, options)
			.then(response => {
				setRestaurantes(response.data.results);
				setProxPagina(response.data.next);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	const verMais = () => {
		axios
			.get<IPaginacao<IRestaurante>>(proxPagina)
			.then(response => {
				setRestaurantes([...restaurantes, ...response.data.results]);
				setProxPagina(response.data.next);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const buscar = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const options = {
			params: {} as ParamsBusca,
		};

		if (busca) {
			options.params.search = busca;
		}
		carregarDados('http://localhost:8000/api/v1/restaurantes/', options);
	};

	useEffect(() => {
		carregarDados('http://localhost:8000/api/v1/restaurantes/');
	}, []);

	return (
		<section className={style.ListaRestaurantes}>
			<h1>
				Os restaurantes mais <em>bacanas</em>!
			</h1>
			<form
				onSubmit={event => {
					buscar(event);
				}}
			>
				<TextField
					id='standard-basic'
					label='Restaurante'
					variant='standard'
					value={busca}
					onChange={event => {
						setBusca(event.target.value);
					}}
				/>
				<Button variant='contained' type='submit'>
					Buscar
				</Button>
			</form>
			{restaurantes?.map(item => (
				<Restaurante restaurante={item} key={item.id} />
			))}
			{proxPagina && <button onClick={verMais}>Ver mais</button>}
		</section>
	);
};

export default ListaRestaurantes;
