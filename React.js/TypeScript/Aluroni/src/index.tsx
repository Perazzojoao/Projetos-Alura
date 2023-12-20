import React from 'react';
import ReactDOM from 'react-dom/client';
import Cardapio from './pages/Cardapio';
import 'normalize.css';
import './index.css';
import ContextProvider from 'contexts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Cardapio />
    </ContextProvider>
  </React.StrictMode>
);