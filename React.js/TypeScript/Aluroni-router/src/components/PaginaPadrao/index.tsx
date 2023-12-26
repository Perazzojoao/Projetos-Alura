import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';


const PaginaPadrao = () => {
  return (
    <>
      <Header />
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </>
  );
};

export default PaginaPadrao;