import { useCallback, useEffect, useState } from 'react';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import axios, { AxiosRequestConfig } from 'axios';
import { IPaginacao } from '../../interfaces/IPaginacao';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

type CarregarDados = (url: string, options?: AxiosRequestConfig<ParamsBusca>) => void;

type ParamsBusca = {
	ordering?: string;
	search?: string;
};

const ListaRestaurantes = () => {
	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
	const [proxPagina, setProxPagina] = useState('');
	const [busca, setBusca] = useState('');
	const [ordenacao, setOrdenacao] = useState('');

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
		if (ordenacao) {
			options.params.ordering = ordenacao;
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
				className={style.formWrapper}
				onSubmit={event => {
					buscar(event);
				}}
			>
				<Box sx={{ display: 'flex', gap: 10 }}>
					<TextField
						id='standard-basic'
						label='Restaurante'
						variant='standard'
						fullWidth
						value={busca}
						onChange={event => {
							setBusca(event.target.value);
						}}
					/>
					<FormControl>
						<InputLabel id='demo-simple-select-label'>Ordenar</InputLabel>
						<Select
							sx={{ minWidth: 140 }}
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={ordenacao}
							label='Ordenar'
							onChange={event => {
								setOrdenacao(event.target.value);
							}}
						>
							<MenuItem value=''>Padrão</MenuItem>
							<MenuItem value='id'>Por id</MenuItem>
							<MenuItem value='nome'>Por Nome</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<div className={style.button}>
					<Button variant='contained' type='submit'>
						Buscar
					</Button>
				</div>
			</form>
			{restaurantes?.map(item => (
				<Restaurante restaurante={item} key={item.id} />
			))}
			{proxPagina && <button onClick={verMais}>Ver mais</button>}
		</section>
	);
};

export default ListaRestaurantes;
