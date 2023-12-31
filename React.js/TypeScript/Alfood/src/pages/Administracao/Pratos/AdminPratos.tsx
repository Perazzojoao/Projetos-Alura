import { useEffect, useState } from 'react';
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
import IPrato from 'interfaces/IPrato';

const AdminPratos = () => {
	const [pratos, setPratos] = useState<IPrato[]>([]);

	useEffect(() => {
		axios
			.get<IPrato[]>('http://localhost:8000/api/v2/pratos/')
			.then(response => {
				setPratos(response.data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	const excluirRestaurante = (pratoAhSerExcluido: IPrato) => {
		axios
			.delete(`http://localhost:8000/api/v2/pratos/${pratoAhSerExcluido.id}/`)
			.then(() => {
				const listaPratos = pratos.filter(prato => prato.id !== pratoAhSerExcluido.id);
				setPratos([...listaPratos]);
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
						<TableCell>Tag</TableCell>
						<TableCell>Imagem</TableCell>
						<TableCell>Editar</TableCell>
						<TableCell>Excluir</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{pratos.map(prato => (
						<TableRow key={prato.id}>
							<TableCell>{prato.nome}</TableCell>
							<TableCell>{prato.tag}</TableCell>
							<TableCell>
								[ <a href={prato.imagem} target='_blank' rel='noreferrer'>
									Ver Imagem
								</a> ]
							</TableCell>
							<TableCell>
								[ <Link to={`/admin/pratos/${prato.id}`}>Editar</Link> ]
							</TableCell>
							<TableCell>
								<Button
									variant='contained'
									color='error'
									onClick={() => {
										excluirRestaurante(prato);
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

export default AdminPratos;
