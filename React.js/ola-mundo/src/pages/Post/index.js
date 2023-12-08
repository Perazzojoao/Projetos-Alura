import './Post.css';

import { Route, Routes, useParams } from 'react-router-dom';
import posts from 'json/posts.json'
import PostModelo from 'components/PostModelo';
import Markdown from 'react-markdown';
import NaoEncontrada from 'pages/NaoEncontrada';
import PaginaPadrao from 'components/PaginaPadrao';
import Recomendados from 'components/Recomendados';

const Post = () => {

  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if(!post) {
    return <NaoEncontrada />
  }

  const postsRecomendados = posts
    .filter(post => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return ( 
    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route index element={
          <>
            <PostModelo titulo={post.titulo} fotoCapa={`/assets/posts/${post.id}/capa.png`} >
              <div className='post-markdown-container'>
                <Markdown>
                  {post.texto}
                </Markdown>
              </div>
              <Recomendados posts={postsRecomendados}/>
            </PostModelo>
          </>
        }/>
      </Route>
    </Routes>
  );
}
 
export default Post;