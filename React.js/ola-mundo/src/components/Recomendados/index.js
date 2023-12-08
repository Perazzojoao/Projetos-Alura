import PostCard from 'components/PostCard';
import styles from './Recomendados.module.css';

const Recomendados = ({ posts }) => {
  return ( 
    <>
      <h2 className={styles.titulo}>Outros posts que você pode gostar:</h2>
      <ul className={styles.postsRecomendados}>
        {posts.map(post => (
          <li key={post.id}>
            <PostCard key={post.id} post={post}/>
          </li>
        ))}
      </ul>
    </>
  );
}
 
export default Recomendados;