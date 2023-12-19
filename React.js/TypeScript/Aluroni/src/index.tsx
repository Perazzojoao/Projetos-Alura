import React from 'react';
import ReactDOM from 'react-dom/client';
import Cardapio from './pages/Cardapio';
import 'normalize.css';
import './index.css';
import BuscadorProvider from 'contexts/BuscadorContext';
import FiltroProvider from 'contexts/FiltroContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BuscadorProvider>
      <FiltroProvider>
        <Cardapio />
      </FiltroProvider>
    </BuscadorProvider>
  </React.StrictMode>
);