import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
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
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
			<Typography component='h1' variant='h6'>
				Formulário de restaurantes
			</Typography>
			<Box component='form' sx={{ width: '100%' }} onSubmit={submitForm}>
				<TextField
					value={nomeRestaurante}
					onChange={event => setNomeRestaurante(event.target.value)}
					label='Nome do Restaurante'
					variant='standard'
					fullWidth
					required
				/>
				<Button sx={{ marginTop: 1 }} type='submit' variant='outlined' fullWidth>
					Salvar
				</Button>
			</Box>
		</Box>
	);
};

export default FormRestaurante;
