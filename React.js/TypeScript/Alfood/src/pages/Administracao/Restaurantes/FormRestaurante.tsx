import { Button, TextField } from '@mui/material';
import axios from 'axios';
import IRestaurante from 'interfaces/IRestaurante';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FormRestaurante = () => {
	const [nomeRestaurante, setNomeRestaurante] = useState('');
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		if (params.id) {
			axios
				.get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${params.id}/`)
				.then(response => {
					setNomeRestaurante(response.data.nome);
				})
				.catch(error => console.log(error));
		}
	}, [params]);

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (params.id) {
			axios
				.put(`http://localhost:8000/api/v2/restaurantes/${params.id}/`, { nome: nomeRestaurante })
				.then(() => {
					alert('Restaurante atualizado com sucesso!');
					navigate('/admin/restaurantes');
				})
				.catch(error => {
					console.log(error);
				});
		} else {
			axios
				.post('http://localhost:8000/api/v2/restaurantes/', { nome: nomeRestaurante })
				.then(() => {
					alert('Restaurante cadastrado com sucesso!');
					navigate('/admin/restaurantes');
				})
				.catch(error => {
					console.log(error);
				});
		}
	};

	return (
		<form onSubmit={submitForm}>
			<TextField
				value={nomeRestaurante}
				onChange={event => setNomeRestaurante(event.target.value)}
				label='Nome do Restaurante'
				variant='standard'
			/>
			<Button type='submit' variant='outlined'>
				Outlined
			</Button>
		</form>
	);
};

export default FormRestaurante;
