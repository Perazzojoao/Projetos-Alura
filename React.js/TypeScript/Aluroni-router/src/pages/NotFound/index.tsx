import classNames from 'classnames';
import styles from './NotFound.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { ReactComponent as ImgNotFound } from 'assets/not_found.svg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div
			className={classNames({
				[styles.container]: true,
				[stylesTema.container]: true,
			})}
		>
			<div className={styles.voltar}>
				<button
					onClick={() => {
						navigate(-1);
					}}
				>
					{'< Voltar'}
				</button>
			</div>
			<ImgNotFound />
		</div>
	);
};

export default NotFound;
