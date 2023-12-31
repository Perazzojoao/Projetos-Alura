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
import IPrato from 'interfaces/IPrato';
import IRestaurante from 'interfaces/IRestaurante';
import ITag from 'interfaces/ITag';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FormPrato = () => {
	const [nomePrato, setNomePrato] = useState('');
	const [descricao, setDescricao] = useState('');

	const [tags, setTags] = useState<ITag[]>([]);
	const [tag, setTag] = useState('');

	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
	const [restaurante, setRestaurante] = useState('');

	const [imagem, setImagem] = useState<File | null>(null);

	const navigate = useNavigate();
	const params = useParams();

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

	useEffect(() => {
		if (params.id) {
			axios
				.get<IPrato>(`http://localhost:8000/api/v2/pratos/${params.id}/`)
				.then(response => {
					setNomePrato(response.data.nome);
					setDescricao(response.data.descricao);
					setTag(response.data.tag);
					axios
						.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
						.then(resposta => {
							setRestaurante(() => {
								const pratoAtual = resposta.data.find(
									restaurante => restaurante.id === response.data.restaurante
								)?.id;

								return pratoAtual ? String(pratoAtual) : '';
							});
						})
						.catch(error => console.log(error));
					setImagem(null);
				})
				.catch(error => console.log(error));
		}
	}, [params]);

	const selecionarArquivo = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files?.length) {
			setImagem(event.target.files[0]);
		} else {
			setImagem(null);
		}
	};

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData();

		formData.append('nome', nomePrato);
		formData.append('descricao', descricao);
		formData.append('tag', tag);
		formData.append('restaurante', restaurante);

		if (imagem) formData.append('imagem', imagem);

		if (params.id) {
			axios
				.request({
					url: `http://localhost:8000/api/v2/pratos/${params.id}/`,
					method: 'PUT',
					headers: {
						'Content-Type': 'multipart/form-data',
					},
					data: formData,
				})
				.then(() => {
					alert('Prato atualizado com sucesso!');
					navigate('/admin/pratos');
				})
				.catch(error => console.log(error));
		} else {
			axios
				.request({
					url: 'http://localhost:8000/api/v2/pratos/',
					method: 'POST',
					headers: {
						'Content-Type': 'multipart/form-data',
					},
					data: formData,
				})
				.then(() => {
					alert('Prato cadastrado com sucesso!');
					navigate('/admin/pratos');
				})
				.catch(error => console.log(error));
		}
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
				<FormControl margin='dense' fullWidth required>
					<InputLabel id='select-tag'>Tag</InputLabel>
					<Select labelId='select-tag' value={tag} onChange={event => setTag(event.target.value)}>
						{tags.map(tag => (
							<MenuItem key={tag.id} value={tag.value}>
								{tag.value}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl margin='dense' fullWidth required>
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
