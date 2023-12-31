import { AppBar, Box, Button, Container, Link, Paper, Toolbar, Typography } from '@mui/material';
import { Outlet, Link as RouterLink } from 'react-router-dom';

const PaginaBaseAdmin = () => {
	return (
		<>
			<AppBar position='static'>
				<Container maxWidth='xl'>
					<Toolbar>
						<Typography variant='h6'>Administração</Typography>
						<Box sx={{ display: 'flex', flexGrow: 1 }}>
							<Link component={RouterLink} to={'/admin/restaurantes'}>
								<Button sx={{ my: 2, color: '#FFFFFF' }}>Restaurantes</Button>
							</Link>
							<Link component={RouterLink} to={'/admin/restaurantes/novo'}>
								<Button sx={{ my: 2, color: '#FFFFFF' }}>Novo Restaurante</Button>
							</Link>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box>
				<Container maxWidth='lg' sx={{ mt: 1 }}>
					<Paper sx={{ padding: 2 }}>
						<Outlet />
					</Paper>
				</Container>
			</Box>
		</>
	);
};

export default PaginaBaseAdmin;
