import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import styles from './Prato.module.scss';
import NotFound from 'pages/NotFound';
import TagsPrato from 'components/TagsPrato';
import PaginaPadrao from 'components/PaginaPadrao';

const Prato = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const prato = cardapio.find(item => item.id === Number(id));

	if (!prato) {
		return <NotFound />;
	}

	return (
		<Routes>
			<Route path='*' element={<PaginaPadrao />}>
				<Route
					index
					element={
						<>
							<button
								className={styles.voltar}
								onClick={() => {
									navigate(-1);
								}}
							>
								{'< Voltar'}
							</button>
							<section className={styles.container}>
								<h1 className={styles.titulo}>{prato.title}</h1>
								<div>
									<img src={prato.photo} alt='Imagem do prato' />
								</div>
								<div className={styles.conteudo}>
									<p className={styles.conteudo__descricao}>{prato.description}</p>
									<TagsPrato {...prato} />
								</div>
							</section>
						</>
					}
				/>
			</Route>
		</Routes>
	);
};

export default Prato;
