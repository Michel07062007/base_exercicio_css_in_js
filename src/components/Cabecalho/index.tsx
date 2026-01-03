import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' para projetos novos
import Cabecalho from './Cabecalho.module';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Cabecalho>
      EBAC Jobs
    </Cabecalho>
  </React.StrictMode>
);
