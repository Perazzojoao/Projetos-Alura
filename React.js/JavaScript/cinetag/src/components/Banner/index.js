import { useLocation } from 'react-router-dom';
import styles from './Banner.module.css';
import { useEffect, useState } from 'react';

const Banner = () => {

  const location = useLocation();
  const [pathBanner, setPathBanner] = useState('');

  const trocaBanner = () => {
    if(location.pathname === '/favoritos') {
      setPathBanner('banner-favoritos.png');
    } else if(location.pathname.includes("/videos")) {
      setPathBanner('banner-player.png');
    } else {
      setPathBanner('banner-home.png');
    }
  }

  useEffect(() => {
    trocaBanner();
  }, [location.pathname]);

  return ( 
    <img className={styles.banner} src={`/imagens/${pathBanner}`} alt='Imagem no banner' />
  );
}
 
export default Banner;