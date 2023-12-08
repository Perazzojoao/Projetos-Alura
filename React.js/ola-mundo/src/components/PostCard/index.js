import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';
import BotaoPrincipal from 'components/BotaoPrincipal';

const PostCard = ({ post }) => {
  return ( 
    <div className={styles.post}>
      <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} alt='Capa do post' />
      <h2 className={styles.titulo}>{post.titulo}</h2>
      <Link to={`/posts/${post.id}`}>
        <BotaoPrincipal>
          Ler
        </BotaoPrincipal>
      </Link>
    </div>
  );
}
 
export default PostCard;