import styles from './Inicio.module.css';
import posts from 'json/posts.json';
import Post from "components/Posts";

const Inicio = () => {
  return ( 
    <ul className={styles.posts} >
      {posts.map(post => (
        <li key={post.id} >
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
 
export default Inicio;