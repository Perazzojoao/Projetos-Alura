import { useEffect, useState } from 'react';
import IRestaurante from 'interfaces/IRestaurante';
import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdmRestaurantes = () => {
	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

	useEffect(() => {
		axios
			.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
			.then(response => {
				setRestaurantes(response.data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	const excluirRestaurante = (restauranteAhSerExcluido: IRestaurante) => {
		axios
			.delete(`http://localhost:8000/api/v2/restaurantes/${restauranteAhSerExcluido.id}/`)
			.then(() => {
				const listaRestaurantes = restaurantes.filter(restaurante => restaurante.id !== restauranteAhSerExcluido.id);
				setRestaurantes(listaRestaurantes);
				alert('Restaurante deletado com sucesso!');
			})
			.catch(error => console.log(error));
	};

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Nome</TableCell>
						<TableCell>Editar</TableCell>
						<TableCell>Excluir</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{restaurantes.map(restaurante => (
						<TableRow key={restaurante.id}>
							<TableCell>{restaurante.nome}</TableCell>
							<TableCell>
								[ <Link to={`/admin/restaurantes/${restaurante.id}`}>Editar</Link> ]
							</TableCell>
							<TableCell>
								<Button
									variant='contained'
									color='error'
									onClick={() => {
										excluirRestaurante(restaurante);
									}}
								>
									Excluir
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default AdmRestaurantes;
