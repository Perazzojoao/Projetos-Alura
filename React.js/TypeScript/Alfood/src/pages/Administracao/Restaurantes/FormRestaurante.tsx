import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { error } from 'console';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormRestaurante = () => {
	const [nomeRestaurante, setNomeRestaurante] = useState('');
	const navigate = useNavigate();

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (nomeRestaurante === '') return;

		axios
			.post('http://localhost:8000/api/v2/restaurantes/', { nome: nomeRestaurante })
			.then(() => {
				alert('Restaurante cadastrado com sucesso!');
				navigate('/admin/restaurantes');
			})
			.catch(error => {
				console.log(error);
			});
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
