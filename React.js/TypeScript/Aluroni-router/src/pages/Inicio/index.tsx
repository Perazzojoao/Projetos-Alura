import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import cardapio from 'data/cardapio.json';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { Prato } from 'types/cardapio';

const Inicio = () => {
	let pratosRecomendados = [...cardapio];
	pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);

	const navigate = useNavigate();

	const redirecionar = useCallback(
		(prato: Prato) => {
			navigate(`/prato/${prato.id}`, { state: {...prato} });
		},
		[pratosRecomendados]
	);

	return (
		<section>
			<h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
			<div className={styles.recomendados}>
				{pratosRecomendados.map(item => (
					<div key={item.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
							<button
								className={styles.recomendado__botao}
								onClick={() => {
									redirecionar(item);
								}}
							>
								Ver mais
							</button>
						</div>
					</div>
				))}
			</div>
			<h3 className={stylesTema.titulo}>Nossa Casa</h3>
			<div className={styles.nossaCasa}>
				<img src={nossaCasa} alt='Casa do Aluroni' />
				<div className={styles.nossaCasa__endereco}>
					Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
				</div>
			</div>
		</section>
	);
};

export default Inicio;
