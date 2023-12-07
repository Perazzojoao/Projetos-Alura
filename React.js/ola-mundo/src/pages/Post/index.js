import './Post.css';

import { useParams } from 'react-router-dom';
import posts from 'json/posts.json'
import PostModelo from 'components/PostModelo';
import Markdown from 'react-markdown';

const Post = () => {

  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  return ( 
    <PostModelo titulo={post.titulo} fotoCapa={`/assets/posts/${post.id}/capa.png`} >
      <div className='post-markdown-container'>
        <Markdown>
          {post.texto}
        </Markdown>
      </div>
    </PostModelo>
  );
}
 
export default Post;