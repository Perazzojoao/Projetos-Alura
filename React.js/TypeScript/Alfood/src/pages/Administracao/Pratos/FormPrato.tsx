import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import axios from 'axios';
import IRestaurante from 'interfaces/IRestaurante';
import ITag from 'interfaces/ITag';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPrato = () => {
	const [nomePrato, setNomePrato] = useState('');
	const [descricao, setDescricao] = useState('');

	const [tags, setTags] = useState<ITag[]>([]);
	const [tag, setTag] = useState('');

	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
	const [restaurante, setRestaurante] = useState('');

	const [imagem, setImagem] = useState<File | null>(null);

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get<{ tags: ITag[] }>('http://localhost:8000/api/v2/tags/')
			.then(response => setTags(response.data.tags))
			.catch(error => console.log(error));

		axios
			.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
			.then(response => setRestaurantes(response.data))
			.catch(error => console.log(error));
	}, []);

	const selecionarArquivo = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files?.length) {
			setImagem(event.target.files[0]);
		} else {
			setImagem(null);
		}
	};

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
			<Typography component='h1' variant='h6'>
				Formulário de pratos
			</Typography>
			<Box component='form' sx={{ width: '100%' }} onSubmit={submitForm}>
				<TextField
					value={nomePrato}
					onChange={event => setNomePrato(event.target.value)}
					label='Nome do Prato'
					variant='standard'
					fullWidth
					required
					margin='dense'
				/>
				<TextField
					value={descricao}
					onChange={event => setDescricao(event.target.value)}
					label='Descrição do Prato'
					variant='standard'
					fullWidth
					required
					margin='dense'
				/>
				<FormControl margin='dense' fullWidth>
					<InputLabel id='select-tag'>Tag</InputLabel>
					<Select labelId='select-tag' value={tag} onChange={event => setTag(event.target.value)}>
						{tags.map(tag => (
							<MenuItem key={tag.id} value={tag.id}>
								{tag.value}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl margin='dense' fullWidth>
					<InputLabel id='select-restaurante'>Restaurante</InputLabel>
					<Select
						labelId='select-restaurante'
						value={restaurante}
						onChange={event => setRestaurante(event.target.value)}
					>
						{restaurantes.map(restaurante => (
							<MenuItem key={restaurante.id} value={restaurante.id}>
								{restaurante.nome}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<input type='file' onChange={event => selecionarArquivo(event)} />

				<Button sx={{ marginTop: 1 }} type='submit' variant='outlined' fullWidth>
					Salvar
				</Button>
			</Box>
		</Box>
	);
};

export default FormPrato;
