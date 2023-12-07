import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  return ( 
    <div className={styles.post}>
      <img className={styles.capa} src={`assets/posts/${post.id}/capa.png`} alt='Capa do post' />
      <h2 className={styles.titulo}>{post.titulo}</h2>
      <Link to={`/posts/${post.id}`}>
        <button className={styles.botaoLer} >Ler</button>
      </Link>
    </div>
  );
}
 
export default PostCard;